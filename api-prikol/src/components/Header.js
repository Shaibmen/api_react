import React from "react";
import Info from "./info";
import Form from "./form";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div className="header-info">
          <Info />
        </div>
        <Form weatherMethod={this.props.weatherMethod} />
      </div>
    );
  }
}

export default Header;
