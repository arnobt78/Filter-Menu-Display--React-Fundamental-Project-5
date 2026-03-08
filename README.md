# Filter Menu Display - React Fundamental Project 5

<img width="1140" alt="Project Screenshot" src="https://github.com/user-attachments/assets/126a96d9-734a-4418-9757-f6eb34d7f879" />

---

## Project Summary

Menu Filter is an educational React project that demonstrates core concepts such as state management, component composition, prop drilling, and array manipulation. The application displays a dynamic menu of food items and allows users to filter these items by category (such as breakfast, lunch, and shakes). This project is ideal for beginners and intermediate learners wishing to solidify their understanding of React fundamentals through hands-on practice.

The project is built using **React.js**, with a focus on simplicity, clean code, and best practices. It provides a real-life scenario for filtering and displaying data, a common requirement in modern web applications.

- **Live-Demo:** [https://menu-filter-arnob.netlify.app/](https://menu-filter-arnob.netlify.app/)

---

## Table of Contents

- [Project Summary](#project-summary)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Installation & Setup](#installation--setup)
- [Usage Guide](#usage-guide)
- [Component Walkthrough](#component-walkthrough)
- [Menu Filtering Logic](#menu-filtering-logic)
- [Learning Outcomes](#learning-outcomes)
- [Code Examples](#code-examples)
- [Keywords](#keywords)
- [Conclusion](#conclusion)

---

## Features

- View a menu of various food items with images, prices, and descriptions.
- Filter menu items by category (e.g., breakfast, lunch, shakes).
- “All” button to reset and view all menu items.
- Responsive, easy-to-understand UI.
- Code structured for learning and extensibility.

---

## Technology Stack

- **React.js** (Functional Components & Hooks)
- **JavaScript** (ES6+)
- **HTML5 & CSS3** (For UI Styling)
- No external state management or router—focus is on React fundamentals.

---

## Project Structure

```
Menu-Filter--React-Fundamental-Project-5/
├── public/
│   └── ... (static assets if any)
├── src/
│   ├── components/
│   │   ├── Title.jsx           # Renders the app title
│   │   ├── Menu.jsx            # Displays filtered menu items
│   │   ├── MenuItem.jsx        # Renders a single menu item
│   │   └── Categories.jsx      # Renders filter buttons by category
│   ├── data.js                 # Menu items data array
│   ├── App.jsx                 # Root component with main state and logic
│   └── main.jsx                # Entry point
├── package.json
└── README.md
```
> **Note:** Actual file names and structure may vary. Components are separated for clarity and reusability.

---

## Installation & Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/arnobt78/Menu-Filter--React-Fundamental-Project-5.git
   cd Menu-Filter--React-Fundamental-Project-5
   ```

2. **Install dependencies:**
   ```sh
   npm install
   ```

3. **Run the development server:**
   ```sh
   npm run dev
   ```

4. **Build for production:**
   ```sh
   npm run build
   ```

5. **Preview the build:**
   ```sh
   npm run preview
   ```

---

## Usage Guide

- Upon starting the app, you will see all menu items displayed.
- At the top, category filter buttons are shown (“All”, “Breakfast”, “Lunch”, “Shakes”, etc.).
- Click a category button to filter and view only the items from that category.
- Click “All” to reset and see the complete menu.

---

## Component Walkthrough

### 1. **Title Component**
   - Displays the main title of your app.
   - Simple function returning a heading element.

### 2. **Data Import**
   - Menu items are imported from `data.js` as an array of objects.
   - Each object typically includes: `title`, `price`, `image`, `description`, and `category`.

### 3. **App.jsx**
   - Holds the main state for menu items and categories using React’s `useState`.
   - Handles logic for filtering and passing data to child components.

### 4. **Menu.jsx**
   - Receives filtered menu items as props.
   - Maps over the array and renders a `MenuItem` for each.

### 5. **MenuItem.jsx**
   - Displays image, title, price, and description for a single menu item.

### 6. **Categories.jsx**
   - Receives a list of unique categories.
   - Renders a button for each category.
   - Calls filter function on button click.

---

## Menu Filtering Logic

1. **Extract Unique Categories:**
   - Use JavaScript’s `Set` object to get unique category names from the data.
   - Add an “all” category to allow viewing all items.

   ```js
   const tempCategories = menu.map((item) => item.category);
   const tempSet = new Set(tempCategories);
   const categories = ["all", ...tempSet];
   ```

2. **State Management:**
   - `menu` state holds current menu items to display.
   - `categories` state holds all unique categories.

3. **Filtering Function:**
   - When a category button is clicked, filter `menu` items by the selected category.
   - If “all” is selected, reset to the full menu.

   ```js
   const filterItems = (category) => {
     if (category === "all") {
       setMenu(menuData);
       return;
     }
     setMenu(menuData.filter(item => item.category === category));
   }
   ```

---

## Learning Outcomes

- How to break down a UI into reusable React components.
- Best practices for state management using hooks.
- Array manipulation and rendering lists in React.
- Using JavaScript’s `Set` for deduplication.
- Handling events and prop drilling in React.

---

## Code Examples

**Example: Using Set to Get Unique Categories**
```js
const tempCategories = menu.map((item) => item.category);
const tempSet = new Set(tempCategories);
const categories = ["all", ...tempSet];
console.log(categories); // ['all', 'breakfast', 'lunch', 'shakes']
```

**Example: Filtering Menu Items**
```js
const filterItems = (category) => {
  if (category === "all") {
    setMenu(menuData);
    return;
  }
  setMenu(menuData.filter(item => item.category === category));
};
```

**Example: Rendering Categories**
```js
return (
  <div>
    {categories.map((category, index) => (
      <button key={index} onClick={() => filterItems(category)}>
        {category}
      </button>
    ))}
  </div>
);
```

---

## Keywords

- React.js
- useState
- Functional Components
- Props
- Array.map
- JavaScript Set
- Filtering
- Dynamic Rendering
- Menu App
- Educational Project

---

## Conclusion

This Menu Filter project is an excellent starting point for learning core React concepts. By building and understanding this application, you will gain confidence in handling state, passing props, rendering dynamic lists, and implementing real-world functionality like filtering. The codebase is clean and easy to read, making it suitable for self-study, tutorials, and as a foundation for more complex projects.

---
