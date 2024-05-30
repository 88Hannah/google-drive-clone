import { onSnapshot, collection, doc } from "firebase/firestore";
import { database } from "@/firebaseConfig";
import React from "react";

const files = collection(database, "files");

export const useFolderInfo = (folderId: string) => {
  const [ breadcrumb, setBreadcrumb ] = React.useState("");

  const getBreadcrumb = () => {
    if (folderId) {
      const folderDoc = doc(files, folderId);
      onSnapshot(folderDoc, (response) => {
        setBreadcrumb(response.data()?.breadcrumb);
      });
    }
  };

  React.useEffect(() => {
    getBreadcrumb();
  }, [folderId]);

  return { breadcrumb };
};

