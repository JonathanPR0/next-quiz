import styles from "../styles/Statistics.module.css"
interface StatisticsProps {
  value: any
  text: string
  backgroundColor?: string
  fontColor?: string
}

const Statistics = (props: StatisticsProps) => {
  return (
    <div className={styles.statistics}>
      <div className={styles.value} style={{ backgroundColor: props.backgroundColor ?? "#fdd60f", color: props.fontColor ?? "#333333" }}>
        {props.value}
      </div>
      <span className={styles.text}>
        {props.text}
      </span>
    </div>
  )
}

export default Statistics