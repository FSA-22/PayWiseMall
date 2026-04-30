import Image from 'next/image';
import Link from 'next/link';

const DownloadApp = () => {
  return (
    <section
      aria-labelledby="app-download-heading"
      className="w-full bg-gray-50 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div
          className="
            grid 
            gap-12 
            items-center
            xl:grid-cols-2
          "
        >
          {/*  Mockup */}
          <div className="hidden order-2 xl:order-1 lg:flex justify-center">
            <div className="relative w-65 sm:w-100 xl:w-">
              <Image
                src="/images/mock-up.svg"
                alt="Preview of the Paywise Mall mobile app interface"
                width={400}
                height={800}
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          {/* Content */}
          <div className="order-1 xl:order-2 space-y-4 text-center xl:text-left">
            <h2 id="app-download-heading" className="sub-title-text">
              Download Our Mobile App
            </h2>

            <p className="desc-text max-w-md mx-auto xl:mx-0">
              Manage your orders, track payments, and run your business
              anywhere. Available on iOS and Android.
            </p>

            <div className="order-2 lg:hidden justify-center">
              <div className="relative w-full max-w-xs mx-auto">
                <Image
                  src="/images/mock-up.svg"
                  alt="Preview of the Paywise Mall mobile app interface"
                  width={400}
                  height={800}
                  priority
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>

            {/*  CTA Buttons */}
            <div
              className="
                mt-8 
                flex 
                gap-4 
                justify-center 
                xl:justify-start
                flex-wrap
              "
            >
              {/* Apple */}
              <Link
                href="#"
                aria-label="Download on the Apple App Store"
                className="
                  inline-flex items-center gap-3
                  bg-black text-white
                  px-4 py-2 rounded-xl
                  hover:bg-gray-800
                  transition
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black
                "
              >
                {/* Apple Icon */}
                <Image
                  src={'/icons/apple.svg'}
                  alt="Apple Icon"
                  width={26}
                  height={26}
                  className="w-auto h-auto"
                />
                <span className="text-left">
                  <span className="block text-xs">Download on the</span>
                  <span className="block text-sm font-semibold">App Store</span>
                </span>
              </Link>

              {/* Google Play */}
              <Link
                href="#"
                aria-label="Get it on Google Play"
                className="
                  inline-flex items-center gap-3
                  bg-black text-white
                  px-5 py-3 rounded-xl
                  hover:bg-gray-800
                  transition
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black
                "
              >
                {/* Play Icon */}
                <Image
                  src={'/icons/playstore.svg'}
                  alt="Apple Icon"
                  width={26}
                  height={26}
                  className="w-auto h-auto"
                />
                <span className="text-left">
                  <span className="block text-xs">Get it on</span>
                  <span className="block text-sm font-semibold">
                    Google Play
                  </span>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DownloadApp;
