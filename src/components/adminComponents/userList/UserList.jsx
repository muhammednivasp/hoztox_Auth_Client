import React, { useState, useEffect } from 'react';
import './UserList.css';
import toast from 'react-hot-toast'

import { usersList, userHandle } from '../../../services/AdminApi';

const UserList = () => {

    const [userDatas, SetUserDatas] = useState([])

    useEffect(() => {
        usersList().then((datas) => {
            console.log(datas);
            SetUserDatas(datas?.data?.Users)
        }).catch((err) => {
            console.log(err);
            toast.error('Error')
        })
    }, [])

    const handleBlock = (item, status) => {
        userHandle(item).then((datas) => {
            console.log(datas)
             SetUserDatas(datas.data.Users)      
        }).catch((err) => {
            console.log(err);
            toast.error('Failed')
        })
    }

    return (
        <div style={{ marginTop: '20px' }}>
            <h2 style={{ color: 'white' }}>Users</h2>
            <div className="user-list">
                {userDatas.map((user, index) => (
                    <div className="user-item" key={index}>
                        <div className="overflow-x-auto">
                            <div>
                                <div className="user-info">
                                    <div className="info-cell">
                                        <h1 className="cell-content">{index + 1}</h1>
                                    </div>
                                    <div className="info-cell">
                                        <h1 className="cell-content">{user.username}</h1>
                                    </div>
                                    <div className="info-cell">
                                        <h1 className="cell-content">{user.email}</h1>
                                    </div>
                                    <div className="info-cell">
                                        <h1 className="cell-content">{user.block ? <p style={{ color: 'red' }}>Block</p> : <p style={{ color: 'green' }}>Allow</p>}</h1>
                                    </div>
                                    <div className="info-cell">
                                        <div style={{ alignItems: 'center', justifyContent: 'center', padding: 2 }}>
                                            {(user.block) ? <button className="block-button" onClick={() => handleBlock(user, 'allow')}>Allow</button> : <button className="block-button" onClick={() => handleBlock(user, 'block')}>Block</button>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserList;
