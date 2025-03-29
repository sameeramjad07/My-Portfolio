'use client';

import 'react-vertical-timeline-component/style.min.css';

import { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, X, ExternalLink, ChevronDown, Code } from 'lucide-react';

import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { researchData } from '@/lib/data';

import { Button } from '@/components/button';
import { cn } from '@/lib/utils';

export const Research = () => {
  const { ref: sectionRef } = useSectionInView('Research');
  const [selectedInstitution, setSelectedInstitution] = useState<number | null>(
    null
  );
  const [selectedPaper, setSelectedPaper] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<'papers' | 'projects'>('papers');
  const detailsRef = useRef<HTMLDivElement>(null);
  // Ensure useInView is called at the top level
  const { ref: inViewRef, inView } = useInView();

  const institutionRefs = useRef<(HTMLElement | null)[]>([]);

  const handleInstitutionClick = (id: number) => {
    // If clicking the same institution, toggle it off
    if (id === selectedInstitution) {
      setSelectedInstitution(null);
      setSelectedPaper(null);
      setSelectedProject(null);
    } else {
      const institution = researchData.find((item) => item.id === id);
      setSelectedInstitution(id);
      setSelectedPaper(null);
      setSelectedProject(null);

      // Set the active tab based on what content is available
      if (institution?.projects?.length && !institution?.papers?.length) {
        setActiveTab('projects');
      } else {
        setActiveTab('papers');
      }

      // Scroll to details section after animation completes
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }, 300);
    }

    return <div ref={inViewRef}>{/* Your component JSX */}</div>;
  };

  const handlePaperClick = (paperId: string) => {
    setSelectedPaper(paperId);
    setSelectedProject(null);
  };

  const handleProjectClick = (projectId: string) => {
    setSelectedProject(projectId);
    setSelectedPaper(null);
  };

  const selectedInstitutionData =
    selectedInstitution !== null
      ? researchData.find((item) => item.id === selectedInstitution)
      : null;

  const selectedPaperData =
    selectedPaper !== null && selectedInstitutionData?.papers
      ? selectedInstitutionData.papers.find(
          (paper) => paper.id === selectedPaper
        )
      : null;

  const selectedProjectData =
    selectedProject !== null && selectedInstitutionData?.projects
      ? selectedInstitutionData.projects.find(
          (project) => project.id === selectedProject
        )
      : null;

  const hasProjects = (selectedInstitutionData?.projects?.length ?? 0) > 0;
  const hasPapers = (selectedInstitutionData?.papers?.length ?? 0) > 0;

  return (
    <section ref={sectionRef} id="research" className="my-10 scroll-mt-28">
      <SectionHeading
        heading="My Research"
        content="Academic research and publications from my career in various institutions."
      />

      {/* Horizontal Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {researchData.map((item, index) => {
          const { inView, ref } = useInView({
            triggerOnce: true,
            threshold: 0.2,
          });

          institutionRefs.current[index] = ref as unknown as HTMLElement;

          const projectsCount = item.projects?.length || 0;
          const papersCount = item.papers?.length || 0;

          return (
            <motion.div
              key={item.id}
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className={cn(
                'bg-secondary flex flex-col h-[300px] rounded-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-md',
                selectedInstitution === item.id &&
                  'bg-primary text-primary-foreground'
              )}
              onClick={() => handleInstitutionClick(item.id)}
            >
              <h3 className="text-xl font-medium mb-2">{item.title}</h3>

              <p className="font-medium mb-2">{item.role}</p>
              <p className="text-sm">{item.location}</p>

              <p
                className={cn(
                  'mt-3 text-sm',
                  selectedInstitution === item.id
                    ? 'text-primary-foreground/90'
                    : 'text-muted-foreground'
                )}
              >
                {item.description}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <div className="flex flex-col gap-1">
                  {projectsCount > 0 && (
                    <span className="text-sm font-medium">
                      {projectsCount} project{projectsCount !== 1 ? 's' : ''}
                    </span>
                  )}
                  {papersCount > 0 && (
                    <span className="text-sm font-medium">
                      {papersCount} publication{papersCount !== 1 ? 's' : ''}
                    </span>
                  )}
                </div>
                <ChevronDown
                  className={cn(
                    'h-5 w-5 transition-transform',
                    selectedInstitution === item.id && 'rotate-180'
                  )}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Expandable Details Section */}
      <div ref={detailsRef}>
        <AnimatePresence>
          {selectedInstitution !== null && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-secondary rounded-lg overflow-hidden mb-8"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-xl font-medium">
                    Research at {selectedInstitutionData?.title}
                  </h3>
                  <Button
                    size="icon"
                    onClick={() => setSelectedInstitution(null)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

                {/* Tabs for Papers and Projects */}
                {hasProjects && hasPapers && (
                  <div className="flex gap-4 mb-6">
                    <Button
                      size="sm"
                      variant={activeTab === 'papers' ? 'default' : 'outline'}
                      onClick={() => {
                        setActiveTab('papers');
                        setSelectedPaper(null);
                        setSelectedProject(null);
                      }}
                    >
                      <FileText className="h-4 w-4 mr-2" />
                      Publications
                    </Button>
                    <Button
                      size="sm"
                      variant={activeTab === 'projects' ? 'default' : 'outline'}
                      onClick={() => {
                        setActiveTab('projects');
                        setSelectedPaper(null);
                        setSelectedProject(null);
                      }}
                    >
                      <Code className="h-4 w-4 mr-2" />
                      Projects
                    </Button>
                  </div>
                )}

                {/* Papers Section */}
                {activeTab === 'papers' && hasPapers && (
                  <>
                    {selectedPaper === null ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedInstitutionData?.papers.map((paper) => (
                          <motion.div
                            key={paper.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => handlePaperClick(paper.id)}
                            className="bg-background p-4 rounded-lg cursor-pointer hover:shadow-md transition-all"
                          >
                            <div className="flex items-start gap-3">
                              <FileText className="h-5 w-5 mt-1 text-primary" />
                              <div>
                                <h4 className="font-medium">{paper.title}</h4>
                                <p className="text-sm text-muted-foreground">
                                  {paper.journal}, {paper.year}
                                </p>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <Button
                          size="sm"
                          className="mb-2"
                          onClick={() => setSelectedPaper(null)}
                        >
                          ← Back to publications
                        </Button>

                        <div className="bg-background p-6 rounded-lg">
                          <h3 className="text-xl font-medium">
                            {selectedPaperData?.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {selectedPaperData?.journal},{' '}
                            {selectedPaperData?.year}
                          </p>

                          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div>
                              <h4 className="text-sm font-medium mb-2">
                                Authors
                              </h4>
                              <p className="text-sm">
                                {selectedPaperData?.authors.join(', ')}
                              </p>
                            </div>

                            <div className="md:col-span-2">
                              <h4 className="text-sm font-medium mb-2">
                                Abstract
                              </h4>
                              <p className="text-sm text-muted-foreground">
                                {selectedPaperData?.abstract}
                              </p>
                            </div>
                          </div>

                          <div className="mt-6">
                            <h4 className="text-sm font-medium mb-2">
                              Keywords
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {selectedPaperData?.tags?.map((tag) => (
                                <span
                                  key={tag}
                                  className="bg-muted rounded-full px-2.5 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-white"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="mt-6">
                            <a
                              href={selectedPaperData?.link}
                              className="inline-flex items-center text-sm text-primary hover:underline"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Read full paper
                              <ExternalLink className="ml-1 h-3 w-3" />
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </>
                )}

                {/* Projects Section */}
                {activeTab === 'projects' && hasProjects && (
                  <>
                    {selectedProject === null ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedInstitutionData?.projects.map((project) => (
                          <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3 }}
                            onClick={() => handleProjectClick(project.id)}
                            className="bg-background p-4 rounded-lg cursor-pointer hover:shadow-md transition-all"
                          >
                            <div className="flex items-start gap-3">
                              <Code className="h-5 w-5 mt-1 text-primary" />
                              <div>
                                <h4 className="font-medium">{project.title}</h4>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-4"
                      >
                        <Button
                          size="sm"
                          className="mb-2"
                          onClick={() => setSelectedProject(null)}
                        >
                          ← Back to projects
                        </Button>

                        <div className="bg-background p-6 rounded-lg">
                          <h3 className="text-xl font-medium">
                            {selectedProjectData?.title}
                          </h3>

                          <div className="mt-4">
                            <h4 className="text-sm font-medium mb-2">
                              Description
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {selectedProjectData?.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </>
                )}

                {/* Show message if no content is available */}
                {!hasProjects && !hasPapers && (
                  <div className="p-6 rounded-lg text-center">
                    <p className="text-muted-foreground">
                      No Publications yet 😅. Coming Soon IA!
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
