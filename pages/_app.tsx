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

function MyApp({Component, pageProps}) {
    const emojiList = ['(≧▽≦)', '( ╹▽╹ )', '(・∀・)']
    const backgrounds = [styles.background1, styles.background2, styles.background3]
    const [randomBackground, setRandomBackground] = useState('')
    const [chosenTitle, setChosenTitle] = useState('')
    useEffect(() => {
        setRandomBackground(randomChoose(backgrounds))
        setChosenTitle(randomChoose(emojiList))
    }, [])
    return <div className={classNames(styles.container, randomBackground)}>
        <Head>
            <link rel="icon" type="image/webp" href="/favicon.webp"/>
            <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no"/>
            <meta name="theme-color" content="#EDF8F6"/>
            <meta name="HandheldFriendly" content="true"/>
            <title>凌莞{chosenTitle}喵～</title>
            <meta name="description" content="这里是凌莞的主页喵"/>
            <meta property="og:site_name" content="凌莞喵～"/>
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
        {getConfig().publicRuntimeConfig?.DOMESTIC && <footer className={styles.footer}>
            <a href="https://beian.miit.gov.cn/" target="_blank" className={styles.beian}>
                苏ICP备2020048816号-1
            </a>
        </footer>}
    </div>
}

export default MyApp
