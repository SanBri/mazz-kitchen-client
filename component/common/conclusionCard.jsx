import Button from "./button";
import Link from "next/link";

const ConclusionCard = ({ title, text, textButton, finalText, linkButton }) => {
  return (
    <div className='conclusion-card'>
      <div className='conclusion-card__title'>
        <h2>{title}</h2>
      </div>
      <div className='conclusion-card__text'>
        <p>{text}</p>
        <br />
        <p>{finalText}</p>
      </div>
      <div className='conclusion-card__button'>
        <Link href={linkButton}>
          <a>
            <Button children={textButton} />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ConclusionCard;
