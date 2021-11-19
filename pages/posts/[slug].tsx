import PostInfo from '../../types/PostInfo'
import {GetStaticPaths, GetStaticProps} from 'next'
import allPosts from '../../utils/allPosts'
import getPostContent from '../../utils/getPostContent'
import BlogLayout from '../../layouts/BlogLayout'
import ReactMarkdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {materialOceanic} from 'react-syntax-highlighter/dist/cjs/styles/prism'
import Head from 'next/head'
import RinMent from '../../components/RinMent'
import styles from '../../styles/Components.module.scss'
import formatDate from '../../utils/formatDate'

const components = {
    code({node, inline, className, children, ...props}) {
        const match = /language-(\w+)/.exec(className || '')
        return !inline && match ? (
            <SyntaxHighlighter
                style={materialOceanic}
                language={match[1]}
                PreTag="div"
                children={String(children).replace(/\n$/, '')}
                showLineNumbers
                {...props} />
        ) : (
            <code className={className} {...props}>
                {children}
            </code>
        )
    },
    a({href, children}) {
        return <a href={href}>
            {children}
            <style jsx>{`
              a {
                --href: '${href}'
              }
            `}</style>
        </a>
    },
}

export default function SinglePost({meta, content}: { meta: PostInfo, content: string }) {
    return <BlogLayout postTitle={meta.title}>
        <Head>
            <title>{meta.title} — 凌莞咕噜咕噜～</title>
            <link rel="canonical" href={`https://nyac.at/posts/${meta.slug}`}/>
            <meta name="description" content={meta.desc}/>
            <meta name="author" content="Clansty"/>
            <meta property="og:title" content={meta.title}/>
            <meta property="og:type" content="article"/>
            <meta property="og:description" content={meta.desc}/>
            <meta property="og:image" content={meta.banner}/>
            <meta property="og:url" content={`https://nyac.at/posts/${meta.slug}`}/>
            <meta property="article:published_time" content={new Date(meta.date).toISOString()}/>
            <meta property="article:modified_time" content={new Date(meta.date).toISOString()}/>
            <meta name="twitter:title" content={meta.title}/>
            <meta name="twitter:description" content={meta.desc}/>
            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:image" content={meta.banner}/>
            <base target="_blank"/>
        </Head>
        <div className="postContent">
            <div className="date">
                {formatDate('yyyy/MM/dd', new Date(meta.date))}
            </div>
            {/* @ts-ignore */}
            <ReactMarkdown components={components}>{content}</ReactMarkdown>
            <RinMent slug={meta.slug}/>
        </div>
    </BlogLayout>
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: allPosts.map(e => ({
            params: {
                slug: e.slug,
            },
        })),
        fallback: false,
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    return {
        props: {
            meta: allPosts.find(e => e.slug === params.slug),
            content: getPostContent(params.slug as string),
            isInBlog: true,
        },
    }
}
