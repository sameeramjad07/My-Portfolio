'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

import { Button } from '@/components/button';
import { Icons } from '@/components/icons';
import { projectsData } from '@/lib/data';

type TProject = (typeof projectsData)[number];

type TProps = {
  project: TProject;
  index: number;
};

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

export const Project = ({ project, index }: TProps) => {
  const { image, title, description, technologies, links } = project;

  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
      }}
      custom={index}
      className="bg-secondary flex h-[350px] w-full max-w-[350px] flex-col rounded-lg p-6 shadow-lg transition-all hover:shadow-xl hover:-translate-y-2"
    >
      {/* Image Section */}
      {/* <div className="relative mb-4 flex justify-center">
        <div className="bg-muted rounded-full p-3 transition-transform hover:scale-110">
          <Image src={image} alt={`${title} image`} width={40} height={40} />
        </div>
      </div> */}

      {/* Title */}
      <h3 className="mt-2 mb-4 text-xl text-center font-semibold text-primary">
        {title}
      </h3>

      {/* Description (Fixed Height with Overflow) */}
      <p className="text-muted-foreground text-justify mb-4 h-20 overflow-hidden text-ellipsis text-sm">
        {description}
      </p>

      {/* Technologies */}
      <div className="flex flex-wrap justify-center gap-2">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="bg-muted rounded-full px-2.5 py-1 text-xs font-medium text-primary transition-colors hover:bg-primary hover:text-white"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Buttons (Fixed at Bottom) */}
      <div className="mt-auto flex justify-center gap-2">
        {'preview' in links && links.preview && (
          <Button
            variant="outline"
            asChild
            className="px-4 transition-colors hover:bg-primary hover:text-white"
          >
            <a href={links.preview} aria-label="preview project">
              <Icons.preview className="size-5 mr-2" />
              <span className="font-bold">Link</span>
            </a>
          </Button>
        )}
        {'github' in links && links.github && (
          <Button variant="outline" asChild className="px-4 transition-colors">
            <a href={links.github} aria-label="github">
              <Icons.githubOutline className="size-5 mr-2" />
              <span className="font-bold">Source</span>
            </a>
          </Button>
        )}
        {Object.keys(links).length === 0 && (
          <Button
            variant="outline"
            className="font-bold px-4 transition-colors"
          >
            Coming Soon
          </Button>
        )}
      </div>
    </motion.div>
  );
};
