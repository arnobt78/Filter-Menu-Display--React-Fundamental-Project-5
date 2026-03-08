import { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import Title from './Title';
import items from './data';

// Derive unique category labels from data: "all" + each distinct category (e.g. breakfast, lunch, shakes)
const allCategories = ['all', ...new Set(items.map((item) => item.category))];

/**
 * Root component. Holds menu state and filter logic; passes data and handlers to child components.
 */
function App() {
  // menuItems: array currently shown (full list or filtered by category)
  const [menuItems, setMenuItems] = useState(items);
  // categories: list of button labels; static, so setter is unused
  const [categories] = useState(allCategories);

  /** Updates displayed items: show all when category is "all", otherwise filter by selected category. */
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className='menu'>
        <Title text='our menu' />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}

export default App;
