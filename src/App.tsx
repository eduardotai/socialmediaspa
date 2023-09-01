import { Header } from './Components/Header.js'  
import { Post } from './Components/Post.js'
import { Sidebar } from './Components/Sidebar.js'
import styles from './App.module.css'


import './global.css'


const posts = [
  {
    id: 1,
    author: {
        avatarUrl:  "https://github.com/eduardotai.png",
        name: "Tai D. Salles",
        role: "WEBDEV"
    },

    content: 
        [
            {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
            {type: 'link', content: 'jane.design/doctorcare'}
        ],
        
     publishedAt: new Date('2022-11-10 12:06:00'),   
  },
  { 
     id: 2,
    author: {
      avatarUrl:  "https://github.com/lucaskohler.png",
        name: "Lucas",
        role: "Senior"
    },

    content: 
        [
            {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa.'},
            {type: 'link', content: 'jane.design/doctorcare'}
        ],
        
     publishedAt: new Date('2022-11-10 12:00:00'),
  },    
    
  {
     id: 3,
    author: {
      avatarUrl:  "https://github.com/diego3g.png",
        name: "Diego",
        role: "sENIOR"
    },

    content: 
        [
            {type: 'paragraph', content: 'Acabei de subir uma escada.'},
            {type: 'link', content: 'jane.design/doctorcare'}
        ],
        
     publishedAt: new Date('2022-11-10 12:01:00')   
  },
]

export function App() {

  return (
    <div>
      <Header />  
        <div className={styles.wrapper}>
          <Sidebar />
           <main>
            {posts.map(post => {
              return (
                <Post 
                  key={1}
                  author={post.author}
                  content={post.content as []}
                  publishedAt={post.publishedAt}
                />
              )
            })}
          </main>
        </div>
     </div>

  )
}