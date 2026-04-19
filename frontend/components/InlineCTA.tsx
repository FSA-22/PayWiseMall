import Image from 'next/image';

type Props = {
  text: string;
  imageUrl: string;
};

type LocationSelectorProps = {
  text: string;
  imageUrl: string;
  imageUrl2: string;
};

export const InlineCTA2 = ({ text, imageUrl }: Props) => {
  return (
    <div className="flex-center gap-1 hover:cursor-pointer">
      <Image src={imageUrl} alt="icon" height={18} width={18} />
      <p className="desc-text text-xs font-medium text-black"> {text} </p>
    </div>
  );
};

export const InlineCTA = ({ text, imageUrl }: Props) => {
  return (
    <div className="flex-center gap-1 hover:cursor-pointer">
      <p className="desc-text text-xs font-medium text-black"> {text} </p>
      <Image src={imageUrl} alt="icon" height={12} width={12} />
    </div>
  );
};

export const LocationSelector = ({
  text,
  imageUrl,
  imageUrl2,
}: LocationSelectorProps) => {
  return (
    <div className="flex-center gap-1 hover:cursor-pointer">
      <Image src={imageUrl} alt="Location Icon" height={14} width={14} />
      <p className="desc-text text-xs font-medium text-black"> {text} </p>
      <Image src={imageUrl2} alt="arrow" height={18} width={18} />
    </div>
  );
};
