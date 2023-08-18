import React, { useState } from 'react';
import items from './data';
import Category from './category';
import Menu from './menu';

const allCategories = ['all', ...new Set(items.map((item) => item.category))];

function App() {
  const [menu, setMenu] = useState(items);
  const [category, setCategory] = useState(allCategories);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenu(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenu(newItems);
  };
  return (
    <main>
      <section className="menu-section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
        <Category filterItems={filterItems} categories={category} />
        <Menu items={menu} />
      </section>
    </main>
  );
}

export default App;
