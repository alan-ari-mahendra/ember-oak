import type { SVGProps } from "react";

export default function PlusIcon({
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
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
