import Section from "../component/common/section";
import Icon from "../component/common/icon";

const about = () => {
  return (
    <Section id='aboutSection' minHeight='40rem'>
      <div className='about'>
        <div className='about__logo'>
          <Icon src='/images/logo-black.png' width='200rem' height='50%' />{" "}
          <p className='important'>
            SOLUTIONS DIGITALES <br />
            ET SERVICES WEB
          </p>
        </div>
        <div className='about__text'>
          <p>Informations légales :</p>
          <p>
            Statut du propriétaire : Studio Indépendant
            <br />
            Préfixe : Micro-entrepreneur
          </p>
          <p>
            Nom des Micro-entrepreneurs : Thomas Millet-Ursin / Sandro Brignoli
          </p>
          <p>
            Activité : Design Web / Rédaction Web / Développement Web <br />
            Nom de la Société : Mazz Kitchen <br />
            Adresse : 11B Chemin des Têts, 74960 Annecy <br />
            Tél : +33 623 567 148
          </p>
          <p>
            Web Designer - SIRET - Millet-Ursin Thomas : 850 123 522 00011{" "}
            <br />
            Web Developper - SIRET - Brignoli Sandro : 893 134 783 00016 <br />
            Adresse de courrier électronique :{" "}
            <span className='link'>mazzkitchen@mailo.com</span>
            <br />
          </p>
          <p>
            Le Responsable de la publication est : Thomas Millet-Ursin
            <br /> Contactez le responsable de la publication :{" "}
            <span className='link'>thomasmilletursin@mailo.com</span> <br />
            Le responsable de la publication est une personne physique
          </p>
          <p>
            Le Webmaster est : Sandro Brignoli
            <br /> Contactez le Webmaster :{" "}
            <span className='link'>sandrobrignoli@mailo.com</span>
          </p>
          <p>La Charte Collectif Les Tempérants ici.</p>
        </div>
      </div>
    </Section>
  );
};

export default about;
