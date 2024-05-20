import styles from "./UploadFiles.module.scss"
import Button from "../common/Button"

export default function UploadFiles() {
    return (
        <div className={styles.uploadMain}>
            <Button 
                btnText="Add a file"
                btnClass="btn-success"
                onClick={() => console.log("Clicked")}
            />
            <Button 
                btnText="Create a folder"
                btnClass="btn-success"
                onClick={() => console.log("Clicked")}
            />
        </div>
    )
}