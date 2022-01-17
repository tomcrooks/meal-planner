import styles from "../styles/Navbar.module.css"
import { MdAccountCircle } from "react-icons/md"
import Image from "next/image"

const Navbar = ({ children }) => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <div className={styles.texts}>

                </div>
            </div>
            <div className={styles.item}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>Meals</li>
                    <Image src="/img/vercel.svg" alt="some text" width="160px" height="69px"/>
                    <li className={styles.listItem}>About</li>
                    {/* <li className={styles.listItem}></li> */}
                </ul>
            </div>
            <div className={styles.item}>
                <div className={styles.account}>
                    <MdAccountCircle />
                </div>
            </div>
        </div>
    )
}

export default Navbar
