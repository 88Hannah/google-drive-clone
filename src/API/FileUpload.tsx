import { storage } from "@/firebaseConfig"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addToFireStoreDatabase } from "./Firestore"

export const fileUpload = (file, setProgress: (progress: number) => void) => {
    // Create the file metadata
    /** @type {any} */
    const metadata = {
      contentType: file.type != "" ? file.type : "unknown"
    };

    // Upload file and metadata to the object
    const storageRef = ref(storage, `files/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);
    
    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(progress)
        setProgress(progress)
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        alert (error)
      }, 
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          addToFireStoreDatabase(downloadURL)
        });
      }
    );
}

