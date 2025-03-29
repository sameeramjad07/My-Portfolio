'use client';

import * as React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Button } from '@/components/button';
import Link from 'next/link';
import { Icons } from './icons';

type HeroProps = {
  className?: string;
  gradient?: boolean;
  blur?: boolean;
  title?: string;
  subtitle?: string;
  actions?: {
    label: string;
    href: string;
    variant?: 'default' | 'outline' | 'ghost';
  }[];
  titleClassName?: string;
  subtitleClassName?: string;
  actionsClassName?: string;
};

const Hero = React.forwardRef<HTMLElement, HeroProps>(
  (
    {
      className,
      gradient = true,
      blur = true,
      title = 'Muhammad Sameer Amjad',
      subtitle = 'Computer Science Student | AI Enthusiast',
      titleClassName,
      subtitleClassName,
      actionsClassName,
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        id="home"
        className={cn(
          'relative z-0 flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden rounded-md bg-background',
          className
        )}
        {...props}
      >
        {gradient && (
          <div className=" absolute top-0 isolate z-0 hidden md:flex w-screen flex-1 items-start justify-center">
            {blur && (
              <div className="absolute top-0 z-50 h-48 w-screen bg-transparent opacity-10 backdrop-blur-md" />
            )}

            {/* Main glow */}
            <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-[-30%] rounded-full bg-primary/60 opacity-80 blur-3xl" />

            {/* Lamp effect */}
            <motion.div
              initial={{ width: '8rem' }}
              viewport={{ once: true }}
              transition={{ ease: 'easeInOut', delay: 0.3, duration: 0.8 }}
              whileInView={{ width: '16rem' }}
              className="absolute top-0 z-30 h-36 -translate-y-[20%] rounded-full bg-primary/60 blur-2xl"
            />

            {/* Top line */}
            <motion.div
              initial={{ width: '15rem' }}
              viewport={{ once: true }}
              transition={{ ease: 'easeInOut', delay: 0.3, duration: 0.8 }}
              whileInView={{ width: '30rem' }}
              className="absolute inset-auto z-50 h-0.5 -translate-y-[-10%] bg-primary/60"
            />

            {/* Left gradient cone */}
            <motion.div
              initial={{ opacity: 0.5, width: '15rem' }}
              whileInView={{ opacity: 1, width: '30rem' }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: 'easeInOut',
              }}
              style={{
                backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
              }}
              className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-primary/60 via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
            >
              <div className="absolute w-[100%] left-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
              <div className="absolute w-40 h-[100%] left-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
            </motion.div>

            {/* Right gradient cone */}
            <motion.div
              initial={{ opacity: 0.5, width: '15rem' }}
              whileInView={{ opacity: 1, width: '30rem' }}
              transition={{
                delay: 0.3,
                duration: 0.8,
                ease: 'easeInOut',
              }}
              style={{
                backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
              }}
              className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-primary/60 [--conic-position:from_290deg_at_center_top]"
            >
              <div className="absolute w-40 h-[100%] right-0 bg-background bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
              <div className="absolute w-[100%] right-0 bg-background h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
            </motion.div>
          </div>
        )}

        <motion.div
          initial={{ y: 100, opacity: 0.5 }}
          viewport={{ once: true }}
          transition={{ ease: 'easeInOut', delay: 0.3, duration: 0.8 }}
          whileInView={{ y: 0, opacity: 1 }}
          className="relative z-50 container flex justify-center flex-1 flex-col px-5 md:px-10 gap-4 -translate-y-20"
        >
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="mb-4 flex items-center gap-2 bg-black/80 text-white px-3 py-1.5 rounded-full text-sm font-medium shadow-lg z-50">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              <a
                href="https://github.com/sameeramjad07"
                className="hover:underline"
              >
                Building New Ideas
              </a>
            </div>
            <h1
              className={cn(
                'text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight',
                titleClassName
              )}
            >
              {title}
            </h1>
            {subtitle && (
              <p
                className={cn(
                  'text-xl text-muted-foreground',
                  subtitleClassName
                )}
              >
                {subtitle}
              </p>
            )}
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground max-w-lg my-8"
            >
              I enjoy reading literature, building sites and apps.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className={cn(
                'flex flex-wrap justify-center gap-4',
                actionsClassName
              )}
            >
              <div>
                <Button asChild size="lg">
                  <Link href="#contact" className="mr-0 md:mr-4">
                    Get in touch <Icons.arrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button
                  variant="secondary"
                  className="mt-4 md:mt-0"
                  size="lg"
                  asChild
                >
                  <a href="/sameeramjad.pdf" download>
                    Download CV <Icons.download className="ml-2 size-4" />
                  </a>
                </Button>
              </div>
              <Button variant="secondary" size="icon" asChild>
                <a
                  href="https://linkedin.com/in/sameer-amjad/"
                  aria-label="LinkedIn"
                >
                  <Icons.linkedin className="size-6" />
                </a>
              </Button>
              <Button variant="secondary" size="icon" asChild>
                <a href="https://github.com/sameeramjad07" aria-label="GitHub">
                  <Icons.github className="size-6" />
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.125 }}
          className="bg-muted my-5 h-16 w-1 rounded-full sm:my-10"
        ></motion.div>
      </section>
    );
  }
);

Hero.displayName = 'Hero';

export { Hero };
