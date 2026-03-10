/**
 * Renders filter buttons (e.g. All, Breakfast, Lunch, Shakes). Each click calls filterItems with that category.
 * @param {Object} props
 * @param {string[]} props.categories - Array of category strings to show as buttons
 * @param {(category: string) => void} props.filterItems - Callback when a category button is clicked
 * @param {string} props.selectedCategory - Currently selected category label
 */
const Categories = ({ categories, filterItems, selectedCategory }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            type="button"
            className={`btn ${selectedCategory === category ? "btn-active" : ""}`}
            key={category}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
