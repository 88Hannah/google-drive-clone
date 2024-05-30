import styles from "./styles.module.scss"
import { useFolderInfo } from "@/hooks/useFolderInfo"
import { FaAngleRight } from "react-icons/fa6";

export default function Breadcrumb({folderId, folderName}) {

    const { breadcrumb } = useFolderInfo(folderId)
    console.log("Folder breadcrumb: ")
    console.log(breadcrumb)
  
    const currentBreadcrumb = 
      [
        ...breadcrumb, 
        {
          folderName,
          folderId
        }
      ]
  
    const breadcrumbElement = currentBreadcrumb.map((crumb, index) => {
      if (index == 0) {
        return <a key={crumb.folderId} href={`/folder?id=${crumb.folderId}&name=${crumb.folderName}`}>{crumb.folderName}</a>
      }
      else {
        return <a key={crumb.folderId} href={`/folder?id=${crumb.folderId}&name=${crumb.folderName}`}><FaAngleRight />{crumb.folderName}</a>
      }
    })
    
    return breadcrumbElement

  }