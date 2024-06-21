import "./Categories.scss";
import BackIcon from "../../assets/images/icon-back.svg";
import useNavigation from "../../hooks/useNavigation";
import categoriesData from "../../data/data.json";

export default function Categories() {
  const { navigateBack } = useNavigation();

  const categories = categoriesData.categories;

  const categoryNames = [];
  for (const category in categories) {
    categoryNames.push(category);
  }

  return (
    <div className="categories">
      <nav className="categories__nav">
        <button onClick={navigateBack} className="back-btn">
          <img className="back-btn__icon" src={BackIcon} alt="Back Icon" />
        </button>
        <div className="categories__title"></div>
      </nav>
      <ul className="categories__list">
        {categoryNames.map((categoryName, index) => (
          <li key={index} className="categories__list-item">
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}
