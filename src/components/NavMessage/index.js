import React, { Component } from "react";
import "./style.css";

// NavMessage renders an li tag containing an message for the user

class NavMessage extends Component {
  state = {
    message: "",
    viewable: false
  };

  componentDidUpdate({ score, HighScore }, prevState) {
    const newState = { viewable: true };

    score === 0 && HighScore === 0
      ? (newState.message = "")
      : score === 0 && HighScore > 0
      ? (newState.message = "incorrect")
      : (newState.message = "correct");

    if (score !== this.props.score || this.state.message !== newState.message) {
      this.setState(newState);
    }
  }

  renderMessage = () => {
    switch (this.state.message) {
      case "correct":
        return "Keep it up!";
      case "incorrect":
        return "Game Over!";
      default:
        return "Click to begin!";
    }
  };

  render() {
    return (
      <li
        className={this.state.viewable ? this.state.message : ""}
        onAnimationEnd={() => this.setState({ viewable: false })}
      >
        {this.renderMessage()}
      </li>
    );
  }
}

export default NavMessage;
