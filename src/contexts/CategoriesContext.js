import { createContext, useContext, useState } from "react";
import categoriesData from "../data/data.json";

const CategoriesContext = createContext();

export const useCategories = () => useContext(CategoriesContext);

export const CategoriesProvider = ({ children }) => {
  const [categories, setCategories] = useState(categoriesData.categories);

  const updateCategory = (categoryName, words) => {
    setCategories({
      ...categories,
      [categoryName]: words,
    });
  };

  const getRandomWord = (categoryName) => {
    const words = categories[categoryName];
    const randomWord = words[Math.floor(Math.random() * words.length)].name;
    return randomWord;
  };

  return (
    <CategoriesContext.Provider
      value={{ categories, updateCategory, getRandomWord }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
