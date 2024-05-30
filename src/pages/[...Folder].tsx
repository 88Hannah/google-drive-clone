import { useRouter } from 'next/router'
import ShowFiles from "@/components/ShowFiles";
import { useFolderInfo } from "@/hooks/useFolderInfo"
 
export default function Folder() {
  const router = useRouter()
  
  const folderId = router.query.id ? router.query.id : ""
  const folderName = router.query.name ? router.query.name : "My Documents"
  const { breadcrumb } = useFolderInfo(folderId)
  console.log("Folder breadcrumb: ")
  console.log(breadcrumb)
  return (
    <>
      <p>{folderName}</p>
      <ShowFiles id={folderId}/>
    </>
  )
}