export const ThreeDotsIcon = ({ iconClassName = "#000" }) => {
  return (
    <svg
      width="6"
      height="20"
      viewBox="0 0 6 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="cursor-pointer"
    >
      <path
        d="M3 12.25C4.24264 12.25 5.25 11.2426 5.25 10C5.25 8.75736 4.24264 7.75 3 7.75C1.75736 7.75 0.75 8.75736 0.75 10C0.75 11.2426 1.75736 12.25 3 12.25Z"
        fill={iconClassName}
      />
      <path
        d="M3 19.75C4.24264 19.75 5.25 18.7426 5.25 17.5C5.25 16.2574 4.24264 15.25 3 15.25C1.75736 15.25 0.75 16.2574 0.75 17.5C0.75 18.7426 1.75736 19.75 3 19.75Z"
        fill={iconClassName}
      />
      <path
        d="M3 4.75C4.24264 4.75 5.25 3.74264 5.25 2.5C5.25 1.25736 4.24264 0.25 3 0.25C1.75736 0.25 0.75 1.25736 0.75 2.5C0.75 3.74264 1.75736 4.75 3 4.75Z"
        fill={iconClassName}
      />
    </svg>
  );
};
