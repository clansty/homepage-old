import Twemoji from '../components/Twemoji'
import {
    ArchLinuxIcon,
    MaimaiIcon,
    NextIcon,
    NodeIcon,
    PythonIcon,
    VueIcon,
} from '../components/IconSvgs'
import {AppleFilled} from '@ant-design/icons'

export default function AboutContentEn() {
    return <>
        <p>
            Hello&nbsp;
            <Twemoji text="👋" unicode="1f44b"/>
            <b>Clansty</b> here!
        </p>
        <p>
            Software Engineering Sophomore.&nbsp;
            <Twemoji text="👩‍💻" unicode="1f469-200d-1f4bb"/>
        </p>
        <p>
            Normal girl
            <Twemoji text="👧🏻" unicode="1f467-1f3fb"/>
        </p>
        <p>
            Like all kinds of <del>weird</del> kawaii things
        </p>
        <p>
            Like cats!&nbsp;
            <Twemoji text="🐱" unicode="1f431"/>
        </p>
        <p>
            Play Maimai！
            <MaimaiIcon/>
        </p>
        <p>Tossing weird techniques</p>
        <p>
            Usually use JavaScript,&nbsp;
            <NodeIcon/>
            Node.JS for backend and utilities
        </p>
        <p>
            Seldom use&nbsp;
            <PythonIcon/>
            Python
        </p>
        <p>
            Used&nbsp;
            <Twemoji text="⚛️" unicode="269b"/>
            React now and learning&nbsp;
            <VueIcon/>
            Vue 3
        </p>
        <p>
            Vue 3 seems to be nice
        </p>
        <p>
            This site is written in React (
            <NextIcon/>
            Next.JS)
        </p>
        <p>
            hosted on Cloudflare Pages
        </p>
        <p>Learnt some Python, C# and Java</p>
        <p>Once learnt C++, but forgot now</p>
        <p>
            Now using&nbsp;
            <ArchLinuxIcon/>
            Arch Linux and&nbsp;
            <AppleFilled/>
            macOS
        </p>
    </>
}
