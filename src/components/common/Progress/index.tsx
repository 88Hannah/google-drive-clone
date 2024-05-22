import styles from "./styles.module.scss"

export default function Progress({progress}: { progress: number }) {
    return (
        <div className="progressBar">
            <progress className="progress progress-accent w-80" value={progress} max="100"></progress>
        </div>
    )
}