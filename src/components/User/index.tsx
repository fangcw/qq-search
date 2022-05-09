import React from 'react'
import "./index.css"

interface IRes {
    code: number;
    msg: string;
}
export interface User extends IRes {
    qq: string;
    name: string;
    qlogo: string;
    lvzuan: {
        level: number;
        score: number;
        isyear: number
    }
}

interface IProps {
    user: User;
}

const QQUser: React.FC<IProps> = (props) => {
    const user = props.user
    return (
        <div className='user'>
            <div className="user-bg"></div>
            <span className="user-avatar">
                <img src={user.qlogo} alt="" />
            </span>
            <p className="user-name">{user.name}</p>
            <p className="user-qq">{user.qq}</p>
            <div className="user-lvzuan">
                <div className="user-lvzuan-item">
                    <p className="lvzuan-num">{user.lvzuan.level}</p>
                    <p className="lvzuan-name">绿钻等级</p>
                </div>
                <div className="user-lvzuan-item">
                    <p className="lvzuan-num">{user.lvzuan.score}</p>
                    <p className="lvzuan-name">绿钻积分</p>
                </div>
            </div>
        </div>
    )
}

export default QQUser