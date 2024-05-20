import { type Button } from "@/Interface"
 
export default function Button({btnClass, btnText, onClick} : Button) {
    return (
        <button onClick={onClick} className={`btn ${btnClass}`} >{btnText}</button>
    )
}