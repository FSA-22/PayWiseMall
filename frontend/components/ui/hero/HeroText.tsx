type TitleSegment = {
  text: string;
  className?: string; // controls color/style
};
type BodySegment = {
  text: string;
  className?: string; // controls color/style
};

interface HeroTextProps {
  title: TitleSegment[]; // allows multiple colored segments
  body: BodySegment[]; // supports multiple paragraphs

  align?: 'left' | 'center';
}

export const HeroText = ({ title, body, align = 'left' }: HeroTextProps) => {
  return (
    <div
      className={`space-y-4 w-full max-w-md mx-auto ${
        align === 'center' ? 'text-center xl:text-left' : 'text-left'
      }`}
    >
      <h1 className="text-xl sm:text-3xl lg:text-4xl font-semibold leading-tight tracking-tight">
        {title.map((segment, index) => (
          <span key={index} className={segment.className}>
            {segment.text}{' '}
          </span>
        ))}
      </h1>

      <div className="space-y-3 desc-text text-xs sm:text-base font-normal">
        {body.map((paragraph, index) => (
          <p key={index} className={paragraph.className}>
            {paragraph.text}
          </p>
        ))}
      </div>
    </div>
  );
};
