import Head from "next/head"
import Image from "next/image"
import styles from '../styles/Layout.module.css'
import Logo from '../assets/img/Vector.png'

export default function Layout({ children, title, description }) {
    return (
        <div className={styles.container}>

            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>

            <nav>
                <Image src={Logo} alt='logo Nubimetric challenge Ong' />
            </nav>

            <main>{children}</main>
        </div>
    )
}

Layout.defaultProps = {
    title: "Challenge - Nubimetrics",
    description: "ONG - codeando para ingresar a un nuevo puesto de trabajo"
}