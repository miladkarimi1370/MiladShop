import { keyframes } from "@mui/system";

const fadeSlideAnim = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-35px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const fadeSlide = {
  animation: `${fadeSlideAnim} 1s ease forwards`,
};
