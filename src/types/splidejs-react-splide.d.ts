declare module "@splidejs/react-splide" {
  import { ComponentType, ReactNode } from "react";

  interface SplideProps {
    options?: any;
    hasTrack?: boolean;
    children?: ReactNode;
  }

  export const Splide: ComponentType<SplideProps>;
  export const SplideSlide: ComponentType<{ children?: ReactNode }>;
}
