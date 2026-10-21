export default function Logo({ light = false }) {
  return (
    <span className={`logo ${light ? "logo-light" : ""}`}>
      <svg width="30" height="30" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="9" fill="currentColor" />
        <path d="M9 23V9l14 14V9" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Nexora
    </span>
  );
}
