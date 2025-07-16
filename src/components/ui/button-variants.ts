import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium font-rounded ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mentra-blue focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-mentra-blue text-off-white hover:bg-mentra-blue/90",
        destructive:
          "bg-curiosity-coral text-off-white hover:bg-curiosity-coral/80",
        outline:
          "border border-mentra-blue bg-off-white text-mentra-blue hover:bg-mentra-blue/10 hover:text-mentra-blue",
        secondary:
          "bg-growth-green text-off-white hover:bg-growth-green/90",
        ghost: "hover:bg-journal-sand hover:text-mentra-blue",
        link: "text-mentra-blue underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 rounded-full px-4 py-2 text-sm",
        lg: "h-12 rounded-full px-8 py-3 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export type { VariantProps };
export { buttonVariants }; 