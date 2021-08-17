import Section from "../component/common/section";
import SectionIndex from "../component/index/sectionIndex";
import Hero from "../component/index/hero";
import Introduction from "../component/index/introduction";
import Mission from "../component/index/mission";
import Services from "../component/index/services";
import Strategy from "../component/index/strategy";
import Conclusion from "../component/index/conclusion";

const Index = () => {
  return (
    <>
      <Section id='heroSection'>
        <Hero />
      </Section>
      <Section padding='4rem 0 0 0' id='introductionSection'>
        <SectionIndex
          id='introductionIndexSection'
          title='ET SI ON CHANGEAIT (VRAIMENT) LES CHOSES ?'
        >
          <Introduction />
        </SectionIndex>
      </Section>
      <Section id='introductionTransition'>
        <p>
          Nous vous proposons la mise en place d’une stratégie de communication
          digitale complète, interactive et innovante, mais vous pouvez
          également bénéficier d’un service en particulier (voir ci-dessous)
          selon vos besoins, nous vous mettrons en contact avec les membres de
          l’équipe concernés par votre demande. <br />
          On vous attend !
        </p>
      </Section>
      <Section id='missionSection' padding='1rem 0 0 0'>
        <SectionIndex title='NOTRE MISSION'>
          <Mission />
        </SectionIndex>
      </Section>
      <Section
        id='serviceSection'
        color='color-primary-white'
        padding='1rem 0 0 0'
      >
        <SectionIndex title='NOS SERVICES'>
          <Services />
        </SectionIndex>
      </Section>
      <Section id='strategySection' padding='1rem 0 0 0'>
        <p></p>
        <SectionIndex title='VOTRE STRATÉGIE DE COMMUNICATION DIGITALE'>
          <Strategy />
        </SectionIndex>
      </Section>
      <Section id='conclusionSection' color='background-prim'>
        <Conclusion />
      </Section>
    </>
  );
};

export default Index;
