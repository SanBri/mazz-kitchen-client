import { useRouter } from "next/router";
import Head from "next/head";

import PrivatePage from "../component/layout/PrivatePage";
import Section from "../component/common/section";
import Card from "../component/common/card";
import Alert from "../component/layout/Alert.jsx";
import PostForm from "../component/dashboard/PostForm";

const dashboardCreatePost = () => {
  const router = useRouter();
  const {
    query: { id },
  } = router;

  return (
    <>
      <Head>
        <title>
          Mazz Kitchen | {id ? "Modifier un article" : "Rédiger un article"}
        </title>
      </Head>
      <div>
        <Section
          id='dashboardCreatePost'
          minHeight='100vh'
          padding='8rem 8rem 3rem 8rem'
        >
          <Card
            icn={id ? "fas fa-edit" : "fas fa-pencil-alt"}
            title={id ? "Modifier l'article" : "Rédiger un article"}
            linkBack='/dashboard-posts'
            textBack='Gestion des articles'
          >
            <Alert />
            <PostForm id={id} />
          </Card>
        </Section>
      </div>
    </>
  );
};

export default PrivatePage(dashboardCreatePost);
