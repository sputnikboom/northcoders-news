import React, { Component } from "react";
import Topics from "./Topics";
import { getAllOfType } from "./api/get";
import "../Menu.css"


class SidebarButton extends Component {
  state = {
    showMenu: false,
    topics: []
  };

  render() {
    return (
      <div className="dropdown">
        <button className="menu-button" onClick={this.showMenu}>Menu</button>

        {this.state.showMenu && (
          <div
            className="menu-content"
            ref={element => {
              this.SidebarButton = element;
            }}
          >
            <Topics topics={this.state.topics} hideMenu={this.hideMenu}/>
          </div>
        )}
      </div>
    );
  }

  showMenu = () => {
    this.setState({
      showMenu: true
    });
    document.addEventListener("click", this.hideMenu);
  };

  hideMenu = event => {
    if (!this.SidebarButton.contains(event.target)) {
      this.setState({
        showMenu: false
      });
      document.removeEventListener("click", this.hideMenu);
    }
  };

  componentDidMount(){
    getAllOfType("topics").then(topics => this.setState({ topics }))
  }

}

export default SidebarButton;
