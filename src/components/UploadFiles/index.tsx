import React from "react"
import styles from "./UploadFiles.module.scss"
import Button from "../common/Button"
import Progress from "../common/Progress"
import { fileUpload } from "@/API/FileUpload"
import { addFolderToDatabase } from "@/API/Firestore"
import { useFetchSession } from "@/hooks/useSession"
import { useRouter } from "next/router";
import { useFolderInfo } from "@/hooks/useFolderInfo"

export default function UploadFiles() {
    const [ addFile, setAddFile ] = React.useState(false)
    const [ addFolder, setAddFolder ] = React.useState(false)
    const [ progress, setProgress ] = React.useState(0)
    const [ folderName, setFolderName ] = React.useState("")
    
    const { session } = useFetchSession()
    const userEmail = session?.user.email

    const router = useRouter();
    const parentId = router.query.id ? router.query.id : ""
    const parentFolderName = router.query.name ? router.query.name : "My Documents"

    const { breadcrumb: parentBreadcrumb } = useFolderInfo(parentId)

    const breadcrumb = [
        ...parentBreadcrumb,
        {   
            folderName: parentFolderName,
            folderId: parentId
        } 
    ]


    const handleAddFileClick = () => {
        setAddFile(prevAddFile => !prevAddFile)
        setAddFolder(false)
    }
    
    const handleFileChange = (event: React.FormEvent<HTMLInputElement>) => {
        if(event.currentTarget.files) {
            const file = event.currentTarget.files[0]
            if(file) {
                fileUpload(file, userEmail, parentId, breadcrumb, parentFolderName, setProgress)
            }
        }
    }
    
    const handleAddFolderClick = () => {
        setAddFolder(prevAddFolder => !prevAddFolder)
        setAddFile(false)
        setFolderName("")
    }

    const handleCreateFolder = () => {
        addFolderToDatabase(folderName, userEmail, parentId, breadcrumb, parentFolderName)
    }





    return (
        <div className={styles.uploadMain}>
            <Button 
                btnText="Add a file"
                btnClass={`btn-primary ${styles.addFileButton}`}
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
                btnClass={`btn-primary ${styles.addFolderButton}`}
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
                        btnClass={`btn-secondary ${styles.createFolderButton}`}
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