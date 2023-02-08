import { Header } from "./components/Header"
import {Post} from "./Post"

import './styles.css'

export function App() {
  return (
    <div>
      
      <Header />
      <Post 
        author="Lucas Carvalho Silva" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis minima aliquid perspiciatis necessitatibus, quam ex esse laborum, repellendus       molestiae vel illo nesciunt nisi, asperiores assumenda doloremque ipsum maxime. Rem, voluptatum?"
      />
      <Post 
        author="Gabriel Buzzi" 
        content="Um novo post muito legal"
      />
   </div>
  )
}

 