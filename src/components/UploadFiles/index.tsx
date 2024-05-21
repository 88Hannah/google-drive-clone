import React from "react"
import styles from "./UploadFiles.module.scss"
import Button from "../common/Button"

export default function UploadFiles() {
    const [ addFile, setAddFile ] = React.useState(false)

    const handleAddFileClick = () => {
        setAddFile(prevAddFile => !prevAddFile)
    }

    const handleFileChange = (event: React.FormEvent<HTMLInputElement>) => {
        console.log(event.currentTarget.files?.[0])
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
        </div>
    )
}