import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './LeftNav.css';
import LeftNavCard from "../LeftNavCard/LeftNavCard";


const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://the-news-dragon-server-emon83.vercel.app/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div>
      <h4 className="nav__title">All Category</h4>
      <h4 className="sub__title">National News</h4>
      <div className="ps-4">
        {categories.map((category) => (
          <p key={category.id} className="categories__list">
            <Link to={`/category/${category.id}`} className="text-decoration-none">{category.name}</Link>
          </p>
        ))}
      </div>
      <div>
        <LeftNavCard></LeftNavCard>
      </div>
    </div>
  );
};

export default LeftNav;