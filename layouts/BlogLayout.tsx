import styles from '../styles/Components.module.scss'
import BlogHeader from '../components/BlogHeader'
import {useEffect, useRef} from 'react'

export default function BlogLayout({postTitle, children}: { postTitle?: string, children: any }) {
    const contentBox = useRef<HTMLDivElement>()
    useEffect(() => {
        contentBox.current.scrollTo(0, 0)
    }, [postTitle])
    return <div className={`${styles.blogLayout} ${postTitle ? styles.postLayoutContent : styles.postLayoutList}`}>
        <BlogHeader postTitle={postTitle}/>
        <div className={`${styles.body} ${postTitle && 'blogBody'}`} ref={contentBox}>
            {children}
        </div>
    </div>
}
