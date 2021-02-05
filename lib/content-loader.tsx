import path from "path"
import remark from "remark"
import html from "remark-html"
import matter from "gray-matter"
import { formatDate } from "./date"
const DIR = path.join(process.cwd(), "content/posts")
const EXTENSION = ".md"
/**
 * Markdown のファイル一覧を取得する
 */
const listContentFiles = ({ fs }) => {
  const filenames = fs.readdirSync(DIR)
  return filenames
    .filter((filename) => path.parse(filename).ext === EXTENSION)
}
/**
 * Markdown のファイルの中身をパースして取得する
 */
const readContentFile = async ({ fs, slug, filename }) => {
  if (slug === undefined) {
    slug = path.parse(filename).name
  }
  const raw = fs.readFileSync(path.join(DIR, `${slug}${EXTENSION}`), 'utf8')
  const matterResult = matter(raw)
  const { title, published: rawPublished,images} = matterResult.data
  const parsedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const content = parsedContent.toString()
  return {
    title,
    published: formatDate(rawPublished),
    content,
    slug,
    images,
  }
}
/**
 * Markdown のファイルの中身を全件パースして取得する
 */
const readContentFiles = async ({ fs }) => {
    const promises = listContentFiles({ fs })
      .map((filename) => readContentFile({ fs, filename }))
    const contents = await Promise.all(promises)
    return contents.sort(sortWithProp('published', true))
  }
/**
 * Markdown の投稿をソートするためのヘルパー
 */
const sortWithProp = (name, reversed) => (a, b) => {
    if (reversed) {
      return a[name] < b[name] ? 1 : -1
    } else {
      return a[name] < b[name] ? -1 : 1
    }
  }
export { listContentFiles, readContentFiles, readContentFile }