// components/ui/hero/hero-image.tsx

import Image from 'next/image';

interface HeroImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  overlay?: boolean;
  rounded?: boolean;
}

export const HeroImage = ({
  src,
  alt,
  priority = true,
  rounded = true,
}: HeroImageProps) => {
  return (
    <div
      className={`
        relative w-full mx-auto flex justify-center items-center
        max-w-65 
        sm:max-w-md 
        md:max-w-lg 
        lg:max-w-xl 
        xl:max-w-2xl
        ${rounded ? 'rounded-2xl' : ''}
      `}
    >
      <Image
        src={src}
        alt={alt}
        width={600}
        height={600}
        priority={priority}
        className="
          w-full h-auto 
          object-contain 
          select-none
        "
      />
    </div>
  );
};
