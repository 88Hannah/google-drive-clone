import { useRouter } from 'next/router'
import Breadcrumb from '@/components/Breadcrumb';
import ShowFiles from "@/components/ShowFiles";
 
export default function Folder() {
  const router = useRouter()
  
  const folderId = router.query.id ? router.query.id : ""
  const folderName = router.query.name ? router.query.name : "My Documents"
  
  return (
    <>
      <Breadcrumb folderId={folderId} folderName={folderName}/>
      <ShowFiles id={folderId}/>
    </>
  )
}