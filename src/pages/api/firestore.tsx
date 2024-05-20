import { app, storage, database } from "@/firebaseConfig";
import { type NextApiRequest, type NextApiResponse } from "next";

const firestore = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ text: "Hello world!" });
}

export default firestore;