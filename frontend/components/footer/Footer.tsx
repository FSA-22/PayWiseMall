import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary-5 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo */}
          <Link href={'/'} className="max-w-fit">
            <Image
              src={'/icons/logo-2.svg'}
              alt="App Logo"
              height={100}
              width={100}
              className="h-auto w-auto max-sm:w-16 max-sm:h-16"
              loading="eager"
            />
          </Link>
          {/* Quick Links */}
          <nav className="lg:col-span-2">
            <h3 className="text-lg font-semibold sub-title-text space-y-2">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-sm">
              {/* Column 1 */}
              <ul className="space-y-2 desc-text text-xs">
                <li>
                  <Link href="/" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:underline">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:underline">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:underline">
                    Savings Plan
                  </Link>
                </li>
              </ul>

              {/* Column 2 */}
              <ul className="space-y-2 desc-text text-xs">
                <li>
                  <Link href="/vendor" className="hover:underline">
                    Become a Vendor
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" className="hover:underline">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="hover:underline">
                    Return Policy
                  </Link>
                </li>
              </ul>

              {/* Column 3 */}
              <ul className="space-y-2 desc-text text-xs">
                <li>
                  <Link href="/contact" className="hover:underline">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/track-order" className="hover:underline">
                    Track Order
                  </Link>
                </li>
                <li>
                  <Link href="/promotions" className="hover:underline">
                    Promotion
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          {/* Social + App */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold sub-title-text">
              Connect With Us
            </h3>

            {/* Social Icons */}
            <div className="flex space-x-3 mb-6">
              <Link href="#" aria-label="Facebook">
                <Image
                  src={'/icons/facebook.svg'}
                  height={18}
                  width={18}
                  alt="Facebook Icon"
                />
              </Link>
              <Link href="#" aria-label="Instagram">
                <Image
                  src={'/icons/instagram-fill.svg'}
                  height={18}
                  width={18}
                  alt="Facebook Icon"
                />
              </Link>
              <Link href="#" aria-label="Twitter/X">
                <Image
                  src={'/icons/x-line.svg'}
                  height={18}
                  width={18}
                  alt="Facebook Icon"
                />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Image
                  src={'/icons/linkedin.svg'}
                  height={18}
                  width={18}
                  alt="Facebook Icon"
                  className="h-auto w-auto"
                />
              </Link>
            </div>

            {/* App Download */}
            <div className="space-y-2">
              <p className=" font-medium">Get the App</p>
              <div className="flex space-x-3">
                <Link href="#">
                  <Image
                    src="/icons/apple-store.svg"
                    alt="Download on App Store"
                    width={20}
                    height={20}
                    className="h-auto w-auto"
                  />
                </Link>
                <Link href="#">
                  <Image
                    src="/icons/play-store.svg"
                    alt="Get it on Google Play"
                    width={20}
                    height={20}
                    className="h-auto w-auto"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-1 pt-4 mt-4 text-center desc-text text-sm text-gray-300">
          &copy; {year} PayWise Mall. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
