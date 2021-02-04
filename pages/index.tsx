import fs from "fs"
import Link from "next/link"
import Layout from "../components/Layout"
import { readContentFiles } from "../lib/content-loader"
import { GetStaticProps } from 'next'
export default function Home(props) {
  const { posts, hasArchive } = props

  return (
    <Layout title="">
      {posts.map((post) => <div
        key={post.slug}
        className="h-auto"
      >
        <div className="w-9/12 text-center mx-auto h-60">
        <img className="w-9/12 h-20" src={post.image}/>
        <img src="static/100.png"/>
        <h2><Link href="/posts/[id]" as={`/posts/${post.slug}`}><a>{post.title}</a></Link></h2>
        <div><span>{post.published}</span></div>
        </div>
      </div>)}
      {hasArchive ? (
        <div className="home-archive text-red-200">
          <Link href="/archive/[page]" as="/archive/1"><a>アーカイブ</a></Link>
        </div>
      ) : ``}
    </Layout>
  )
}
/**
 * ページコンポーネントで使用する値を用意する
 */
export const getStaticProps: GetStaticProps = async({ params })  => {
  const MAX_COUNT = 5
  const posts = await readContentFiles({ fs })
  const hasArchive = posts.length > MAX_COUNT
  return {
    props: {
      posts: posts.slice(0, MAX_COUNT),
      hasArchive,
    }
  }
}