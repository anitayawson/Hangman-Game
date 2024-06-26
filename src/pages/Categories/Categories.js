import "./Categories.scss";
import BackIcon from "../../assets/images/icon-back.svg";
import useNavigation from "../../hooks/useNavigation";
import { useCategories } from "../../contexts/CategoriesContext";

export default function Categories() {
  const { navigateBack, navigate } = useNavigation();
  const { categories } = useCategories();

  const categoryNames = [];
  for (const category in categories) {
    categoryNames.push(category);
  }

  const handleCategoryClick = (categoryName) => {
    const words = categories[categoryName];
    const randomWord = words[Math.floor(Math.random() * words.length)].name;
    navigate("/in-game", {
      state: { word: randomWord, category: categoryName },
    });
  };

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
          <li
            key={index}
            className="categories__list-item"
            onClick={() => handleCategoryClick(categoryName)}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}
