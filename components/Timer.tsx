import { CountdownCircleTimer } from "react-countdown-circle-timer"
import styles from "../styles/Timer.module.css"
interface TimerProps {
  key: any
  duration: number
  timeRunsOut: () => void
}

const Timer = (props: TimerProps) => {
  return (
    <div className={styles.timer}>
      <CountdownCircleTimer size={100} duration={props.duration} onComplete={props.timeRunsOut} colors={['#BCE596', '#F7B801', '#ED827A']}
        colorsTime={[10, 3, 0]} isPlaying>
        {({ remainingTime }) => remainingTime}
      </CountdownCircleTimer>
    </div>
  )
}

export default Timer