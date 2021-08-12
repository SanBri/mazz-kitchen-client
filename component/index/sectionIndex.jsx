const SectionIndex = ({ title, children, id = title }) => {
  return (
    <div className='section-index' id={id}>
      <div className='section__title'>
        <h2>{title}</h2>
      </div>
      <div className='section__content'>{children}</div>
    </div>
  );
};

export default SectionIndex;
