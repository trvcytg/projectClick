import React from "react";
import NavMessage from "../NavMessage";
import "./style.css";

function Nav(props) {
  return (
    <nav>
      <div className="nav-wrapper">
        <ul id="nav-mobile" className="left">
          <li>
            <a href="/" className="title">
              Playing Favorites
            </a>
          </li>
          <li className="score thirdItem">
            Score: {props.score} | High Score: {props.HighScore}&nbsp;&nbsp;
          </li>
          <li className="score">
            <NavMessage score={props.score} HighScore={props.HighScore} />
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
