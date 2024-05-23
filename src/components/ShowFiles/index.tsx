import styles from "./styles.module.scss"
import { useFiles } from "@/hooks/useFiles"
import { FaFile } from "react-icons/fa6";

export default function ShowFiles() {
    console.log("Fetching files ...")
    const files = useFiles()
    console.log(files)

    const displayFiles = files.map((
        file: {
            fileUrl: string;
            fileType: string;
            fileName: string
        }) => {
        return (

            <a key={file.fileUrl} className={`${styles.filePreview} bg-neutral`} href={file.fileUrl} target="_blank">
                <div className={styles.previewContent}>
                    {
                        (file.fileType == "image/jpeg" || file.fileType == "image/png") ?
                        <div className={styles.imgContainer}>
                            <img src={file.fileUrl} className={styles.filePreviewImg} alt={file.fileName}/>
                        </div> 
                        : <FaFile size="2em" />
                    }
                    <p className={styles.fileName}>{file.fileName}</p>
                </div>
            </a> 
           
        )
    })

    console.log(displayFiles)

    return (
        <div className={styles.filesContainer}>
            {displayFiles}
        </div>
    )
}