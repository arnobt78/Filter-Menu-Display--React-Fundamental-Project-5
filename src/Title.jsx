/**
 * Renders a section heading with an optional underline. Reusable for any section title.
 * @param {Object} props
 * @param {string} props.text - The title text (e.g. "our menu")
 */
const Title = ({ text }) => {
  return (
    <div className='title'>
      <h2>{text}</h2>
      <div className='title-underline'></div>
    </div>
  );
};
export default Title;
