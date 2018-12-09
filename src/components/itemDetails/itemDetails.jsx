import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Menu from "../menu/menu";
import "./itemDetailsStyles.css";
import Footer from "../footer/footer";
class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemDetails: {
        id: "55",
        itemCount: 0,
        color: "مشکی",
        selectedImage: -1,
        imageItems: [
          {
            image: require("../../contents/images/2018-New-Fashion-Men-Costume-Homme-Business-Suits-Jacket-Wedding-Suits-For-Men-Two-Buttons-Three.jpg"),
            color: "white"
          },
          {
            image: require("../../contents/images/arms-cheerful-coffee-1331971.jpg"),
            color: "green"
          },
          {
            image: require("../../contents/images/arms-cheerful-coffee-1331971.jpg"),
            color: "red"
          }
        ],
        title: "تی شرت جدید برای فروش",
        description:
          "لباس جدید مردانه برای فروش در دسترس همه عموم برای بازدید در جنس های مختلف شامل قد سایز و رنگ های مختلف",
        price: 12000,
        size: ["xs", "s", "m", "l"]
      }
    };
  }
  addToCart() {
    this.setState({ itemCount: this.state.itemDetails.itemCount++ });
  }
  selectSize(size, index) {
    console.log(size, index);
  }
  render() {
    const { itemDetails } = this.state;
    return (
      <div>
        {/* <div style={{ zIndex: -9 }}>
          <Menu
            login={false}
            contact={true}
            search={false}
            color="black"
            basket={true}
          />
        </div> */}
        <div className="row">
          <div style={{ flex: 1 }}>
            {itemDetails.imageItems.map((image, index) => (
              <img className="w-100 h-50 p-5 ml-5" src={image.image} />
            ))}
          </div>
          <div className=" p-5" style={{ position: "sticky", flex: 1 }}>
            <div
              style={{ fontSize: 45, fontWeight: "bold" }}
              className="justify-content-center pt-5 d-flex w-100"
            >
              {itemDetails.title}
            </div>
            <div
              style={{ fontSize: 30, fontWeight: "bold", direction: "rtl" }}
              className="justify-content-center  d-flex w-100"
            >
              {itemDetails.price}
              {" " + "ریال"}
            </div>
            <div
              style={{ fontSize: 14 }}
              className="justify-content-center   d-flex w-100 text-right pt-4 align-middle"
            >
              {itemDetails.color}
            </div>
            <div
              style={{ fontSize: 14 }}
              className="justify-content-center  d-flex w-100 text-center pt-4 align-middle"
            >
              {itemDetails.description}
            </div>
            <div
              style={{ fontSize: 14 }}
              className="border-bottom border-top mt-3 pb-3 w-100 text-center pt-4 align-middle"
            >
              {itemDetails.size.map((size, index) => (
                <div key={index} className="w-100 col">
                  <div
                    onClick={() => this.selectSize(size, index)}
                    style={{ fontSize: 18, cursor: "pointer" }}
                    className="sizeHover col w-100"
                  >
                    {size}
                  </div>
                </div>
              ))}
            </div>
            <div className="row  justify-content-center p-3">
              <button
                onClick={() => this.addToCart()}
                className="text-white w-50 btn"
                style={{ backgroundColor: "#000000", borderRadius: 0 }}
                type="button"
              >
                ADD
              </button>
            </div>
          </div>
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default withRouter(ItemDetails);
