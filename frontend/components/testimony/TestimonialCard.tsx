'use client';

import Image from 'next/image';

type Props = {
  testimonial: {
    name: string;
    role: string;
    avatar: string;
    message: string;
  };
};

export function TestimonialCard({ testimonial }: Props) {
  return (
    <figure
      className="relative w-full max-w-80 sm:max-w-sm"
      aria-label={`Testimonial from ${testimonial.name}`}
    >
      {/* Frame container */}
      <div className="relative w-full">
        {/* Decorative frame image */}
        <Image
          src="/images/testimonials/testimonial-frame.svg"
          alt="Testimonial Frame"
          fill
          sizes="(max-width: 640px) 100vw, 384px"
          className="object-contain pointer-events-none select-none"
          aria-hidden="true"
        />

        {/* Content */}
        <div className="absolute w-16 h-16 -top-2 xl:top-0 left-4  sm:left-8 ">
          <Image
            src={'/images/testimonials/upper-quote.svg'}
            fill
            alt="Upper Quote"
          />
        </div>
        <div className="relative px-6 py-8 flex flex-col gap-4">
          {/* Avatar */}

          <div className="absolute -top-2 xl:top-0 left-30 sm:left-35 translate-x-1/2">
            <Image
              src={testimonial.avatar}
              alt={`${testimonial.name} profile picture`}
              width={44}
              height={44}
              className="rounded-full object-cover shadow-md"
            />
          </div>

          {/* Quote */}
          <blockquote className="max-w-sm truncate mt-4 lg:mt-6 text-[10px] sm:text-xs leading-relaxed text-gray-700">
            <p>{testimonial.message}</p>
          </blockquote>

          {/* Author */}
          <figcaption className="w-full text-center mt-1">
            <p className="text-sm font-semibold text-gray-900">
              {testimonial.name}
            </p>
            <p className="hidden sm:block text-[10px] text-gray-500">
              {testimonial.role}
            </p>
          </figcaption>
        </div>

        <div className="absolute w-16 h-16 -bottom-2 xl:bottom-0 right-4 sm:right-8 ">
          <Image
            src={'/images/testimonials/down-quote.svg'}
            fill
            alt="Down Quote"
          />
        </div>
      </div>
    </figure>
  );
}
