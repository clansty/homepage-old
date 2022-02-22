import '../styles/globals.scss'
import '../styles/blog.scss'
import styles from '../styles/Home.module.scss'
import classNames from 'classnames'
import Head from 'next/head'
import {useEffect, useState} from 'react'
import randomChoose from '../utils/randomChoose'
import PageSwapper from '@moxy/react-page-swapper'
import {CSSTransition} from 'react-transition-group'
import getConfig from 'next/config'
import {useRouter} from 'next/router'

function MyApp({Component, pageProps}) {
    const router = useRouter()
    if (typeof window !== 'undefined') {
        if (/^https?:\/\/(\w+\.)?nya\.al/.test(document.referrer)) {
            location.href = 'https://lanyue.tanwan.com/'
        }
    }

    const backgrounds = [styles.background1, styles.background2, styles.background3, styles.background4, styles.background5]
    const [randomBackground, setRandomBackground] = useState('')
    const [isBeianShown, setBeianShown] = useState(false)
    useEffect(() => {
        if(location.host.includes('lwqwq.com'))
            setBeianShown(true)
        setRandomBackground(randomChoose(backgrounds))
    }, [])
    return <div className={classNames(styles.container, randomBackground)}>
        <Head>
            <link rel="icon" type="image/webp" href="https://cdn.lwqwq.com/pic/favicon.webp"/>
            <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=yes"/>
            <meta name="theme-color" content="#EDF8F6"/>
            <meta name="HandheldFriendly" content="true"/>
            <meta property="og:site_name" content="凌莞喵～"/>
            <meta property="og:locale" content="zh_CN"/>
            <title>凌莞喵～</title>
        </Head>
        <PageSwapper
            node={<Component {...pageProps} />}
        >
            {({in: inProp, onEntered, onExited, node}) => (
                <CSSTransition
                    className={node.props?.isInBlog ? '' : 'fade'}
                    in={inProp}
                    onEntered={onEntered}
                    onExited={onExited}
                    timeout={600}
                >
                    <div>{node}</div>
                </CSSTransition>
            )}
        </PageSwapper>
        {isBeianShown && <footer className={styles.footer}>
            <a href="https://beian.miit.gov.cn/" target="_blank" className={styles.beian}>
                苏ICP备2020048816号-1
            </a>
        </footer>}
    </div>
}

export default MyApp
