import React, { useContext, useEffect, useReducer, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import axios from 'axios';
import { format } from 'timeago.js';
import './Message.css';

const Message = ({ own, data }) => {
    const { user } = useContext(AuthContext);
    const [sender, setSender] = useState([]);

    useEffect(() => {
        const getUser = async () => {
            try {
                const res = await axios.get(`/users/?userId=${data.sender}`);
                setSender(res.data);
            } catch (error) {
                console.log(error);
            }
        };
        getUser();
    }, []);
    return (
        <div className={'message-wrapper ' + (own ? 'own' : +'')}>
            <div className={'msg-top ' + (own ? 'own-msg-order' : +'')}>
                <img
                    className={'msg-img ' + (own ? 'own-msg-img' : +'')}
                    src={own ? user.profilePic : sender.profilePic}
                    alt=""
                />
                <p className={'msg-text ' + (own ? 'own-msg-style' : +'')}>
                    {data.text}
                </p>
            </div>
            <div className="msg-bottom">
                <span className={'msg-ago ' + (own ? 'own-msg-ago-span' : +'')}>
                    {format(data.createdAt)}
                </span>
            </div>
        </div>
    );
};

export default Message;
