/**
 * Single menu card: image, title, price, and description. Used by Menu for each item in the list.
 * @param {Object} props
 * @param {string} props.img - Image URL or path (e.g. /images/item-1.jpeg)
 * @param {string} props.title - Item name
 * @param {number} props.price - Price (displayed with $ prefix)
 * @param {string} props.desc - Short description text
 */
const MenuItem = ({ img, title, price, desc }) => {
  return (
    <article className='menu-item'>
      <img src={img} alt={title} className='img' />
      <div className='item-info'>
        <header>
          <h5>{title}</h5>
          <span className='item-price'>${price}</span>
        </header>
        <p className='item-text'>{desc}</p>
      </div>
    </article>
  );
};
export default MenuItem;
