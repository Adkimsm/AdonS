import React, {useState} from "react"

export default function () {
    let [textContent, setTextContent] = useState("")
    let [alertOpacity, setOpacity] = useState(0)
    let [alertTop, setTop] = useState(-40)
    let [alertDisplay, setDisplay] = useState("none")
    window.alert = (str, timeout=2500) => {
        setTextContent(str)
        setDisplay('flex')
        setTimeout(()=>{
            setOpacity(1)
            setTop(40)
        },50)

        setTimeout(() => {
            setTop(-40)
            setOpacity(0)
            setTimeout(() => {
                setDisplay('none')
            },550)
        }, timeout)
    }
    return (
        <div className="alertCon" style={{opacity: alertOpacity,display: alertDisplay,top: `${alertTop}px`}}>
            <div className="alert">
                <div className="alertContent">
                    <span>{textContent}</span>
                </div>
            </div>
        </div>
    )
}