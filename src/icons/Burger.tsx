interface Props {
  className?: string;
}

export function Burger({ className }: Props) {
  return (
    <svg
      className={className}
      width="43"
      height="29"
      viewBox="0 0 53 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="53" height="8" fill="white" />
      <rect width="53" height="8" fill="white" />
      <rect width="53" height="8" fill="white" />
      <rect y="15" width="53" height="8" fill="white" />
      <rect y="15" width="53" height="8" fill="white" />
      <rect y="15" width="53" height="8" fill="white" />
      <rect y="29" width="53" height="8" fill="white" />
      <rect y="29" width="53" height="8" fill="white" />
      <rect y="29" width="53" height="8" fill="white" />
    </svg>
  );
}
