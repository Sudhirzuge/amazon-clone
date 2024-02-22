import React from 'react'
import "./Header.css";
import { Link } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import { useStateValue } from './StatePovider';

function Header() {
const [{ basket }] = useStateValue();

console.log(basket);
  return (
    <nav className="header">

      {/* logo on left side of nav bar */}
      <Link to="/login" >
        <img className="header__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="image not found" />
      </Link>

      {/* Searchbox */}
      <div className="header__search">
        <input className="header__searchInput" type="text" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3 links */}
      <div className="header__nav">

        {/* 1st links */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello</span>
            <span className="header__optionLineTwo" >Sign in</span>
          </div>
        </Link>

        {/* 2nd links */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne" >Returns</span>
            <span className="header__optionLineTwo" >& Orders</span>
          </div>
        </Link>

        {/* 3rd links */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne" >Your</span>
            <span className="header__optionLineTwo" >prime</span>
          </div>
        </Link>

        {/* 4th links */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            {/* shopping basket icon */}
            <ShoppingBasketIcon />
            {/* number of tems in the basket */}
            <span className="header__optionLineTwo header__basketCount" >
              {basket?.length}
            </span>
          </div>
        </Link>

      </div>

      {/* basket icon with number */}
    </nav>
  );
}

export default Header;