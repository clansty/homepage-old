import FriendLink from '../types/FriendLink'
import styles from '../styles/Components.module.scss'

export default function FriendLinkBox({item}: { item: FriendLink }) {
    return <a href={item.url} target="_blank">
        <div className={styles.friendLinkBox}>
            <div className={styles.avatar}>
                <img
                    src={'/friend-avatars/' + item.avatar}
                    height={80}
                    width={80}
                    alt={`${item.name} 的头像`}
                />
            </div>
            <div className={styles.text}>
                <div className={styles.name}>
                    {item.name}
                </div>
                <div className={styles.desc}>
                    {item.desc}
                </div>
            </div>
            <style jsx>{`
              div {
                --color: ${item.color}
              }
            `}</style>
        </div>
    </a>
}
