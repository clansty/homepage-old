import {InferGetStaticPropsType} from 'next'
import allPosts from '../utils/allPosts'
import PostsIndexItem from '../components/PostsIndexItem'
import BlogLayout from '../layouts/BlogLayout'
import styles from '../styles/Components.module.scss'
import Head from 'next/head'

export default function Posts({posts}: InferGetStaticPropsType<typeof getStaticProps>) {
    return <BlogLayout>
        <Head>
            <title>凌莞咕噜咕噜～</title>
            <link rel="canonical" href="https://clansty.com/posts" />
            <meta property="og:url" content="https://clansty.com/posts"/>
            <meta name="description" content="一个奇奇怪怪的地方"/>
        </Head>
        <div className={styles.postList}>
            {posts.map((e, i) => <PostsIndexItem post={e} key={e.slug} index={i}/>)}
        </div>
    </BlogLayout>
}

export const getStaticProps = async () => {
    return {
        props: {
            posts: allPosts,
            isInBlog: true,
        },
    }
}
