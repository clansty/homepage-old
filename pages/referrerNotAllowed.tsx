import styles from '../styles/Components.module.scss'
import Error from 'next/error'

export default function ReferrerNotAllowed() {
    return <div className={styles.errorContainer}>
        <meta name="robots" content="noindex"/>
        <Error statusCode={403} title="Referrer not allowed" style={{backgroundColor: 'unset'}}/>
    </div>
}
