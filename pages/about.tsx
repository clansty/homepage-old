import styles from '../styles/Components.module.scss'
import Link from 'next/link'
import {LeftOutlined, TranslationOutlined} from '@ant-design/icons'
import AboutContent from '../data/AboutContent'
import {useRouter} from 'next/router'
import AboutContentEn from '../data/AboutContentEn'
import {useEffect, useState} from 'react'
import Head from 'next/head'

export default function About() {
    const router = useRouter()
    const [lang, setLang] = useState('zh')
    useEffect(() => {
        setLang(router.query.lang as string)
    }, [router.query.lang])

    return <div className={styles.aboutContainer}>
        <Head>
            <title>关于我</title>
            <meta name="description" content="这里可能有一些你想了解的信息"/>
        </Head>
        <div className={styles.title}>
            {lang === 'en' ? 'About' : '关于我'}
        </div>
        <div className={styles.content}>
            <div>
                {lang === 'en' ?
                    <AboutContentEn/> :
                    <AboutContent/>}
            </div>
        </div>
        <div className={styles.back}>
            <Link href="/">
                <a>
                    <LeftOutlined/>
                </a>
            </Link>
        </div>
        <div className={styles.languageSwitchMobile}>
            <Link href={{query: {lang: lang === 'en' ? 'zh' : 'en'}}}>
                <a aria-label="切换语言 Switch language">
                    <TranslationOutlined/>
                </a>
            </Link>
        </div>
        <div className={styles.languageSwitch}>
            <Link href={{query: {lang: 'zh'}}}>
                中文
            </Link>
            <Link href={{query: {lang: 'en'}}}>
                English
            </Link>
        </div>
    </div>
}
