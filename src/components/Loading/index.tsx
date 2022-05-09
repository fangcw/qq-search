import React from 'react'
import "./index.css"

interface IProps {
    show: boolean;
    mask?: boolean;
}

const Loading: React.FC<IProps> = (props) => {
    const { show, mask = false} = props

    return (
        <div className='loading' hidden={!show}>
            {mask ? <div className="loading-mask"></div> : null}
            <div className="loading-wrap">
                <i className="loader --1"></i>
            </div>
        </div >
    )
}

export default Loading