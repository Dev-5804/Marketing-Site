import { ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = {
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  children: ReactNode;
};

const base = "mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10";

export function Container({ as: Tag = "div", className, children }: ContainerProps) {
  return <Tag className={cn(base, className)}>{children}</Tag>;
}
