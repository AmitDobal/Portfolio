import "./portfolioList.scss";

function PortfolioList({ active, setSelected, title, id }) {
  return (
    <li
      className={active ? "portfolioList active" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}

export default PortfolioList;
