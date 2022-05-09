import React from 'react'
import { createRoot, Root } from 'react-dom/client'
import ToastWrap, { ToastData } from './toast'

class Toast {
    static instance: Toast
    root: Root
    timer: number | null
    constructor() {
        const div: HTMLDivElement = document.createElement('div')
        document.body.appendChild(div)
        this.root = createRoot(div)
        this.render({ message: '', show: false })
        this.timer = null
    }

    static getInstance() {
        if (this.instance) return this.instance
        this.instance = new Toast()
        return this.instance
    }
    render(props: ToastData) {
        this.root.render(React.createElement(ToastWrap, props))
    }
    show(msg: string, duration?: number) {
        const props: ToastData = { message: msg, show: true }
        this.render(props)
        this.setTimer(msg, duration || 3)
        return this.root
    }
    setTimer(msg: string, duration: number) {
        if(this.timer){
            clearTimeout(this.timer)
        }
        this.timer = window.setTimeout(() => {
            this.hide(msg)
            this.timer && clearTimeout(this.timer)
        }, duration * 1000)
    }
    hide(msg: string) {
        const props = { message: msg, show: false }
        this.render(props)
    }
}

const toast = Toast.getInstance()

export default toast