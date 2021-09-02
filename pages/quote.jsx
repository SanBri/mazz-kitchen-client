import Head from "next/head";

import Section from "../component/common/section";
import QuoteIntroduction from "../component/quote/quoteIntroduction";

const Quote = () => {
  return (
    <>
      <Head>
        <title>Mazz Kitchen | Votre Devis Personnalisé</title>
      </Head>
      <Section id='quoteSection'>
        <QuoteIntroduction />
      </Section>
    </>
  );
};

export default Quote;
