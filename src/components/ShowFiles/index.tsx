import styles from "./styles.module.scss"
import { useFiles } from "@/hooks/useFiles"
import { FaFile } from "react-icons/fa6";

export default function ShowFiles() {
    console.log("Fetching files ...")
    const files = useFiles()
    console.log(files)

    const displayFiles = files.map(file => {
        return (
            <div key={file.fileUrl} className={styles.filePreview}>
                <div className={styles.filePreviewDefault}>
                    {
                        (file.fileType == "image/jpeg" || file.fileType == "image/png") ?
                        <img src={file.fileUrl} className={styles.filePreviewImg}/> 
                        : <FaFile size="2em" />
                    }
                    <p>{file.fileName}</p>
                </div> 
            </div>
        )
    })

    console.log(displayFiles)

    return (
        <div className={styles.filesContainer}>
            {displayFiles}
        </div>
    )
}