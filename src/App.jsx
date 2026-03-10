import { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import Title from "./Title";
import items from "./data";

// Derive unique category labels from data: "all" + each distinct category (e.g. breakfast, lunch, shakes)
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

/**
 * Root component. Holds menu state and filter logic; passes data and handlers to child components.
 */
function App() {
  // menuItems: array currently shown (full list or filtered by category)
  const [menuItems, setMenuItems] = useState(items);
  // categories: list of button labels; static, so setter is unused
  const [categories] = useState(allCategories);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const educationTexts = {
    all: "Learning focus: Explore all menu categories and compare choices.",
    breakfast:
      "Learning focus: Breakfast can include carbs, protein, and healthy fats.",
    lunch:
      "Learning focus: A balanced lunch helps maintain energy through the day.",
    shakes:
      "Learning focus: Shakes are great for quick calories, but watch sugar intake.",
  };

  /** Updates displayed items: show all when category is "all", otherwise filter by selected category. */
  const filterItems = (category) => {
    setSelectedCategory(category);
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories
          categories={categories}
          filterItems={filterItems}
          selectedCategory={selectedCategory}
        />
        <p className="education-text">
          {educationTexts[selectedCategory] || educationTexts.all}
        </p>
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
