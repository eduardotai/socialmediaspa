import styles from './Comment.module.css';

import { ThumbsUp, Trash } from 'phosphor-react';

import { Avatar } from './Avatar';
import { useState } from 'react';

interface CommentProps {
  content: string;
  deleteComment: (comment: string) => void;
}


export function Comment({content, deleteComment}: CommentProps) {

  const[likeComment, setLikeComment] = useState(0)

  function handleDeleteComment() {
    deleteComment(content)
  }

  function handleLikeComment() {
    setLikeComment((state) => {
      return state + 1
    })
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/diego3g.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Diego Fernandes</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">Cerca de 1h atrás</time>
            </div>

            <button onClick={handleDeleteComment} className={styles.deleteComment} title="Deletar comentário">
              <Trash size={20} />   
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}> 
            <ThumbsUp  />
            Aplaudir <span>{likeComment}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}