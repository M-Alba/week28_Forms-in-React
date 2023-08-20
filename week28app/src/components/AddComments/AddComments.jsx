import React, { useState } from 'react';
import style from './AddComments.module.css';

export default function Comments({ comment, setComment }) {

    /*const defaultAvatars = [
        '../../../public/assets/images/img1.png',
        '../../../public/assets/images/img2.png',
        '../../../public/assets/images/img3.png',
        '../../../public/assets/images/img4.png',
        '../../../public/assets/images/img5.png',
        '../../../public/assets/images/img6.png',
        '../../../public/assets/images/img7.png',
        '../../../public/assets/images/img8.png'
    ]*/

    const [checked, setChecked] = useState(false);
    const [userName, setUserName] = useState('');
    const [avatar, setAvatar] = useState('');
    const [commentText, setCommentText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    
    const handleChangeChecked = (e) => {
        setChecked(e.target.checked);
    }
    
    const handleChangeUserName = (e) => {
        setUserName(e.target.value.toUpperCase());
    }

    const handleChangeAvatar = (e) => {
        setAvatar(e.target.value);
    }

    const handleChangeComment = (e) => {
        setCommentText(e.target.value);
    }

    const handleSendComment = () => {
        setComment(
            [{
                userName: userName,
                avatar: avatar,
                comment: commentText
            }, ...comment]
        )
        setUserName('');
        setAvatar('');
        setCommentText('');
    }

    return (
        <div className={style.comment__user}>
                <h3 className={style.comment__subtitle}>Оставьте ваш комментарий</h3>
                <form onSubmit={handleSubmit}>
                <div className={style.author}>
                    <span>Показывать ваше имя?</span>
                    <label>Да<input type="radio" name="author" value="yes" checked={checked} onChange={handleChangeChecked} /></label>
                    <label>Нет<input type="radio" name="author" value="no" checked={checked} onChange={handleChangeChecked} /></label>
                </div>
                <div>
                    <label>Введите ваше имя:
                        <input type="text" className={style.userName} value={userName} onChange={handleChangeUserName} />
                    </label>
                </div>
                <div>
                    <label>Введите ссылку вашего аватара:
                        <input type="text" className={style.userAvatar} value={avatar} onChange={handleChangeAvatar} />
                    </label>
                </div>
                <div>
                    <label>Оставьте ваш комментарий:
                        <textarea className={style.userComment} rows="5" value={commentText} onChange={handleChangeComment} />
                    </label>
                </div>
                <button className={style.button} onClick={handleSendComment}>Отправить</button>
                </form>
        </div>
    );
}