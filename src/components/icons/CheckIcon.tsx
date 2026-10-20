import type { SVGProps } from "react";

export default function CheckIcon({
  className,
  ...props
}: SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      className={className}
      {...props}
    >
      <path d="M5 12l5 5 9-10" />
    </svg>
  );
}
