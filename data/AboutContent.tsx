import Twemoji from '../components/Twemoji'
import {ArchLinuxIcon, MaimaiIcon, NextIcon, NodeIcon, PythonIcon, VueIcon} from '../components/IconSvgs'
import {AppleFilled} from '@ant-design/icons'

export default function AboutContent() {
    return <>
        <p>
            嗨
            <Twemoji text="👋" unicode="1f44b"/>
            这里是
            <b>凌莞 / Clansty</b>
        </p>
        <p title="课都不去上的">
            目前上大二，专业是
            <del>软妹工程</del>
            软件工程
            <Twemoji text="👩‍💻" unicode="1f469-200d-1f4bb"/>
        </p>
        <p title="MtF 🏳️‍⚧️">
            普通女孩子
            <Twemoji text="👧🏻" unicode="1f467-1f3fb"/>
        </p>
        <p title="自己不可爱">
            喜欢各种
            <del>奇奇怪怪</del>
            可可爱爱的东西
        </p>
        <p title="可是没法养">
            喜欢猫咪！
            <Twemoji text="🐱" unicode="1f431"/>
        </p>
        <p title="只会打红铺">
            打 Maimai！
            <MaimaiIcon/>
        </p>
        <p title="捡垃圾的">平时喜欢干的事情是折腾各种奇奇怪怪的技术</p>
        <p title="面向 Google 编程">
            比较喜欢用 JavaScript 写东西，后端和小工具一般用
            <NodeIcon/>
            Node.JS
        </p>
        <p title="只会写非常简单的 Python">
            偶尔写写
            <PythonIcon/>
            Python
        </p>
        <p>
            前端现在比较喜欢用
            <Twemoji text="⚛️" unicode="269b"/>
            React，现在在学
            <VueIcon/>
            Vue 3
        </p>
        <p title="（真香）">Vue 3 似乎也很好用的样子</p>
        <p title="就是个练手项目（">
            这个主站是用 React (
            <NextIcon/>
            Next.JS) 写的
        </p>
        <p>
            托管在 Cloudflare Pages，以及腾讯云 COS 上
        </p>
        <p title="啥都只会一点点">大概是会一点 Python，也会一点 C# 和 Java</p>
        <p title="竞赛也没打出来什么成果">学过 C++，但是现在大概不会了</p>
        <p>
            目前使用的操作系统是
            <ArchLinuxIcon/>
            Arch Linux 和
            <AppleFilled/>
            macOS
        </p>
    </>
}
