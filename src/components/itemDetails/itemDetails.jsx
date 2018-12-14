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
  renderfullScreenImages(image, index) {
    console.log("it is the index", index, image);
    return (
      <div className="modal fade" id={`myModal-${index}`}>
        <div
          style={{ maxWidth: "100%", maxHeight: "100%" }}
          className="modal-dialog"
        >
          <div className="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal">
                &times;
              </button>
            </div>
            <div className="modal-body">
              <img
                src={this.state.itemDetails.imageItems[index].image}
                style={{ width: "100%", height: "100%" }}
                alt=""
              />
            </div>
            <div className="modal-footer">
              <button type="button" class="btn btn-danger" data-dismiss="modal">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  render() {
    const { itemDetails } = this.state;
    return (
      <div>
        <div style={{ zIndex: -9 }}>
          <Menu
            login={false}
            contact={true}
            search={false}
            color="black"
            basket={true}
          />
        </div>
        <div
          style={{
            paddingTop: "5%"
          }}
        >
          <div className=" w-50" style={{ left: 0 }}>
            {itemDetails.imageItems.map((image, index) => (
              <div key={index}>
                <img
                  key={index}
                  data-toggle="modal"
                  data-target={`#myModal-${index}`}
                  className="w-100 h-50 p-5 ml-5"
                  src={image.image}
                />
                {this.renderfullScreenImages(image, index)}
              </div>
            ))}
          </div>
          <div
            className="  position-fixed w-50 "
            style={{ right: 0, top: "19%" }}
          >
            <div
              style={{ fontSize: 24, fontWeight: "bold" }}
              className="justify-content-center text-center pt-5 d-flex w-100"
            >
              {itemDetails.title}
            </div>
            <div
              style={{ fontSize: 14, fontWeight: "bold", direction: "rtl" }}
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
