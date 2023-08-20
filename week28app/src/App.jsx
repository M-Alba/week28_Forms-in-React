import React, { useState } from 'react';
import style from './App.module.css';
import AddComments from './components/AddComments/AddComments';
import CommentsList from './components/CommentsList/CommentsList';

function App() {

  const [comment, setComment] = useState([]);

  return (
    <div className={style.App}>
      <h1 className={style.comment__title}>Сервис комментариев со спам фильтром</h1>
      <div className={style.comment__wrapper}>
        <AddComments comment={comment} setComment={setComment} />
        <CommentsList comment={comment} setComment={setComment}/>
      </div>
    </div>
  );
}

export default App;
