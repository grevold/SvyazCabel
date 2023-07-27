interface Props {
  className?: string;
  onClose: () => void;
}

export function BurgerClose({ className, onClose }: Props) {
  return (
    <svg
      className={className}
      onClick={onClose}
      width="35"
      height="36"
      viewBox="0 0 45 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="7.29688"
        y="0.726562"
        width="53"
        height="10"
        transform="rotate(45 7.29688 0.726562)"
        fill="white"
      />
      <rect
        x="7.29688"
        y="0.726562"
        width="53"
        height="10"
        transform="rotate(45 7.29688 0.726562)"
        fill="white"
      />
      <rect
        x="7.29688"
        y="0.726562"
        width="53"
        height="10"
        transform="rotate(45 7.29688 0.726562)"
        fill="white"
      />
      <rect
        width="53"
        height="10"
        transform="matrix(-0.707107 0.707107 0.707107 0.707107 37.7031 0.726562)"
        fill="white"
      />
      <rect
        width="53"
        height="10"
        transform="matrix(-0.707107 0.707107 0.707107 0.707107 37.7031 0.726562)"
        fill="white"
      />
      <rect
        width="53"
        height="10"
        transform="matrix(-0.707107 0.707107 0.707107 0.707107 37.7031 0.726562)"
        fill="white"
      />
    </svg>
  );
}
