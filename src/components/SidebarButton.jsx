import React, { Component } from "react";

class SidebarButton extends Component {
  state = {
    showMenu: false
  };

  render() {
    return (
      <div>
        <button onClick={this.showMenu}>Menu</button>

        {this.state.showMenu && (
          <div
            className="menu"
            ref={element => {
              this.SidebarButton = element;
            }}
          >
            <button>hello</button>
            <button>another hello</button>
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
}

export default SidebarButton;
