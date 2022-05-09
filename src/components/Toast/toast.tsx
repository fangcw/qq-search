import React from 'react'
import "./toast.css"

export interface ToastData {
    message: string;
    show: boolean;
}
const ToastWrap: React.FC<ToastData> = (props) => {
    const { message, show } = props
    return (<div className={show ? 'toast show' : 'toast'}> {message} </div>)
}

export default ToastWrap