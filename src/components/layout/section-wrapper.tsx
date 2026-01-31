import { cn } from '@/lib/utils';

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionWrapper({ children, className }: SectionWrapperProps) {
  return (
    <section className={cn('mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8', className)}>
      {children}
    </section>
  );
}
