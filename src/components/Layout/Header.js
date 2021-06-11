import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import ButtonHeaderCart from "../Cart/ButtonHeaderCart";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>FastFoooood</h1>
        <ButtonHeaderCart onClick = {props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food..."/>
      </div>
    </Fragment>
  );
};

export default Header;
