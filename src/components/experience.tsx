'use client';

import 'react-vertical-timeline-component/style.min.css';

import React from 'react';
import { useInView } from 'react-intersection-observer';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';

import { Icons } from '@/components/icons';
import { SectionHeading } from '@/components/section-heading';
import { useSectionInView } from '@/hooks/use-section-in-view';
import { experiencesData } from '@/lib/data';

export const Experience = () => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const { ref: sectionRef } = useSectionInView('Experience');

  return (
    <section ref={sectionRef} id="experience" className="my-10 scroll-mt-28">
      <SectionHeading
        heading="My Experience"
        content="Timeline of the places I have worked or still working in - A mix of internships, research labs, and full-time jobs."
      />
      <VerticalTimeline lineColor="hsl(var(--muted))">
        {experiencesData.map(({ title, description, location, date, icon }) => (
          <VerticalTimelineElement
            key={title}
            visible={inView}
            contentStyle={{
              background: 'hsl(var(--secondary))',
              boxShadow: 'none',
              padding: '20px',
            }}
            contentArrowStyle={{ display: 'none' }}
            date={date}
            dateClassName="!font-medium text-muted-foreground"
            icon={icon || <Icons.briefcase className="size-full" />}
            iconStyle={{
              boxShadow: 'none',
              border: '2px solid hsl(var(--foreground))',
              background: '#ffffff',
              color: 'hsl(var(--foreground))',
              width: '60px',
              height: '60px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              borderRadius: '50%',
            }}
          >
            <h3 ref={ref} className="font-medium">
              {title}
            </h3>
            <p className="!mt-0 !font-normal">{location}</p>
            <p className="text-muted-foreground !mt-1 !font-normal">
              {description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};
