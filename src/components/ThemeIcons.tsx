type IconProps = {
  className?: string;
};

/** Surya — Hindu solar deity; switch to light mode */
export function SuryaIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="4" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <line x1="12" y1="2" x2="12" y2="5" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <line x1="2" y1="12" x2="5" y2="12" />
        <line x1="19" y1="12" x2="22" y2="12" />
        <line x1="4.93" y1="4.93" x2="7.05" y2="7.05" />
        <line x1="16.95" y1="16.95" x2="19.07" y2="19.07" />
        <line x1="4.93" y1="19.07" x2="7.05" y2="16.95" />
        <line x1="16.95" y1="7.05" x2="19.07" y2="4.93" />
      </g>
      <circle
        cx="12"
        cy="12"
        r="7.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeDasharray="2 3"
        opacity="0.45"
      />
    </svg>
  );
}

/** Chandra — Hindu lunar deity; switch to dark mode */
export function ChandraIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M18 14.5A7.5 7.5 0 0 1 9.5 6 6.5 6.5 0 1 0 18 14.5Z"
        fill="currentColor"
      />
      <circle cx="17" cy="6" r="0.9" fill="currentColor" opacity="0.55" />
      <circle cx="19.5" cy="9" r="0.5" fill="currentColor" opacity="0.35" />
      <circle cx="15.5" cy="4.5" r="0.45" fill="currentColor" opacity="0.35" />
    </svg>
  );
}
