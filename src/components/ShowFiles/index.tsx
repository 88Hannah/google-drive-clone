import styles from "./styles.module.scss"
import { useFiles } from "@/hooks/useFiles"
import { FaFile, FaFolder } from "react-icons/fa6";
import { useRouter } from 'next/router'

export default function ShowFiles({id}: {id: string}) {

    const files = (useFiles(id))
    
    const router = useRouter()

    const handleFolderClick = (folderId: string, folderName: string) => {
        router.push(`/folder?id=${folderId}&name=${folderName}`)
    }

    const displayFiles = files.map((
        file: {
            fileUrl: string;
            fileType: string;
            fileName: string,
            isFolder: boolean,
            id: string
        }) => {
        return (
            file.isFolder ? 
                <div key={file.fileUrl} className={`${styles.filePreview} bg-neutral`} onClick={() => handleFolderClick(file.id, file.folderName)}>
                    <div className={styles.previewContent}>
                        <FaFolder size="2em" />
                        <p className={styles.fileName}>{file.folderName}</p>
                    </div>
                </div> 
                : <a key={file.fileUrl} className={`${styles.filePreview} bg-neutral`} href={file.fileUrl} target="_blank">
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

    return (
        <div className={styles.filesContainer}>
            {displayFiles}
        </div>
    )
}