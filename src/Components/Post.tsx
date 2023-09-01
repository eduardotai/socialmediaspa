import ptBR from 'date-fns/locale/pt-BR'
import { format, formatDistanceToNow } from 'date-fns'
import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

export interface Author {
  name: string
  role: string
  avatarUrl: string
}

export interface Content {
  id:number
  content: string
  type: 'paragraph' | 'link'
  link: string
}

export interface PostProps {
  author: Author
  content: Content[]
  publishedAt: Date;
}

export function Post({ author, publishedAt, content }: PostProps){

    const [comments, setComments] = useState([
        'testeeeeee'
    ]) 


    const [newCommentText, setNewCommentText] = useState('') 

    const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale: ptBR,
      });

      const publishedAtRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
      })

      function handleNewComment(event: FormEvent) {
        event.preventDefault()

        setComments([...comments, newCommentText])
        setNewCommentText('')
      }

      function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
        event.target.setCustomValidity('')
        setNewCommentText(event.target.value)
      }

      function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
          event.target.setCustomValidity('teste')
      }

      
   function deleteComment(commentToDelete: string) {
    const commentsWithoutDeletedOne = comments.filter(comment => {
      return comment !== commentToDelete;
    })

    setComments(commentsWithoutDeletedOne);
  }

  const isNewCommentEmpty = newCommentText.length === 0

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedAtRelativeToNow}
                </time>
            </header>

            <div className={styles.content}>
               {content.map(line => {
                 if (line.type === 'paragraph') {
                    return <p key={line.content}>{line.content}</p>
                 } else if (line.type === 'link') {
                    return <p key={line.content}><a href="">{line.link}</a></p>
                 }
               })}
            </div>

            <form onSubmit={handleNewComment} className={styles.commentForm}>
                <textarea placeholder="Digite seu comentário" 
                name='comment'
                value={newCommentText}
                onChange={handleNewCommentChange}
                onInvalid={handleNewCommentInvalid}
                required  
                /> 
                <button type="submit" disabled={isNewCommentEmpty}
                >Publicar</button>
            </form>

            <div className={styles.commentList}>
               {comments.map(comment => {
                    return <Comment key={comment} content={comment} deleteComment={deleteComment}/>
                })}
            </div>
        </article>
    )

}