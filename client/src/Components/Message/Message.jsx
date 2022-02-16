import React from 'react';
import './Message.css';

const Message = ({ own, data }) => {
    return (
        <div className={'message-wrapper ' + (own ? 'own' : +'')}>
            <div className={'msg-top ' + (own ? 'own-msg-order' : +'')}>
                <img
                    className={'msg-img ' + (own ? 'own-msg-img' : +'')}
                    src="https://res.cloudinary.com/dripcloud/image/upload/v1642120967/test_upload_react/facebook-default-no-profile-pic1_wq7ysr.jpg"
                    alt=""
                />
                <p className={'msg-text ' + (own ? 'own-msg-style' : +'')}>
                    {data.text}
                </p>
            </div>
            <div className="msg-bottom">
                <span className={'msg-ago ' + (own ? 'own-msg-ago-span' : +'')}>
                    5 min ago
                </span>
            </div>
        </div>
    );
};

export default Message;
