import React from 'react';
import style from './CommentsList.module.css';

export default function CommentsList({ comment }) {
    
    const currentTime = new Date().toLocaleString();

    return (
        <div className={style.chat}>
                <h3 className={style.comment__subtitle}>Чат</h3>
                <div>
                    {
                        comment.map( (item, index) => (
                            <div key={index}>
                                <div className={style.message}>
                                    <img className={style.message_avatar} alt='avatar' src={ item.avatar } />
                                    <div className={style.message_name}>{ item.userName }</div>
                                    <div className={style.message_time}>{currentTime}</div>
                                    <div className={style.message_text}>{item.comment }</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
        </div>
    )
}