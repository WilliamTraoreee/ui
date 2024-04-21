import { Link } from "@inertiajs/react";
import { ComponentPropsWithoutRef } from "react";
import { VariantProps, tv } from "tailwind-variants";

const button = tv({
  slots: {
    container:
      "transition-all duration-200 cursor-pointer focus:outline-1 focus:outline focus:outline-offset-1 border-transparent inline-flex items-center border-none p-[1px] bg-no-repeat bg-cover overflow-hidden",
    content:
      "transition-all duration-200 w-full h-full flex items-center rounded-[3px] px-3",
  },
  variants: {
    size: {
      xl: {
        container: "h-16 rounded-md font-bold text-lg",
        content: "rounded-md px-6",
      },
      lg: {
        container: "h-13 rounded-md font-bold text-base",
        content: "rounded-md px-5",
      },
      base: {
        container: "h-10 rounded font-bold text-sm",
        content: "rounded px-3",
      },
      md: {
        container: "h-8 rounded font-bold text-sm",
        content: "rounded px-3",
      },
      sm: {
        container: "h-6 rounded-sm font-bold text-xs",
        content: "rounded-sm px-2",
      },
    },
    variant: {
      primary: {
        container:
          "bg-primary-500 hover:bg-primary-600 focus:outline-primary-300",
        content:
          "bg-primary-500 hover:bg-primary-600 text-white outline-primary-200",
      },
      secondary: {
        container:
          "bg-secondary-500 hover:bg-secondary-600 focus:outline-secondary-300",
        content:
          "bg-secondary-500 hover:bg-secondary-600 text-white outline-secondary-200",
      },
      success: {
        container:
          "bg-success-500 hover:bg-success-600 focus:outline-success-300",
        content:
          "bg-success-500 hover:bg-success-600 text-dark-700 outline-success-200",
      },
      error: {
        container: "bg-error-500 hover:bg-error-600 focus:outline-error-300",
        content: "bg-error-500 hover:bg-error-600 text-white outline-error-200",
      },
      warning: {
        container:
          "bg-warning-500 hover:bg-warning-600 focus:outline-warning-300",
        content:
          "bg-warning-500 hover:bg-warning-600 text-dark-700 outline-warning-200",
      },
      stroke: {
        container: "bg-dark-500 hover:bg-dark-600 focus:outline-dark-300",
        content:
          "bg-dark-500 hover:bg-dark-600 text-white outline-dark-200 !border !border-dark-400",
      },
      transparent: {
        container: "bg-transparent hover:bg-dark-600 focus:outline-dark-300",
        content:
          "bg-transparent hover:bg-dark-600 text-light-200 outline-dark-200 light:text-dark-400 light:hover:bg-light-100 light:focus:outline-light-300",
      },
      dark: {
        container: "bg-dark-500 hover:bg-dark-600 focus:outline-dark-300",
        content: "bg-dark-600 hover:bg-dark-700 text-white outline-dark-200",
      },
      light: {
        container: "bg-light-400 hover:bg-light-500 focus:outline-light-300",
        content:
          "bg-light-200 hover:bg-light-400 text-dark-700 outline-light-200",
      },
    },
    gradient: {
      true: {
        container: "!bg-gradient-to-b",
      },
    },
    rounded: {
      true: {
        content: "rounded-full",
        container: "rounded-full",
      },
    },
  },
  compoundVariants: [
    {
      gradient: true,
      variant: "primary",
      class: {
        container: "from-primary-400 to-primary-500",
      },
    },
    {
      gradient: true,
      variant: "secondary",
      class: {
        container: "from-secondary-400 to-secondary-500",
      },
    },
    {
      gradient: true,
      variant: "success",
      class: {
        container: "from-success-100 to-success-500",
      },
    },
    {
      gradient: true,
      variant: "error",
      class: {
        container: "from-error-300 to-error-500",
      },
    },
    {
      gradient: true,
      variant: "warning",
      class: {
        container: "from-warning-200 to-warning-500",
      },
    },
    {
      gradient: true,
      variant: "stroke",
      class: {
        container: "from-dark-300 to-dark-500",
      },
    },
    {
      gradient: true,
      variant: "dark",
      class: {
        container: "from-dark-400 to-dark-500",
      },
    },
    {
      gradient: true,
      variant: "light",
      class: {
        container: "from-white to-light-400",
      },
    },
  ],
});

type Variant = VariantProps<typeof button>["variant"];

type Size = VariantProps<typeof button>["size"];

interface Props extends ComponentPropsWithoutRef<"button"> {
  children: React.ReactNode;
  size?: Size;
  variant?: Variant;
  link?: string;
  linkOptions?: { external?: boolean; sameWindow?: boolean };
  gradient?: boolean;
  rounded?: boolean;
  contentClassName?: string;
}

export function Button(props: Props) {
  const {
    children,
    size = "base",
    variant = "primary",
    link,
    linkOptions,
    gradient = false,
    rounded = false,
    contentClassName = "",
    ...rest
  } = props;

  const { container, content } = button({ size, variant, gradient, rounded });

  const buttonClasses = `${container()} ${rest.className}`;

  if (link && !linkOptions?.external) {
    return (
      <Link href={link} className={buttonClasses}>
        <span className={`${content()} ${contentClassName}`}>{children}</span>
      </Link>
    );
  }

  if (link && linkOptions?.external) {
    return (
      <a
        href={link}
        target={linkOptions.sameWindow ? "_self" : "_blank"}
        rel="noopener noreferrer"
        className={buttonClasses}
      >
        <span className={`${content()} ${contentClassName}`}>{children}</span>
      </a>
    );
  }

  return (
    <button {...rest} className={buttonClasses}>
      <span className={`${content()} ${contentClassName}`}>{children}</span>
    </button>
  );
}
