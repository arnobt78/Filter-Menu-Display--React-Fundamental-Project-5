import MenuItem from './MenuItem';

/**
 * Container that renders the list of menu items. Each item is passed to MenuItem via spread.
 * @param {Object} props
 * @param {Array<{id: number, title: string, category: string, price: number, img: string, desc: string}>} props.items - Filtered list of menu items to display
 */
const Menu = ({ items }) => {
  return (
    <div className='section-center'>
      {items.map((menuItem) => {
        return <MenuItem key={menuItem.id} {...menuItem} />;
      })}
    </div>
  );
};

export default Menu;
