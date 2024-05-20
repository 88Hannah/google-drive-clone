import { type Button } from "@/Interface"
 
export default function Button({btnClass, btnText} : Button) {
    return (
        <button className={`btn ${btnClass}`} >{btnText}</button>
    )
}