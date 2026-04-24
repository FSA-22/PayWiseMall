import Link from 'next/link';
import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

type Action = {
  label: string;
  icon?: string;
  onClick?: () => void;
  href?: string;
  variant?: ButtonVariant;
  ariaLabel?: string;
};

type BodyTextBlockProps = {
  title?: string;
  body: string | React.ReactNode;
  body2?: string | React.ReactNode;
  body3?: string | React.ReactNode;
  action?: Action;
  className?: string;
  align?: 'left' | 'center';
};

export const BodyTextBlock = ({
  title,
  body,
  body2,
  body3,
  action,
  className = '',
  align = 'left',
}: BodyTextBlockProps) => {
  const alignment =
    align === 'center'
      ? 'text-center items-center lg:text-left lg:items-start'
      : 'text-left items-start';

  const buttonBase = 'btn';

  const buttonVariants: Record<ButtonVariant, string> = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    tertiary:
      'bg-primary-2 text-primary-5 hover:bg-primary-3 border border-primary-1 w-fit md:w-sm lg:w-fit btn',
  };

  return (
    <article
      className={`max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-md text-center xl:text-left  flex items-center xl:items-start flex-col gap-4 ${alignment} ${className}`}
      aria-labelledby={title ? 'body-text-title' : undefined}
    >
      {title && (
        <h2 id="body-text-title" className="text-xl font-semibold">
          {title}
        </h2>
      )}

      <p className="desc-text ">{body}</p>
      <p className="desc-text ">{body2}</p>
      <p className="desc-text ">{body3}</p>

      {action &&
        (action.href ? (
          <Link
            href={action.href}
            className={`btn flex-center gap-4 ${buttonBase} ${buttonVariants[action.variant || 'primary']}`}
            aria-label={action.ariaLabel || action.label}
          >
            <span>{action.label}</span>
            {action.icon && (
              <Image
                src={action.icon}
                alt="Icon"
                width={12}
                height={12}
                className="h-auto w-auto"
              />
            )}
          </Link>
        ) : (
          <Button
            onClick={action.onClick}
            className={`btn flex-center gap-4 ${buttonVariants[action.variant || 'primary']}`}
            aria-label={action.ariaLabel || action.label}
          >
            <span>{action.label}</span>
            {action.icon && (
              <Image
                src={action.icon}
                alt="Icon"
                width={12}
                height={12}
                className="h-auto w-auto"
              />
            )}
          </Button>
        ))}
    </article>
  );
};
