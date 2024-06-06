"use client";

import { useRouter } from "next/navigation";

export default function Save() {
  const router = useRouter();
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={() => router.push('/saved')}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9702 1.75C10.3689 1.75 9.03824 1.80708 7.9588 2.02799C6.86579 2.25168 5.96498 2.65608 5.2882 3.39749C4.6194 4.13015 4.24729 5.10742 4.03399 6.31915C3.82109 7.52872 3.75425 9.04736 3.75425 10.929C3.75425 11.6552 3.75302 12.337 3.75186 12.9766L3.75186 12.9766C3.74639 16.0013 3.74264 18.0807 3.87901 19.4369C3.96038 20.2461 4.10069 20.9329 4.40921 21.4262C4.57513 21.6915 4.79548 21.9113 5.0816 22.0577C5.36259 22.2015 5.65927 22.25 5.94325 22.25C6.59202 22.25 7.22111 21.8931 7.72889 21.5403C8.2246 21.1959 8.74641 20.7499 9.23987 20.3282L9.35667 20.2284C9.90158 19.7633 10.4134 19.3339 10.8937 19.0186C11.3919 18.6915 11.7421 18.566 11.9702 18.566C12.1984 18.566 12.5486 18.6915 13.0468 19.0186C13.5271 19.3339 14.0389 19.7633 14.5838 20.2284L14.7006 20.3282C15.1941 20.7499 15.7159 21.1959 16.2116 21.5403C16.7194 21.8931 17.3485 22.25 17.9972 22.25C18.2812 22.25 18.5779 22.2015 18.8589 22.0577C19.145 21.9113 19.3654 21.6915 19.5313 21.4262C19.8398 20.9329 19.9801 20.2461 20.0615 19.4369C20.1979 18.0807 20.1941 16.0013 20.1886 12.9766C20.1875 12.337 20.1862 11.6552 20.1862 10.929C20.1862 9.04736 20.1194 7.52872 19.9065 6.31915C19.6932 5.10742 19.3211 4.13015 18.6523 3.39749C17.9755 2.65608 17.0747 2.25168 15.9817 2.02799C14.9023 1.80708 13.5716 1.75 11.9702 1.75ZM5.25425 10.929C5.25425 9.06214 5.32229 7.65291 5.51128 6.57919C5.6999 5.50764 5.99672 4.84622 6.39605 4.40876C6.7874 3.98004 7.35389 3.68288 8.25954 3.49754C9.17876 3.30942 10.3781 3.25 11.9702 3.25C13.5624 3.25 14.7617 3.30942 15.681 3.49754C16.5866 3.68288 17.1531 3.98004 17.5445 4.40876C17.9438 4.84622 18.2406 5.50764 18.4292 6.57919C18.6182 7.65291 18.6862 9.06214 18.6862 10.929C18.6862 11.6729 18.6874 12.3657 18.6885 13.0109C18.6937 16.0367 18.697 18.014 18.569 19.2868C18.4901 20.0713 18.3704 20.4535 18.2595 20.6309C18.2157 20.7009 18.1865 20.7168 18.1757 20.7223C18.1598 20.7305 18.1123 20.75 17.9972 20.75C17.8485 20.75 17.5539 20.6464 17.0675 20.3085C16.6364 20.0089 16.17 19.6105 15.6579 19.1731L15.5577 19.0876C15.0236 18.6317 14.4419 18.1401 13.8701 17.7647C13.3161 17.401 12.6556 17.066 11.9702 17.066C11.2849 17.066 10.6244 17.401 10.0704 17.7647C9.49861 18.1401 8.91692 18.6317 8.38283 19.0876L8.28259 19.1732L8.28255 19.1732C7.7705 19.6105 7.30411 20.0089 6.87298 20.3085C6.38664 20.6464 6.09197 20.75 5.94325 20.75C5.82823 20.75 5.78068 20.7305 5.76478 20.7223C5.754 20.7168 5.72477 20.7009 5.68097 20.6309C5.57005 20.4535 5.45037 20.0713 5.37149 19.2868C5.24349 18.014 5.24685 16.0367 5.25198 13.011C5.25307 12.3658 5.25425 11.6729 5.25425 10.929ZM8.54248 8.4677C8.12827 8.4677 7.79248 8.80348 7.79248 9.2177C7.79248 9.63191 8.12827 9.9677 8.54248 9.9677H15.3975C15.8117 9.9677 16.1475 9.63191 16.1475 9.2177C16.1475 8.80348 15.8117 8.4677 15.3975 8.4677H8.54248Z"
        fill="#797979"
      />
    </svg>
  );
}
