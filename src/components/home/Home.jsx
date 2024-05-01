import "./_home.scss";

const Home = () => {
  return (
    <section className="container">
      <div className="home-img" />
      <article className="article">
        <h1 className="article__h1">The Bright Future of Web 3.0?</h1>
        <div className="article-content">
          <p className="article-content__paragraph">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <a href="#" className="article-content__read-more">
            Read More
          </a>
        </div>
      </article>
    </section>
  );
};

export default Home;
