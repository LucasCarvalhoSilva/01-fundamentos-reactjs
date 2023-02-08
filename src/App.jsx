import { Header } from "./components/Header"
import {Post} from "./components/Post"
import { SideBar } from "./components/SideBar"

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
    <div>
      
      <Header />
      
      <div className={styles.wrapper}>
        <SideBar />
        <main>
          <Post
            author="Lucas Carvalho"
            content="Um post legal" 
          />
          <Post
            author="Zezinho"
            content="Um post " 
          />
        </main>
      </div>
   </div>
  )
}

 