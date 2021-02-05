import fs from "fs"
import Link from "next/link"
import Layout from "../components/Layout"
import { readContentFiles } from "../lib/content-loader"
import { GetStaticProps } from 'next'
export default function Home(props) {
  const { posts, hasArchive } = props

  return (
    <Layout title="">
      <div>
      {posts.map((post) => <div
        key={post.slug}
        className="h-auto"
      >
        
        <div className="md:w-6/12 w-6/12 text-center border-black mx-auto border-2 mt-20 w-9/12 ">
        <Link href="/posts/[id]" as={`/posts/${post.slug}`}><a>
        <img src={post.images} className="w-9/12 h-60 md:h-80 mx-auto" /> 
        <div>{post.title}</div>
        <div><span>{post.published}</span></div>
        </a></Link>
        </div>
      </div>)}
      {hasArchive ? (
        <div className="home-archive text-red-200">
          <Link href="/archive/[page]" as="/archive/1"><a>アーカイブ</a></Link>
        </div>
      ) : ``}
      </div>
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