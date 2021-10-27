const OLD_BLOG_TRANSFER = [
    [43, 'sunlogin-in-opensuse'],
    [35, 'cloud-server-freebsd'],
    [30, 'deepin-wine-wechat-in-docker'],
    [29, 'pitfalls-in-kvm'],
    [28, 'server-encrypted-backup-with-rclone'],
    [18, 'android-chroot-arch-linux'],
    [15, 'google-sync-in-chromium'],
    [9, 'raspi-with-ipad'],
    [4, 'cloud-server-arch-linux'],
]

module.exports = {
    reactStrictMode: false,
    publicRuntimeConfig: {
        DOMESTIC: process.env.BUILD_FOR_DOMESTIC,
    },
    async redirects() {
        return [
            {
                source: '/favicon.ico',
                destination: '/favicon.webp',
                permanent: true,
            },
            ...OLD_BLOG_TRANSFER.map(e => ({
                source: `/${e[0]}`,
                destination: `/posts/${e[1]}`,
                permanent: true,
            })),
        ]
    },
}
