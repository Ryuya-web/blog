import fs from "fs"
import path from "path"
import Layout from "../../components/Layout"
import { listContentFiles, readContentFile } from "../../lib/content-loader"
import { GetStaticProps } from 'next'
export default function Post(params) {
  return (
    <Layout title="">
      <div className="md:w-6/12 w-9/12 mt-20 mx-auto">
      <div className="post-title text-3xl">
        <span>{params.title}</span>
      </div>
  
      <div className="post-meta">
        <span>{params.published}</span>
      </div>
      <div className="border-blue-300 border-2 mr-auto ml-auto  mt-2"></div>
      <div className="post-body mt-10 text-xl"
        dangerouslySetInnerHTML={{ __html: params.content }}
      />
      </div>
    </Layout>
  )
}
/**
 * ページコンポーネントで使用する値を用意する
 */
export const getStaticProps: GetStaticProps = async({ params })  => {
  const content = await readContentFile({ fs, slug: params.slug })
  return {
    props: {
      ...content
    }
  }
}
/**
 * 有効な URL パラメータを全件返す
 */
export async function getStaticPaths() {
  const paths = listContentFiles({ fs })
    .map((filename) => ({
      params: {
        slug: path.parse(filename).name,
      }
    }))
  return { paths, fallback: false }
}

