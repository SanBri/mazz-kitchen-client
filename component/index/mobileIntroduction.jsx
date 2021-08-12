import Button from "../common/button";

const MobileIntroduction = () => {
  return (
    <div className='mobile-introduction only-mobile'>
      <div className='mobile-introduction__catchphrase'>
        <p>la recette idéale !</p>
      </div>
      <div className='mobile-introduction__title'>
        <h2>ET SI ON CHANGEAIT (VRAIMENT) LES CHOSES ?</h2>
      </div>
      <div className='mobile-introduction__text'>
        <p>
          Bienvenu(e)s chez Mazz Kitchen, studio de communication digitale
          spécialisée dans les métiers de bouche et les commerces de proximité.
          <br />
          Découvrez toutes nos solutions pour une communication digitale clé en
          main ainsi que notre équipe à votre écoute du lundi au vendredi de 9h
          à 18h.
          <br /> Vous souhaitez nous contacter rapidement et simplement,
          n’hésitez pas à prendre rendez-vous avec notre équipe rapidement en
          consultant leurs plannings.
        </p>
      </div>
      <div className='mobile-introduction__buttons'>
        <a
          href='https://mazz-kitchen-studio.reservio.com/'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Button>Prendre Rendez-Vous</Button>
        </a>
      </div>
    </div>
  );
};

export default MobileIntroduction;
