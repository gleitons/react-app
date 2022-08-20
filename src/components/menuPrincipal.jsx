import styles from './menu.module.css';

function NavMenu() {
    return (
        <div className={styles.centerB}>
            <nav className={styles.dFlex}>
                <a className={styles.menuP} href="./">
                    <li>Inicio</li>
                </a>
                <a className={styles.menuP} href="./pages/contato.jsx">
                    <li>Contato</li>
                </a>
                <a className={styles.menuP} href="./pages/sobre.jsx">
                    <li>Sobre</li>
                </a>
            </nav>
        </div>
    )
}
export default NavMenu;