import styles from '../styles/Components.module.scss'
import Error from 'next/error'
import Head from 'next/head'

export default function ReferrerNotAllowed() {
    return <div className={styles.errorContainer}>
        <Head>
            <meta name="robots" content="noindex"/>
        </Head>
        <Error statusCode={403} title="Referrer not allowed" style={{backgroundColor: 'unset'}}/>
    </div>
}
