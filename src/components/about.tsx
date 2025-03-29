'use client';

import { motion } from 'framer-motion';

import { SectionHeading } from '@/components/section-heading';
import { Skills } from '@/components/skills';
import { useSectionInView } from '@/hooks/use-section-in-view';

export const About = () => {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      id="about"
      className="my-10 flex w-full scroll-mt-28 flex-col items-center"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading heading="About Me" />
      <div className="-mt-5 max-w-2xl text-center leading-7">
        <p className="mb-4">
          I&apos;m Muhammad Sameer Amjad, a student from Pakistan at NUST,
          Islamabad. Been coding for about three years. I like solving problems
          with code. AI and web stuff are my thing — Large Language Models, deep
          learning, NEXT.js, TypeScript. Worked on many web projects and some
          apps too. I use JavaScript, TailwindCSS, Python, AWS, and a bit of SQL
          too.
        </p>
        <p>
          Another thing close to my heart is Literature. Currently, hooked on
          pushing LLMs for 6G, dreaming up innovations there. Always learning
          more.
        </p>
      </div>
      <Skills />
    </motion.section>
  );
};
