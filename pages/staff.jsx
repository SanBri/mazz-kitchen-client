import Head from "next/head";

import Section from "../component/common/section";
import Why from "../component/staff/why";
import Team from "../component/staff/team";

const Staff = () => {
  return (
    <>
      <Head>
        <title>Mazz Kitchen | Pourquoi Mazz Kitchen ?</title>
      </Head>
      <Section id='whySection'>
        <Why />
      </Section>
      <Section id='teamSection'>
        <Team />
      </Section>
    </>
  );
};

export default Staff;
