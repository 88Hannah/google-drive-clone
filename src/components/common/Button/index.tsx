import { type Button } from "@/Interface"
import styles from "./Button.module.scss"
 
export default function Button({btnClass, btnText, onClick} : Button) {
    return (
        <button onClick={onClick} className={`btn ${btnClass} ${styles.commonBtn}`} >{btnText}</button>
    )
}