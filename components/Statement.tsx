import styles from "../styles/Statement.module.css"
interface StatementProps {
  text: string;
}

const Statement = (props: StatementProps) => {
  return (
    <div className={styles.statement}>
      <span className={styles.text}>
        {props.text}
      </span>
    </div>
  )
}

export default Statement