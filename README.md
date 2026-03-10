# Category Filter Display - React, Vite, JavaScript, Custom CSS Fundamental Project 5

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.2-blue)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-4.1-646CFF)](https://vitejs.dev/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6%2B-yellow)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

An educational React app that shows a food menu and lets you filter items by category (breakfast, lunch, shakes). It’s built with React 18, Vite, and plain JavaScript (no TypeScript), using only React fundamentals: functional components, `useState`, props, and list rendering. There is no backend or external API; menu data lives in a local JavaScript file. It’s ideal for learning component structure, state, and filtering in React.

- **Live Demo:** [https://filter-menu-display.vercel.app/](https://filter-menu-display.vercel.app/)

<img width="1360" height="870" alt="Screenshot 2026-03-10 at 16 39 14" src="https://github.com/user-attachments/assets/ba3dac45-2839-404a-8519-626eb621a902" />

## Table of Contents

- [Project Summary](#project-summary)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [How to Run & Use](#how-to-run--use)
- [Environment Variables (.env)](#environment-variables-env)
- [Project Walkthrough](#project-walkthrough)
- [Components & Functionality](#components--functionality)
- [Data & “API”](#data--api)
- [Routes & Pages](#routes--pages)
- [Reusing Components in Other Projects](#reusing-components-in-other-projects)
- [Code Examples & Teaching Content](#code-examples--teaching-content)
- [Menu Filtering Logic](#menu-filtering-logic)
- [Learning Outcomes](#learning-outcomes)
- [Keywords](#keywords)
- [Conclusion](#conclusion)
- [License](#license)

---

## Project Summary

**Filter Menu Display** is a single-page React application that displays a list of menu items (food with image, title, price, description) and provides category filter buttons (All, Breakfast, Lunch, Shakes). Clicking a category filters the list in place. The app uses only in-memory data (no server or database), making it easy to study and extend. It demonstrates React fundamentals: state with `useState`, passing props, mapping over arrays, and event handlers.

---

## Features

- **Menu listing:** View all food items with image, title, price, and description.
- **Category filtering:** Filter by “All”, “Breakfast”, “Lunch”, or “Shakes” via buttons.
- **“All” reset:** “All” shows the full menu again.
- **Responsive layout:** Grid layout that adapts to different screen sizes.
- **No external dependencies for logic:** No Redux, React Router, or API — focused on core React.
- **ESLint:** Lint and lint:fix scripts for code quality.

---

## Technology Stack

| Technology            | Purpose                                             |
| --------------------- | --------------------------------------------------- |
| **React 18**          | UI library, functional components, hooks            |
| **Vite 4**            | Build tool and dev server                           |
| **JavaScript (ES6+)** | Application logic, no TypeScript                    |
| **HTML5 & CSS3**      | Markup and styling (custom CSS, CSS variables)      |
| **ESLint**            | Linting (React, React Hooks, React Refresh plugins) |

There is **no backend**, **no database**, and **no REST/GraphQL API**. All data is stored in `src/data.js`.

---

## Project Structure

```bash
05-menu/
├── public/
│   ├── vite.svg                 # Favicon
│   └── images/                  # Menu item images (e.g. item-1.jpeg … item-9.jpeg)
├── src/
│   ├── components/
│   │   ├── Title.jsx            # Section title + underline
│   │   ├── Categories.jsx       # Category filter buttons
│   │   ├── Menu.jsx             # Container that maps items to MenuItem
│   │   └── MenuItem.jsx         # Single menu card (image, title, price, desc)
│   ├── data.js                  # Menu items array (id, title, category, price, img, desc)
│   ├── App.jsx                  # Root: state, filter logic, layout
│   ├── main.jsx                 # Entry: ReactDOM root, StrictMode, App
│   └── index.css                # Global + project-specific styles
├── index.html                   # HTML shell, meta tags, root div, script to main.jsx
├── vite.config.js               # Vite config (React plugin)
├── .eslintrc.cjs                # ESLint config (React, React Hooks, React Refresh)
├── package.json
├── .gitignore
└── README.md
```

---

## Installation & Setup

1. **Clone the repository**

   ```sh
   git clone https://github.com/arnobt78/Menu-Filter--React-Fundamental-Project-5.git
   cd Menu-Filter--React-Fundamental-Project-5
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Run the development server**

   ```sh
   npm run dev
   ```

   Open the URL shown in the terminal (e.g. `http://localhost:5173`).

4. **Build for production**

   ```sh
   npm run build
   ```

   Output goes to the `dist/` folder.

5. **Preview the production build**

   ```sh
   npm run preview
   ```

6. **Lint and auto-fix**

   ```sh
   npm run lint
   npm run lint:fix
   ```

---

## How to Run & Use

- **Development:** Run `npm run dev`, open the app in the browser. You see the full menu and category buttons.
- **Filtering:** Click **All**, **Breakfast**, **Lunch**, or **Shakes** to filter the list. **All** shows every item again.
- **Learning:** Edit `src/data.js` to add/change items, or tweak `App.jsx` filter logic and observe updates with hot reload.

---

## Environment Variables (.env)

This project **does not use any environment variables** by default. All configuration is in code and no `.env` file is required to run or build.

If you **extend** the app (e.g. add a backend API), you can introduce a `.env` file and use Vite’s env handling:

1. **Create a `.env` file in the project root** (it is already in `.gitignore`):

   ```env
   VITE_API_URL=https://your-api.com
   ```

2. **Use in code:** Only variables prefixed with `VITE_` are exposed to the client:

   ```js
   const apiUrl = import.meta.env.VITE_API_URL;
   ```

3. **Optional `.env.example`** for documentation (do not commit secrets):

   ```env
   VITE_API_URL=https://api.example.com
   ```

For this repo as-is, you do **not** need to create `.env` or set any variables.

---

## Project Walkthrough

1. **Entry:** `index.html` loads `src/main.jsx`. `main.jsx` mounts `<App />` inside `<React.StrictMode>` into `#root` and imports `index.css`.
2. **App:** `App.jsx` imports the menu array from `data.js`, derives unique categories with `Set`, and holds two state values: `menuItems` (currently visible items) and `categories` (button labels). `filterItems(category)` updates `menuItems` (either full list or filtered by category).
3. **UI:** `Title` shows the heading; `Categories` renders one button per category and calls `filterItems` on click; `Menu` receives `menuItems` and renders a `MenuItem` for each. `MenuItem` displays image, title, price, and description.

Data flow: **data.js → App (state) → Categories + Menu → MenuItem**. No routes; single page only.

---

## Components & Functionality

### 1. `Title.jsx`

- **Role:** Renders a section title and an underline.
- **Props:** `text` (string).
- **Usage:** `<Title text='our menu' />`.

```jsx
const Title = ({ text }) => {
  return (
    <div className="title">
      <h2>{text}</h2>
      <div className="title-underline"></div>
    </div>
  );
};
export default Title;
```

**Reuse:** Use in any section that needs a heading + underline; style with your own CSS or the same class names.

---

### 2. `Categories.jsx`

- **Role:** Renders a list of category buttons and calls a filter handler on click.
- **Props:** `categories` (array of strings), `filterItems` (function that accepts a category string).
- **Usage:** `<Categories categories={categories} filterItems={filterItems} />`.

```jsx
const Categories = ({ categories, filterItems }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => (
        <button
          type="button"
          className="btn"
          key={category}
          onClick={() => filterItems(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};
export default Categories;
```

**Reuse:** Pass any array of labels and a callback; useful for tabs, filters, or tag lists.

---

### 3. `Menu.jsx`

- **Role:** Renders a grid of menu items by mapping over an array and passing each item to `MenuItem`.
- **Props:** `items` (array of objects with at least `id`, `img`, `title`, `price`, `desc`).
- **Usage:** `<Menu items={menuItems} />`.

```jsx
import MenuItem from "./MenuItem";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((menuItem) => (
        <MenuItem key={menuItem.id} {...menuItem} />
      ))}
    </div>
  );
};
export default Menu;
```

**Reuse:** Use for any list of “cards”; ensure each object has `id` and the props expected by `MenuItem` (or adapt `MenuItem`).

---

### 4. `MenuItem.jsx`

- **Role:** Renders one menu card: image, title, price, description.
- **Props:** `img`, `title`, `price`, `desc` (and typically `id` for the parent’s `key`).
- **Usage:** Used by `Menu`; can be used standalone with `<MenuItem img="..." title="..." price={9.99} desc="..." />`.

```jsx
const MenuItem = ({ img, title, price, desc }) => {
  return (
    <article className="menu-item">
      <img src={img} alt={title} className="img" />
      <div className="item-info">
        <header>
          <h5>{title}</h5>
          <span className="item-price">${price}</span>
        </header>
        <p className="item-text">{desc}</p>
      </div>
    </article>
  );
};
export default MenuItem;
```

**Reuse:** Use for product/menu cards in other projects; adjust class names and structure to match your design.

---

## Data & “API”

There is **no backend or API**. Menu data is a JavaScript array in `src/data.js`. Each item has:

- `id` — number (unique)
- `title` — string
- `category` — string (`'breakfast'`, `'lunch'`, `'shakes'`)
- `price` — number
- `img` — string path (e.g. `/images/item-1.jpeg`, served from `public/`)
- `desc` — string (description)

Example:

```js
{
  id: 1,
  title: 'buttermilk pancakes',
  category: 'breakfast',
  price: 15.99,
  img: '/images/item-1.jpeg',
  desc: `I'm baby woke mlkshk wolf bitters...`,
}
```

To “add an API” later, you could replace the `import items from './data'` in `App.jsx` with a `useEffect` that fetches from a URL (e.g. from `import.meta.env.VITE_API_URL`) and then call `setMenuItems` with the response.

---

## Routes & Pages

The app is **single-page only**. There are no routes, no React Router, and no separate “pages.” One view shows the title, category buttons, and the (filtered) menu list.

---

## Reusing Components in Other Projects

- **Title:** Copy `Title.jsx` and the `.title` / `.title-underline` styles from `index.css`; use `<Title text="Your Section" />`.
- **Categories:** Copy `Categories.jsx`; pass `categories={['all', 'cat1', 'cat2']}` and `filterItems={(cat) => yourFilterLogic(cat)}`; style `.btn-container` and `.btn` to match your UI.
- **Menu + MenuItem:** Copy both; ensure your data has `id`, `img`, `title`, `price`, `desc` (or change prop names in `MenuItem`). Reuse the `.section-center`, `.menu-item`, `.item-info` styles or replace with your own.
- **Data shape:** Keep the same object shape (`id`, `title`, `category`, `price`, `img`, `desc`) or update `MenuItem` and the filter logic in `App.jsx` to match your fields.

---

## Code Examples & Teaching Content

**Deriving unique categories from the menu (e.g. in App):**

```js
import items from "./data";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
// Result: ['all', 'breakfast', 'lunch', 'shakes']
```

**Filter handler (in App):**

```js
const [menuItems, setMenuItems] = useState(items);

const filterItems = (category) => {
  if (category === "all") {
    setMenuItems(items);
    return;
  }
  setMenuItems(items.filter((item) => item.category === category));
};
```

**Rendering categories as buttons (concept used in Categories.jsx):**

```jsx
{
  categories.map((category) => (
    <button key={category} onClick={() => filterItems(category)}>
      {category}
    </button>
  ));
}
```

**Rendering a list with a stable key (concept used in Menu.jsx):**

```jsx
{
  items.map((menuItem) => <MenuItem key={menuItem.id} {...menuItem} />);
}
```

---

## Menu Filtering Logic

1. **Unique categories:** `['all', ...new Set(items.map((item) => item.category))]` so we have one button per category plus “all”.
2. **State:** `menuItems` is the array currently shown; `categories` is the list of button labels (fixed after first render).
3. **Filter:** On button click, `filterItems(category)` runs. If `category === 'all'`, set `menuItems` back to the full `items`; otherwise set `menuItems` to `items.filter((item) => item.category === category)`.
4. **UI:** `Menu` receives `menuItems` and re-renders the list; no page reload.

---

## Learning Outcomes

- Splitting a UI into reusable components (Title, Categories, Menu, MenuItem).
- Using `useState` for the displayed list and a static list of categories.
- Deriving values (e.g. unique categories) with `map` and `Set`.
- Passing props and callbacks (e.g. `filterItems`) for parent–child communication.
- Rendering lists with `map` and a stable `key` (e.g. `id`).
- Handling click events and updating state to drive the UI.
- Organizing data in a single module (`data.js`) and importing it in the root component.

---

## Keywords

React, React 18, useState, functional components, props, Vite, JavaScript, ES6+, filter menu, food menu, category filter, breakfast, lunch, shakes, array map, JavaScript Set, filtering, dynamic rendering, list rendering, event handling, component composition, no backend, educational project, open source.

---

## Conclusion

Filter Menu Display is a small, focused React app for learning core concepts: state, props, list rendering, and filtering. The codebase is minimal and uses no router or global state, so it’s easy to read and adapt. You can use it for self-study, workshops, or as a base for a larger menu or product listing (e.g. by plugging in an API and optional `.env` as described above).

---

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT). Feel free to use, modify, and distribute the code as per the terms of the license.

## Happy Coding! 🎉

This is an **open-source project** — feel free to use, enhance, and extend this project further!

If you have any questions or want to share your work, reach out via GitHub or my portfolio at [https://www.arnobmahmud.com](https://www.arnobmahmud.com).

**Enjoy building and learning!** 🚀

Thank you! 😊
