import React from "react";
import classes from "./searchDropDown.module.css";

const SearchStory: React.FC = () => {
  return (
    <div className={classes.search_story_container}>
      <p>
        <b>История поиска</b>
      </p>
      <div className={classes.searches}>
        <span>Сметана 20%</span>
        <span>Куркума белая 500г</span>
        <span>Белый шоколад Нестле</span>
        <span>Шампиньоны</span>
        <span>Соленые орешки</span>
      </div>
    </div>
  );
};

export default SearchStory;
