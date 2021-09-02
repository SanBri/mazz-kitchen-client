import Head from "next/head";

import Section from "../component/common/section";
import Contact from "../component/tarifs/contact";
import Offers from "../component/tarifs/offers";

const Tarifs = () => {
  return (
    <>
      <Head>
        <title>Mazz Kitchen | Offres &amp; Tarifs</title>
      </Head>
      <Section id='offersSection'>
        <Offers />
      </Section>
      <Section id='contactSection'>
        <Contact />
      </Section>
    </>
  );
};

export default Tarifs;
