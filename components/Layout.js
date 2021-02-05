import Head from "next/head"
import Header from './Header.tsx'
const Layout = (props) => {
  const { title, children } = props
  const siteTitle = "kodakku.com"
  return (
    <div className="page w-full ">
      <Head>
        <title>{title ? `${title} | ${siteTitle}` : siteTitle}</title>
        <link rel="icon" href="/images/profile.png" />
      </Head>
      <header className="shadow bg-white w-full fixed h-12 	z-10 -mt-20">
        <Header />
      </header>
      <main>
        {title ? <h1 className="page-title">{title}</h1> : ``}
        <div className="page-main">
          {children}
        </div>
      </main>
      <footer>
        &copy; {siteTitle}
      </footer>
      <style jsx>{`
        .site-title a {
          color: inherit;
          text-decoration: none;
        }
        footer {
          margin-top: 4em;
          padding-top: 2em;
          padding-bottom: 2em;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
      <style jsx global>{`
        html,
        img,
        iframe {
          max-width: 100%;
        }
        h1, h2, h3, h4, h5, h6 {
          font-family: Montserrat, -apple-system, "Segoe UI", "Helvetica Neue",
            "Hiragino Kaku Gothic ProN", メイリオ, meiryo, sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
export default Layout