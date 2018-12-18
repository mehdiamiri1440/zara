import React, { Component } from "react";
import Menu from "../menu/menu";
class ShoppingBasket extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <div style={{ zIndex: -9 }}>
          <Menu
            menuItems={false}
            login={false}
            contact={true}
            search={false}
            color="black"
            basket={true}
          />
        </div>
        سبد خرید
      </div>
    );
  }
}

export default ShoppingBasket;
