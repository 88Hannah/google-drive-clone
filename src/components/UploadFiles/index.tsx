import React from "react"
import styles from "./UploadFiles.module.scss"
import Button from "../common/Button"
import Progress from "../common/Progress"
import { fileUpload } from "@/API/FileUpload"

export default function UploadFiles() {
    const [ addFile, setAddFile ] = React.useState(false)
    const [ progress, setProgress ] = React.useState(0)

    const handleAddFileClick = () => {
        setAddFile(prevAddFile => !prevAddFile)
    }

    const handleFileChange = (event: React.FormEvent<HTMLInputElement>) => {
        if(event.currentTarget.files) {
            const file = event.currentTarget.files[0]
            console.log(file)
            fileUpload(file, setProgress)
        }
    }

    return (
        <div className={styles.uploadMain}>
            <Button 
                btnText="Add a file"
                btnClass="btn-success"
                onClick={handleAddFileClick}
            />
            { 
                addFile
                && 
                <input 
                    type="file" 
                    className="file-input file-input-bordered file-input-secondary w-full max-w-xs" 
                    onChange={handleFileChange}
                />
            }
            <Button 
                btnText="Create a folder"
                btnClass="btn-success"
                onClick={() => console.log("Clicked")}
            />
            {
                progress == 0 || progress == 100 ? null
                : <Progress progress={progress}/>
            }
        </div>
    )
}