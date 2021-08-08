import Section from "../component/common/section";
import Why from "../component/staff/why";
import Team from "../component/staff/team";

const Staff = () => {
  return (
    <>
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
