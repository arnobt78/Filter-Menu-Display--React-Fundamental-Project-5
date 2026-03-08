/**
 * Renders filter buttons (e.g. All, Breakfast, Lunch, Shakes). Each click calls filterItems with that category.
 * @param {Object} props
 * @param {string[]} props.categories - Array of category strings to show as buttons
 * @param {(category: string) => void} props.filterItems - Callback when a category button is clicked
 */
const Categories = ({ categories, filterItems }) => {
  return (
    <div className='btn-container'>
      {categories.map((category) => {
        return (
          <button
            type='button'
            className='btn'
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
