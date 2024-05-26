import React from "react"
import styles from "./UploadFiles.module.scss"
import Button from "../common/Button"
import Progress from "../common/Progress"
import { fileUpload } from "@/API/FileUpload"
import { addFolderToDatabase } from "@/API/Firestore"
import { useFetchSession } from "@/hooks/useSession"
import { useRouter } from "next/router";

export default function UploadFiles() {
    const [ addFile, setAddFile ] = React.useState(false)
    const [ addFolder, setAddFolder ] = React.useState(false)
    const [ progress, setProgress ] = React.useState(0)
    const [ folderName, setFolderName ] = React.useState("")
    
    const { session } = useFetchSession()
    const userEmail = session?.user.email

    const router = useRouter();
    const parentId = router.query.id ?? ""

    const handleAddFileClick = () => {
        setAddFile(prevAddFile => !prevAddFile)
    }
    
    const handleFileChange = (event: React.FormEvent<HTMLInputElement>) => {
        if(event.currentTarget.files) {
            const file = event.currentTarget.files[0]
            if(file) {
                fileUpload(file, userEmail, parentId, setProgress)
            }
        }
    }
    
    const handleAddFolderClick = () => {
        setAddFolder(prevAddFolder => !prevAddFolder)
    }

    const handleCreateFolder = () => {
        addFolderToDatabase(folderName, userEmail, parentId)
    }





    return (
        <div className={styles.uploadMain}>
            <Button 
                btnText="Add a file"
                btnClass="btn-primary"
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
                btnText="Add a folder"
                btnClass="btn-primary"
                onClick={handleAddFolderClick}
            />
            {
                addFolder
                &&
                <>
                    <input 
                        type="text" 
                        placeholder="Folder name"
                        value={folderName}
                        onChange={event => setFolderName(event.target.value)}
                        className="input input-bordered input-secondary w-full max-w-xs" />
                    <Button 
                        btnText="Create"
                        btnClass="btn-secondary"
                        onClick={handleCreateFolder}
                    />
                </>
            }
            {
                progress == 0 || progress == 100 ? null
                : <Progress progress={progress}/>
            }
        </div>
    )
}