'use client';

import { Button } from '../ui/button';

export const HomeVideoSection = () => {
  return (
    <section
      className="w-full bg-white mt-6 sm:mt-12"
      aria-labelledby="home-video-heading"
    >
      <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-6">
        {/* Use article for standalone meaningful block */}
        <article className="flex flex-col items-center text-center gap-8">
          {/* Title */}
          <header>
            <h2 id="home-video-heading" className="sub-title-text">
              Become a Vendor
            </h2>
          </header>

          {/* Video with semantics */}
          <figure className="w-full max-w-4xl">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-md">
              <video
                className="w-full h-full object-cover"
                controls
                preload="metadata"
                autoPlay
                loop
                muted
                poster="https://cdn.pixabay.com/photo/2016/11/29/09/32/business-1868728_960_720.jpg"
                aria-describedby="video-description"
              >
                <source
                  src="https://res.cloudinary.com/dziavigic/video/upload/v1769079777/samples/cld-sample-video.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Caption for accessibility */}
            <figcaption
              id="video-description"
              className="mx-auto desc-text max-w-lg text-center mt-4 space-y-4 text-sm"
            >
              <p className="">
                Are you a passionate entrepreneur or a creative mind looking to
                showcase your products to a broader audience? Look no further!
              </p>
              <p>
                Paywise Mall is not just a shopping destination; it's a thriving
                marketplace where vendors flourish and dreams come to life.
              </p>
            </figcaption>
          </figure>

          {/* CTA */}
          <Button
            className="btn-primary w-fit md:w-sm lg:w-fit desc-text"
            aria-label="Start Selling Today"
          >
            Start Selling Today
          </Button>
        </article>
      </div>
    </section>
  );
};
