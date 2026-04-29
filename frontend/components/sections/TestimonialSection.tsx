// components/testimonials/TestimonialSection.tsx
import { testimonials } from '@/data/testimonials';
import { chunkArray } from '@/lib/utils/chunk';
import { TestimonialCard } from '../testimony/TestimonialCard';

export function TestimonialSection() {
  const rows = chunkArray(testimonials, 3);

  return (
    <section aria-labelledby="testimonials-heading" className="w-full mx-auto">
      <div className="container w-full mx-auto px-4">
        {/* Heading */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 id="testimonials-heading" className="sub-title-text">
            What do People say
          </h2>
          <p className="mt-3 text-gray-600 text-sm md:text-base">
            Trusted by vendors and businesses growing with Paywise Mall
          </p>
        </div>

        {/* MOBILE: stacked */}
        <div className="flex flex-col items-center justify-center gap-6 xl:hidden">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        {/* XL: controlled rows */}
        <div className="hidden xl:flex xl:flex-col gap-8">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`
                grid gap-6
                ${
                  row.length === 1
                    ? 'grid-cols-1 justify-items-center'
                    : row.length === 2
                      ? 'grid-cols-2 justify-items-center max-w-3xl mx-auto'
                      : 'grid-cols-3'
                }
              `}
            >
              {row.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
