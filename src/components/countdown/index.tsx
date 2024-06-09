import { CountdownCircleTimer } from "react-countdown-circle-timer";

type CountdownProps = {
  size?: number;
  duration?: number;
};

export function Countdown({ size = 90, duration = 120 }: CountdownProps) {
  return (
    <CountdownCircleTimer
      isPlaying
      duration={duration}
      colors="#FF6274"
      size={size}
    >
      {({ remainingTime }) => remainingTime}
    </CountdownCircleTimer>
  );
}
