import { useRouter } from 'next/router'
import ShowFiles from "@/components/ShowFiles";
 
export default function Folder() {
  const router = useRouter()
  const fileId = router.query.id ?? ""
  return <ShowFiles id={fileId}/>
}