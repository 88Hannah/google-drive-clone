// import { doc, onSnapshot } from "firebase/firestore";
// import { database } from "@/firebaseConfig"

// export function fetchFiles() {

//     onSnapshot(doc(database, "files"), (doc) => {
//         console.log("Current data: ", doc);
//     });

// }

import React from "react"
import { collection, onSnapshot } from "firebase/firestore";
import { database } from "@/firebaseConfig"

export function useFiles() {
    const [ fileList, setFileList ] = React.useState([])
    
    React.useEffect(() => {
        const files = collection(database, "files");
        console.log(files)
        const filesArray = []
        const unsubscribe = onSnapshot(files, (snapshot) => {
            console.log(snapshot)

            const currentFiles = snapshot.docs.map(file => {
                return { ... file.data(), id: file.id }
            })
            setFileList(currentFiles)
        });
    }, [])
    return fileList
}