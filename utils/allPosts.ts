import * as fs from 'fs'
import PostInfo from '../types/PostInfo'
import path from 'path'
import YAML from 'yaml'

const postPaths = fs.readdirSync('posts')
const posts: PostInfo[] = []

for (const postPath of postPaths) {
    const metaPath = path.join('posts', postPath, 'meta.yaml')
    if (!fs.existsSync(metaPath)) continue

    const post: PostInfo = YAML.parse(fs.readFileSync(metaPath, 'utf-8'))
    post.slug = postPath
    post.date = new Date(post.date).toISOString()
    posts.push(post)
}

posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
export default posts
