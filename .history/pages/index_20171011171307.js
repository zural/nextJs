// This is the Link API
import Header from "../comps/Header";
import Layout from "../comps/MyLayout.js";
import Link from "next/link";
import Head from "next/head";
import fetch from "isomorphic-unfetch";

// SET 1
// const content = <p>HOME DATA</p>;
// const PostLink = props => (
//   <li>
//     <Link as={"/p/" + props.id} href={"/posts?title=" + props.title}>
//       <a>{props.title}</a>
//     </Link>
//   </li>
// );
// const Index = () => (
//   <div>
//     {/* <Link href="/about">
//       <a style={{ fontSize: 14 }}>About Page</a>
//     </Link> */}
//     <Head>
//       <title>My page title</title>
//       <meta name="viewport" content="initial-scale=1.0, width=device-width" />
//     </Head>
//     {/* <Header /> */}
//     <Layout content={content}>
//       <p>HOMESS</p>
//       <ul>
//         <PostLink id="hello-nextjs" title="Hello Next.js" />
//         <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
//         <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
//       </ul>
//     </Layout>
//   </div>
// );
//export default Index;

// SET 2
// const Index = props => (
//   <Layout>
//     <h1>Batman TV Shows</h1>
//     <ul>
//       {props.shows.map(({ show }) => (
//         <li key={show.id}>
//           <Link as={`/p/${show.id}`} href={`/posts?id=${show.id}`}>
//             <a>{show.name}</a>
//           </Link>
//         </li>
//       ))}
//     </ul>
//   </Layout>
// );

// Index.getInitialProps = async function() {
//   const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
//   const data = await res.json();

//   console.log(`Show data fetched. Count: ${data.length}`);

//   return {
//     shows: data
//   };
// };

// export default Index;

function getPosts() {
  return [
    { id: "hello-nextjs", title: "Hello Next.js" },
    { id: "learn-nextjs", title: "Learn Next.js is awesome" },
    { id: "deploy-nextjs", title: "Deploy apps with ZEIT" }
  ];
}

export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      {getPosts().map(post => (
        <li key={post.id}>
          <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>{`
      h1,
      a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </Layout>
);
