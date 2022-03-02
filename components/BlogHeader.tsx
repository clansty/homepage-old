import styles from '../styles/Components.module.scss'
import Link from 'next/link'
import {LeftOutlined} from '@ant-design/icons'

export default function BlogHeader({postTitle, scrollUp}: { postTitle?: string, scrollUp: () => any }) {
    return <div className={`${styles.blogHeader} blogHeader`}>
        <div className={styles.back}>
            <Link href={postTitle ? '/posts' : '/'}>
                <a>
                    <LeftOutlined/>
                </a>
            </Link>
        </div>
        <h1 onClick={scrollUp}>{postTitle}&nbsp;</h1>
    </div>
}
