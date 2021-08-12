import Icon from "../common/icon";

const Why = () => {
  return (
    <div className='why-container'>
      <div className='why'>
        <div className='why__title'>
          <h1>POURQUOI MAZZ KITCHEN ?</h1>
        </div>
        <div className='why__content'>
          <div className='why__content-left'>
            <div className='why__content-left__image only-mobile'>
              <Icon src='/images/staff/why-01.svg' width='auto' height={300} />
            </div>
            <p>
              Rien de tel qu’une belle bio pour faire connaissance, découvrez
              <span className='important'>
                {" "}
                notre parcours, nos objectifs, nos compétences
              </span>{" "}
              au niveau du{" "}
              <span className='important'>design et développement web</span>,
              ainsi que des informations essentielles sur nos tarifs.
            </p>
            <p>
              Après plusieurs années dans{" "}
              <span className='important'> la restauration</span> nous avons
              décidés de créer cette{" "}
              <span className='important'>
                {" "}
                agence de communication spécialisée dans les métiers de bouche
              </span>{" "}
              par passion pour le métier de restaurateur/commerçant et par
              volonté de donner{" "}
              <span className='important'>
                {" "}
                un nouveau souffle à ce marché.
              </span>
            </p>
            <p>
              Ensemble nous construirons pas à pas votre{" "}
              <span className='important'> identité digitale</span> et analysons
              les <span className='important'>besoins</span> et les{" "}
              <span className='important'> possibilités</span> qui s’offrent à
              vous afin de <span className='important'> dynamiser</span> votre
              image et donner la <span className='important'> visibilité</span>{" "}
              nécessaire à votre projet !
            </p>
          </div>
          <div className='why__content-right'>
            <div className='why__content-right__image only-mobile'>
              <Icon src='/images/staff/why-02.svg' width='auto' height={300} />
            </div>
            <p>
              Mazz Kitchen, c’est{" "}
              <span className='important'>la recette idéale</span> adaptée à la
              communication digitale des métiers de bouches, des commerces de
              proximité, des entrepreneurs et des artisans.
            </p>
            <p>
              Réaliser une identité visuelle, c’est comme suivre{" "}
              <span className='important'>une bonne recette de cuisine</span>,
              si les proportions et les indications sont respectées alors vous
              aurez un bon plat. Si votre créativité et votre curiosité s’en
              mêlent, vous aurez{" "}
              <span className='important'>un plat exceptionnel</span>. Ensemble,
              <span className='important'>
                trouvons la recette idéale à votre projet.
              </span>
            </p>
            <p>
              Au menu :{" "}
              <span className='important'>
                une stratégie de communication digitale clé en main
              </span>{" "}
              afin de développer votre image sur le web et vous ouvrir de
              nouvelles possibilités. Notre équipe est là pour vous faciliter la
              tâche et vous accompagner afin de mettre en place votre projet !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Why;
