import "./_new.scss";

const news = [
  {
    title: "Hydrogen VS Electric Cars",
    entry: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    entry:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    entry:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means",
  },
];

const New = () => {
  return (
    <section className="news">
      <h2 className="news-title">New</h2>
      {news.map((n, i) => (
        <article key={i} className="news__article">
          <h3 className="news__article-heading">{n.title}</h3>
          <p className="news__article-paragraph">{n.entry}</p>
        </article>
      ))}
    </section>
  );
};

export default New;
