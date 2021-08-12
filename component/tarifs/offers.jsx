import Icon from "../common/icon";

const Offers = () => {
  return (
    <div className='offers'>
      <div className='offers__title'>
        <h1>NOS OFFRES &amp; TARIFS</h1>
      </div>
      <div className='offers__content'>
        <div className='offers__content-left'>
          <div className='offers__content-left__image'>
            <Icon src='/images/offers-01.svg' width='auto' height={300} />
          </div>
          <p>
            Nous vous proposons{" "}
            <span className='important'>
              une stratégie de communication clé en main.
            </span>
          </p>
          <p>
            Afin de permettre à chacun d’avoir une transparence quant aux tarifs
            réalisés par le Studio, nous avons choisi de déterminer un{" "}
            <span className='important'>prix de base de 40€/heure</span>*,
            chaque projet étant évalué selon la{" "}
            <span className='important'>contrainte horaire</span> et{" "}
            <span className='important'>l’exigence de réalisation</span> de
            celui-ci.
          </p>
          <p>
            Nous partons du principe que{" "}
            <span className='important'>chaque projet est unique</span> et
            nécessite un plan de travail et une mise en place particulière.
            L’idée est d’offrir les{" "}
            <span className='important'>conditions optimales</span> à votre
            projet et à notre activité.​
          </p>
          <p>
            Nous choisirons ensemble{" "}
            <span className='important'>
              la meilleure recette pour votre projet
            </span>
            , ce qui nous permettra de mettre en place celui-ci dans des
            conditions optimales et les meilleurs délais.
          </p>
          <p>
            Les prix indiqués dans le devis ne tiennent compte que du{" "}
            <span className='important'>service réalisé par le Studio</span>,
            sachant que les prestations extérieures ne peuvent être facturées
            par le Studio. Cependant,{" "}
            <span className='important'>
              des prestataires vous seront proposés
            </span>{" "}
            avec des tarifs préférentiels sans frais de commission de la part du
            Studio.
          </p>
          <div className='condition-text'>
            <p>
              *la mise en place d’une politique forfaitaire peut être proposée
              pour certains services
            </p>
          </div>
        </div>
        <div className='offers__content-right'>
          <div className='offers__content-right__image'>
            <Icon src='/images/offers-02.svg' width='auto' height={300} />
          </div>
          <p>
            ​Vous êtes un acteur de la{" "}
            <span className='important'>restauration</span> ? Un{" "}
            <span className='important'>commerçant</span> ? Un{" "}
            <span className='important'>artisan</span> ? Un{" "}
            <span className='important'>entrepreneur</span> ? Nous sommes faits
            pour <span className='important'>travailler ensemble</span> !​
          </p>
          <p>
            Quel que soit <span className='important'>votre projet web</span>{" "}
            nous saurons vous accompagner afin de donner{" "}
            <span className='important'>le ton et l’harmonie</span> à votre
            image et développer avec vous{" "}
            <span className='important'>
              une communication interactive et dynamique.
            </span>
          </p>
          <p>
            ​Si vous ne savez pas trop{" "}
            <span className='important'>où aller</span> et{" "}
            <span className='important'>
              comment mettre en place votre communication
            </span>
            , il vous suffit de <span className='link'>cliquer ici</span> ou
            contactez nous directement par mail ou par téléphone !
          </p>
          <p>
            Et si vous voulez en savoir plus sur notre travail, il vous suffit
            de <span className='link'>consulter nos profils</span>.
          </p>
          <p>
            ​Nous vous proposons la mise en place d’une{" "}
            <span className='important'>
              stratégie de communication digitale complète
            </span>
            , interactive et innovante, mais vous pouvez également bénéficier
            d’un{" "}
            <span className='important'>
              service en particulier selon vos besoins
            </span>
            , nous vous mettrons en contact avec les membres de l’équipe
            concernés par votre demande.
          </p>
          <p className='important'>On vous attend !​</p>
        </div>
      </div>
    </div>
  );
};

export default Offers;
