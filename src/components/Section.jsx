export const Section = (props) => {
  const { h2, paragraph, isFeatured, articles } = props;
  return (
    <section
      className={isFeatured && "featured-posts"}
      id={isFeatured ? "featured-posts" : "about-us"}
    >
      <h2> {h2} </h2>
      {!isFeatured ? (
        <p>{paragraph}</p>
      ) : (
        articles?.map((e, i) => (
          <article key={i}>
            <h1> {e} </h1>
          </article>
        ))
      )}
    </section>
  );
};
