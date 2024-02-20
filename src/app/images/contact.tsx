interface imageOptions {
  width: string;
  height: string;
}

function Contact({ width, height }: imageOptions) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_83_5)">
        <path
          d="M21 -5.08626e-05C21.2461 -5.08626e-05 21.474 0.0455221 21.6836 0.136668C21.8932 0.227814 22.0755 0.350861 22.2305 0.505808C22.3854 0.660756 22.513 0.847605 22.6133 1.06636C22.7135 1.28511 22.7591 1.51297 22.75 1.74995V26.25C22.75 26.496 22.7044 26.7239 22.6133 26.9335C22.5221 27.1432 22.3991 27.3255 22.2441 27.4804C22.0892 27.6354 21.9023 27.763 21.6836 27.8632C21.4648 27.9635 21.237 28.0091 21 27.9999H7C6.75391 27.9999 6.52604 27.9544 6.31641 27.8632C6.10677 27.7721 5.92448 27.649 5.76953 27.4941C5.61459 27.3391 5.48698 27.1523 5.38672 26.9335C5.28646 26.7148 5.24089 26.4869 5.25 26.25V1.74995C5.25 1.50386 5.29558 1.27599 5.38672 1.06636C5.47787 0.85672 5.60091 0.674428 5.75586 0.51948C5.91081 0.364532 6.09766 0.236928 6.31641 0.136668C6.53516 0.0364075 6.76302 -0.00916545 7 -5.08626e-05H21ZM21 1.74995H7V26.25H21V1.74995ZM12.25 22.75H15.75V24.5H12.25V22.75Z"
          fill="#23B1C5"
        />
      </g>
      <defs>
        <clipPath id="clip0_83_5">
          <rect width="28" height="28" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default Contact;
