import styles from './SideBar.module.css'

export function SideBar() {
    return (
        <aside className={styles.sideBar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1603468620905-8de7d86b781e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
            />
            <div className={styles.profile}>
                <strong>Lucas Carvalho</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="#">Editar seu perfil</a>
            </footer>
        </aside>
    )
}