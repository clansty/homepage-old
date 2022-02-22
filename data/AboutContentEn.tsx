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
        <p title="Skipping classes">
            Software Engineering Sophomore.&nbsp;
            <Twemoji text="👩‍💻" unicode="1f469-200d-1f4bb"/>
        </p>
        <p title="Not MtF 🏳️‍⚧️">
            Normal girl
            <Twemoji text="👧🏻" unicode="1f467-1f3fb"/>
        </p>
        <p title="My self is not cute">
            Like all kinds of <del>weird</del> kawaii things
        </p>
        <p title="But unable to own">
            Like cats!&nbsp;
            <Twemoji text="🐱" unicode="1f431"/>
        </p>
        <p title="No more than Expert difficulty">
            Play Maimai！
            <MaimaiIcon/>
        </p>
        <p title="Pick up rubbishes">Tossing weird techniques</p>
        <p title="Google oriented">
            Usually use JavaScript,&nbsp;
            <NodeIcon/>
            Node.JS for backend and utilities
        </p>
        <p title="Only know easy parts">
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
        <p title="A slap in the face">
            Vue 3 seems to be nice
        </p>
        <p title="Practise project">
            This site is written in React (
            <NextIcon/>
            Next.JS)
        </p>
        <p>
            hosted on Cloudflare Pages and Tencent COS
        </p>
        <p title="All only a little">Learnt some Python, C# and Java</p>
        <p title="Gain nothing in contests">Once learnt C++, but forgot now</p>
        <p>
            Now using&nbsp;
            <ArchLinuxIcon/>
            Arch Linux and&nbsp;
            <AppleFilled/>
            macOS
        </p>
    </>
}
