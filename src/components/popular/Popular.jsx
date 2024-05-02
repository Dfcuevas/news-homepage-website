import "./_popular.scss";

const popular = [
  {
    index: "01",
    title: "Reviving Retro PCs",
    entry: "What happens when old PCs are given modern upgrades",
    img: "/image-retro-pcs.jpg",
  },
  {
    index: "02",
    title: "Top 10 Laptops of 2022",
    entry: "Our best picks for various needs and budgets",
    img: "/image-top-laptops.jpg",
  },
  {
    index: "03",
    title: "The Growth of Gaming",
    entry: "How the pandemic has sparked fresh opportunities",
    img: "/image-gaming-growth.jpg",
  },
];

const Popular = () => {
  return (
    <section className="popular-container">
      {popular.map((item) => (
        <div key={item.index} className="popular">
          <div className="popular__img-container">
            <img src={item.img} alt={item.title} />
          </div>
          <div className="popular__content">
            <h2 className="popular__content-heading2">{item.index}</h2>
            <h4 className="popular__content-heading4">{item.title}</h4>
            <p className="popular__content-paragraph">{item.entry}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Popular;
