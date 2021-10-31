import styles from '../styles/Components.module.scss'
import FriendLinkBox from '../components/FriendLinkBox'
import shuffle from '../utils/shuffle'
import Link from 'next/link'
import {LeftOutlined} from '@ant-design/icons'
import {GetStaticProps, InferGetStaticPropsType} from 'next'
import MtfWikiLinkBox from '../components/MtfWikiLinkBox'
import YAML from 'yaml'
import fs from 'fs'
import FriendLink from '../types/FriendLink'
import {useEffect, useState} from 'react'
import Head from 'next/head'

function Friends({friends}: InferGetStaticPropsType<typeof getStaticProps>) {
    const [friendsDisplay, setFriendsDisplay] = useState<FriendLink[]>(friends)

    useEffect(() => {
        setFriendsDisplay([...shuffle(friendsDisplay)])
    }, [])

    return <div className={styles.friendContainer}>
        <Head>
            <title>友情链接</title>
            <meta name="description" content="这里是凌莞的好朋友们"/>
        </Head>
        <div className={styles.scrollBox}>
            <div className={styles.groupBox}>
                <div className={styles.title}>
                    好朋友们～
                </div>
                {friendsDisplay.map(f => <FriendLinkBox item={f} key={f.name}/>)}
            </div>
            <div className={styles.groupBox}>
                <div className={styles.title}>
                    特别感谢！
                </div>
                <MtfWikiLinkBox/>
            </div>
        </div>
        <div className={styles.back}>
            <Link href="/">
                <a>
                    <LeftOutlined/>
                </a>
            </Link>
        </div>
    </div>
}

export const getStaticProps: GetStaticProps = async () => {
    return {
        props: {
            friends: shuffle(YAML.parse(fs.readFileSync('data/friends.yaml', 'utf-8'))) as FriendLink[],
        },
    }
}

export default Friends
