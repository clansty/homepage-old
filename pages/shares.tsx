import styles from '../styles/Components.module.scss'
import Link from 'next/link'
import {LeftOutlined, LoadingOutlined} from '@ant-design/icons'
import Head from 'next/head'

export default function Shares() {
    return <div className={styles.sharesContainer}>
        <Head>
            <title>凌莞的喵喵喵碎碎念</title>
            <link rel="canonical" href="https://clansty.com/shares"/>
            <meta property="og:url" content="https://clansty.com/shares"/>
            <meta name="description" content="凌莞的喵喵喵碎碎念和奇奇怪怪的分享"/>
        </Head>
        <div className={`${styles.blogHeader}`}>
            <div className={styles.back}>
                <Link href="/">
                    <a>
                        <LeftOutlined/>
                    </a>
                </Link>
            </div>
        </div>
        <iframe src="https://tg.0w0.wiki" frameBorder="0" />
        <div className={styles.loading}>
            <LoadingOutlined/>
        </div>
    </div>
}
