import Button from "./button";
import Link from "next/link";

const ConclusionCard = ({
  title,
  text,
  textButton,
  finalText,
  linkButton,
  externalLink,
}) => {
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
        {linkButton && (
          <Link href={linkButton}>
            <a>
              <Button children={textButton} />
            </a>
          </Link>
        )}
        {externalLink && (
          <a href={externalLink} target='_blank' rel='noopener noreferrer'>
            <Button children={textButton} />
          </a>
        )}
      </div>
    </div>
  );
};

export default ConclusionCard;
