import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className, id, ...props }: SectionProps) {
  return (
    <section id={id} className={cn('py-10 sm:py-12 md:py-16 lg:py-24', className)} {...props}>
      {children}
    </section>
  );
}
