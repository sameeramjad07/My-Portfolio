'use client';

import 'react-vertical-timeline-component/style.min.css';

import { useState, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, X, ExternalLink, ChevronDown } from 'lucide-react';

import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';

import { Button } from '@/components/button';
import { cn } from '@/lib/utils';

// Sample research data - replace with your actual data
const researchData = [
  {
    id: 1,
    title: 'Stanford University',
    role: 'Research Scientist',
    location: 'Computer Science Department',
    date: '2020 - Present',
    description:
      'Leading research in artificial intelligence and machine learning applications.',
    icon: 'microscope',
    papers: [
      {
        id: 'p1',
        title: 'EdgeNN: Efficient Neural Network Deployment for Edge Devices',
        journal: 'IEEE Transactions on Neural Networks and Learning Systems',
        year: '2022',
        abstract:
          'This paper presents a novel approach to optimizing neural networks for deployment on resource-constrained edge devices. We introduce a compression technique that reduces model size by 85% while maintaining 97% of the original accuracy.',
        authors: ['You', 'A. Colleague', 'B. Researcher'],
        tags: ['Edge Computing', 'Neural Networks', 'Model Optimization'],
        link: '#',
      },
      {
        id: 'p2',
        title:
          'Privacy-Preserving Federated Learning for Electronic Health Records',
        journal: 'Nature Digital Medicine',
        year: '2021',
        abstract:
          'We propose a federated learning framework that enables collaborative model training across multiple healthcare institutions without sharing sensitive patient data. Our approach demonstrates superior privacy guarantees while achieving state-of-the-art predictive performance.',
        authors: ['You', 'C. Collaborator', 'D. Expert'],
        tags: ['Federated Learning', 'Healthcare', 'Privacy'],
        link: '#',
      },
    ],
  },
  {
    id: 2,
    title: 'MIT Media Lab',
    role: 'Visiting Researcher',
    location: 'Human-Computer Interaction Group',
    date: '2018 - 2020',
    description:
      'Conducted research on novel interaction paradigms and their applications in augmented reality.',
    icon: 'microscope',
    papers: [
      {
        id: 'p3',
        title:
          'NaturalGesture: Intuitive Interaction in Augmented Reality Environments',
        journal: 'ACM CHI Conference on Human Factors in Computing Systems',
        year: '2019',
        abstract:
          'This paper introduces NaturalGesture, a system for recognizing and interpreting natural hand gestures in augmented reality environments. Our user studies demonstrate a 43% improvement in task completion time compared to traditional AR interaction methods.',
        authors: ['You', 'E. Designer', 'F. Engineer'],
        tags: [
          'Augmented Reality',
          'Gesture Recognition',
          'Human-Computer Interaction',
        ],
        link: '#',
      },
    ],
  },
  {
    id: 3,
    title: 'ETH Zurich',
    role: 'PhD Researcher',
    location: 'Computer Vision Lab',
    date: '2015 - 2018',
    description:
      'Focused on computer vision algorithms for autonomous systems and robotics applications.',
    icon: 'microscope',
    papers: [
      {
        id: 'p4',
        title: 'FastDetect: Real-time Object Detection for Autonomous Driving',
        journal:
          'IEEE Conference on Computer Vision and Pattern Recognition (CVPR)',
        year: '2017',
        abstract:
          'We present FastDetect, a lightweight object detection framework optimized for autonomous driving scenarios. Our approach achieves 60 FPS on embedded hardware while maintaining competitive mAP scores on standard benchmarks.',
        authors: ['You', 'G. Mentor', 'H. Colleague'],
        tags: ['Computer Vision', 'Object Detection', 'Autonomous Driving'],
        link: '#',
      },
      {
        id: 'p5',
        title: 'MonoDepth: Learning Depth from Single Images',
        journal: 'European Conference on Computer Vision (ECCV)',
        year: '2016',
        abstract:
          'This paper introduces a novel deep learning architecture for estimating depth maps from monocular images. Our unsupervised approach eliminates the need for expensive ground truth depth data while outperforming previous supervised methods.',
        authors: ['You', 'I. Professor', 'J. Student'],
        tags: ['Depth Estimation', 'Computer Vision', 'Deep Learning'],
        link: '#',
      },
    ],
  },
];

export const Research = () => {
  const { ref: sectionRef } = useSectionInView('Research');
  const [selectedInstitution, setSelectedInstitution] = useState<number | null>(
    null
  );
  const [selectedPaper, setSelectedPaper] = useState<string | null>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  const handleInstitutionClick = (id: number) => {
    // If clicking the same institution, toggle it off
    if (id === selectedInstitution) {
      setSelectedInstitution(null);
      setSelectedPaper(null);
    } else {
      setSelectedInstitution(id);
      setSelectedPaper(null);

      // Scroll to details section after animation completes
      setTimeout(() => {
        detailsRef.current?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }, 300);
    }
  };

  const handlePaperClick = (paperId: string) => {
    setSelectedPaper(paperId);
  };

  const selectedInstitutionData =
    selectedInstitution !== null
      ? researchData.find((item) => item.id === selectedInstitution)
      : null;

  const selectedPaperData =
    selectedPaper !== null && selectedInstitutionData
      ? selectedInstitutionData.papers.find(
          (paper) => paper.id === selectedPaper
        )
      : null;

  return (
    <section ref={sectionRef} id="research" className="my-10 scroll-mt-28">
      <SectionHeading
        heading="My Research"
        content="Academic research and publications from my career in various institutions."
      />

      {/* Horizontal Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {researchData.map((item) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.2,
          });

          return (
            <motion.div
              key={item.id}
              ref={ref}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className={cn(
                'bg-secondary flex flex-col h-[270px] rounded-lg p-6 cursor-pointer transition-all duration-300 hover:shadow-md',
                selectedInstitution === item.id &&
                  'bg-primary text-primary-foreground'
              )}
              onClick={() => handleInstitutionClick(item.id)}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className={cn(
                    'p-2 rounded-full',
                    selectedInstitution === item.id
                      ? 'bg-primary-foreground/20'
                      : 'bg-background'
                  )}
                >
                  <Icons.microscope
                    className={cn(
                      'h-6 w-6',
                      selectedInstitution === item.id
                        ? 'text-primary-foreground'
                        : 'text-primary'
                    )}
                  />
                </div>
                <h3 className="text-xl font-medium">{item.title}</h3>
              </div>

              <p className="font-medium">{item.role}</p>
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
                <span className="text-sm font-medium">
                  {item.papers.length} publication
                  {item.papers.length !== 1 ? 's' : ''}
                </span>
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
                  <h3 className="text-xl font-medium flex items-center gap-2">
                    <Icons.microscope className="h-5 w-5 text-primary" />
                    Publications at {selectedInstitutionData?.title}
                  </h3>
                  <Button
                    size="icon"
                    onClick={() => setSelectedInstitution(null)}
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>

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
                        {selectedPaperData?.journal}, {selectedPaperData?.year}
                      </p>

                      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                          <h4 className="text-sm font-medium mb-2">Authors</h4>
                          <p className="text-sm">
                            {selectedPaperData?.authors.join(', ')}
                          </p>
                        </div>

                        <div className="md:col-span-2">
                          <h4 className="text-sm font-medium mb-2">Abstract</h4>
                          <p className="text-sm text-muted-foreground">
                            {selectedPaperData?.abstract}
                          </p>
                        </div>
                      </div>

                      <div className="mt-6">
                        <h4 className="text-sm font-medium mb-2">Keywords</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedPaperData?.tags.map((tag) => (
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
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
