import Head from "next/head";
const About = () => (
  <div>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Link href={{ pathname: "/about", query: { name: "Zeit" } }}>
      <a style={{ fontSize: 14 }}>About</a>
    </Link>
    <p>Hello Next.js</p>
  </div>
);
export default () => <div>This is the about page.</div>;
