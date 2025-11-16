import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/cn";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

const styles: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-black text-white hover:bg-white hover:text-black border border-black transition-colors duration-200",
  ghost:
    "border border-black text-black hover:bg-black hover:text-white transition-colors duration-200",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide disabled:pointer-events-none disabled:opacity-40",
          styles[variant],
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";
