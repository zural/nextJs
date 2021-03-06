import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    {/* <Link href={{ pathname: "/about", query: { name: "Zeit" } }}>
      <a style={{ fontSize: 14 }}>About</a>
    </Link> */}
  </div>
);

export default Header;
