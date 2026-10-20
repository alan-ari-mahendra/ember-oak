import type { SVGProps } from "react";

export default function FlameIcon({
  className,
  ...props
}: SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      className={className}
      {...props}
    >
      <path d="M8 3c0 3-3 4-3 7a7 7 0 0 0 14 0c0-3-3-4-3-7" />
      <path d="M12 3c0 3-2 4-2 7a2 2 0 0 0 4 0c0-3-2-4-2-7" />
    </svg>
  );
}
