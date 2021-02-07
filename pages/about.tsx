import fs from "fs"
import Link from "next/link"
import Layout from "../components/Layout"
import {GithubIcon,TwitterIcon,EmailIcon,ProfileIcon} from "../components/icons"
export default function Home(props) {

  return (
    <Layout title="">
      <div>
      <Link href="/about">
      <img src="/images/profile.png" width={200} height={200} className="mt-20 mx-auto rounded-full"/>
      </Link>
      <Link href="/about">
      <h2 className="text-center text-3xl mr-3">コダック</h2>
      </Link>
      <div className="flex justify-center">
      <div className="mr-4 mt-3">
      <ProfileIcon href="https://github.com/Ryuya-web">
      <GithubIcon size={80} />
      </ProfileIcon>
      </div>
      <div className="mr-5">
      <ProfileIcon href="https://twitter.com/himajin_de_su?s=20">
      <TwitterIcon size={80}/>
      </ProfileIcon>
      </div>
      <div className="mr-5 mt-1">
      <ProfileIcon href="/contact">
      <EmailIcon size={70}/>
      </ProfileIcon>
      </div>
      </div>
      <h2 className="text-center text-5xl mr-3 mt-5">About</h2>
      <div>
      <div className="border-blue-400 border-2 w-16 mr-auto ml-auto  mt-7"></div>
      </div>
      </div>
      <p className="text-center text-xl mr-3 mt-5">明治大学情報コミュニケーション学部２年</p>
      <p className="text-center text-xl mr-3 mt-5">Webエンジニアになりたいと考えている学生</p>
      <h2 className="text-center text-2xl mr-3 mt-10">資格</h2>
      <p className="text-center text-xl mr-3 mt-5">TOEIC (L) 455 (R) 360</p>
      <p className="text-center text-xl mr-3 mt-5">空手初段(実は...)</p>

    </Layout>
  )
}