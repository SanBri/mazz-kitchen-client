import Head from "next/head";

import Section from "../component/common/section";
import Card from "../component/common/card";
import SinglePost from "../component/post/SinglePost";
import Alert from "../component/layout/Alert.jsx";

const Post = ({ post }) => {
  return (
    <>
      <Head>
        <title>Mazz Kitchen | {post.title}</title>
      </Head>
      <Section id='postSection' minHeight='0' color=''>
        <Alert />
        <Card linkBack={"/posts"} textBack='Retour aux articles' marginLeft='0'>
          <SinglePost post={post} />
        </Card>
      </Section>
    </>
  );
};

// const URL = "https://mazz-kitchen.herokuapp.com";
const URL = "https://mazz-kichen.onrender.com";

export async function getStaticPaths() {
  let paths = [];
  try {
    const uri = `${URL}/api/posts/`;
    const res = await fetch(uri);
    const posts = await res.json();
    paths = posts.map((post) => ({
      params: { postId: post._id },
    }));
  } catch (err) {
    console.log(`Error fetching ressources: `, err);
  }
  return { paths, fallback: "blocking" };
}

export const getStaticProps = async ({ params }) => {
  const uri = `${URL}/api/posts/${params.postId}`;
  const res = await fetch(uri);
  const post = await res.json();
  return { props: { post } };
};

export default Post;
