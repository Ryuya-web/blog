import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}
const siteTitle = "kodakku.com"
const Header = () => (
      <div className="flex">
        <div className="site-title w-2 mt-3 ml-10 md:w-12">
          <Link href="/">
            <a>{siteTitle}</a>
          </Link>
        </div>
      <div className="ml-auto md:mr-16 mt-3">
        <Link href="/">
          <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle}>About</a>
        </Link>
        <Link href="/contact">
          <a style={linkStyle}>Contact</a>
        </Link>
      </div>
      </div>
)

export default Header