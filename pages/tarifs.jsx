import Section from "../component/common/section";
import Contact from "../component/tarifs/contact";
import Offers from "../component/tarifs/offers";

const Tarifs = () => {
  return (
    <>
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
