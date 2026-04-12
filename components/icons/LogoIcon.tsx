import { SVGProps } from "@/types/svg";

export function Logo({ size = 22, color = "var(--foreground)" }: SVGProps) {
  return (
    <svg
      aria-label="Vercel logomark"
      height={size}
      role="img"
      viewBox="0 0 74 64"
    >
      <path
        d="M37.5896 0.25L74.5396 64.25H0.639648L37.5896 0.25Z"
        fill={color}
      ></path>
    </svg>
  );
}
