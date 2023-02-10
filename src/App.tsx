import { Header } from "./components/Header"
import {Post} from "./components/Post"
import { SideBar } from "./components/SideBar"

import styles from './App.module.css'

import './global.css'



const posts = [
  {  
    id: 1,
    author: {
      avatarUrl :"https://github.com/LucasCarvalhoSilva.png",
      name: "Lucas Carvalho Silva",
      role: "Product Owner"
    },
    content: [
      {type: 'paragraph', content:'Fala galeraa 👋'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:'jane.design/doctorcare'}, 
      {type: 'tag', content:'#novoprojeto'},
      {type: 'tag', content:'#nlw'},
      {type: 'tag', content:'#rocketseat'}
    ],
    publishedAt: new Date('2023-02-08 20:00:00'), 
  },
  {  
    id: 2,
    author: {
      avatarUrl :"https://github.com/LucasCarvalhoSilva.png",
      name: "Zezinho",
      role: "On Vacation"
    },
    content: [
      {type: 'paragraph', content:'Fala galeraa 👋'},
      {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
      {type: 'link', content:'jane.design/doctorcare'}, 
      {type: 'tag', content:'#novoprojeto'},
      {type: 'tag', content:'#nlw'},
      {type: 'tag', content:'#rocketseat'}
    ],
    publishedAt: new Date('2023-01-31 24:00:00'), 
  }
];

export function App() {
  return (
    <div>
      
      <Header />
      
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          {posts.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
   </div>
  )
}

 