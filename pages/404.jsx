import Head from "next/head";
import Link from "next/link";

import Section from "../component/common/section";
import Card from "../component/common/card";
import Icon from "../component/common/icon";

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Mazz Kitchen | Page introuvable</title>
      </Head>
      <Section id='errorSection' minHeight='40rem'>
        <div className='error'>
          <Card linkBack='/' textBack='Retour au site' marginLeft='0'>
            <h1>
              Erreur <span className='secondary'>404</span>
            </h1>
            <h3>Cette page est introuvable, la recette a dû changer...</h3>
            <div className='error__logo'>
              <Link href='/'>
                <a>
                  <Icon
                    src='/images/logo-black.png'
                    width='200rem'
                    height='50%'
                  />{" "}
                  <p className='important'>
                    SOLUTIONS DIGITALES ET SERVICES WEB
                  </p>
                </a>
              </Link>
            </div>
          </Card>
        </div>
      </Section>
    </>
  );
}
