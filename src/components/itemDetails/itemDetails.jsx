import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Menu from "../menu/menu";
import "./itemDetailsStyles.css";
import Footer from "../footer/footer";
class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      similarItems: [
        {
          image: require("../../contents/images/arms-cheerful-coffee-1331971.jpg"),
          title: "تی شزت سال جدید",
          price: "2000",
          sizes: ["sx", "s", "md"]
        },
        {
          image: require("../../contents/images/arms-cheerful-coffee-1331971.jpg"),
          title: "نو نیست",
          price: "56867",
          sizes: ["sx", "s", "lg"]
        },
        {
          image: require("../../contents/images/arms-cheerful-coffee-1331971.jpg"),
          title: "عجب تی شزتی",
          price: "1000",
          sizes: ["d", "s", "md"]
        },
        {
          image: require("../../contents/images/arms-cheerful-coffee-1331971.jpg"),
          title: "بیا که ارزانیست",
          price: "43222",
          sizes: ["md", "s", "ss"]
        }
      ],
      matchWith: [
        {
          image: require("../../contents/images/arms-cheerful-coffee-1331971.jpg"),
          title: "تی شزت سال جدید",
          price: "2000",
          sizes: ["sx", "s", "md"]
        },
        {
          image: require("../../contents/images/arms-cheerful-coffee-1331971.jpg"),
          title: "نو نیست",
          price: "56867",
          sizes: ["sx", "s", "lg"]
        },
        {
          image: require("../../contents/images/arms-cheerful-coffee-1331971.jpg"),
          title: "عجب تی شزتی",
          price: "1000",
          sizes: ["d", "s", "md"]
        },
        {
          image: require("../../contents/images/arms-cheerful-coffee-1331971.jpg"),
          title: "بیا که ارزانیست",
          price: "43222",
          sizes: ["md", "s", "ss"]
        }
      ],
      scrollY: 0,
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
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  handleScroll = () => {
    var lastScrollY = window.scrollY;
    this.setState({ scrollY: lastScrollY });
  };
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
            <div className="modal-header">
              <button type="button" className="close" data-dismiss="modal">
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
              <button
                type="button"
                className="btn btn-danger"
                data-dismiss="modal"
              >
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
        <div style={{ paddingTop: "5%" }}>
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
            className={
              this.state.scrollY <
              this.state.itemDetails.imageItems.length * 400
                ? "position-fixed w-50"
                : null
            }
            style={
              this.state.scrollY <
              this.state.itemDetails.imageItems.length * 400
                ? { right: 0, top: "19%" }
                : { display: "none" }
            }
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
                اضافه کن
              </button>
            </div>
          </div>
        </div>
        {/* WEAR WITH */}
        <div>
          <span
            style={{ fontSize: 26 }}
            className="w-100 text-right row justify-content-end"
          >
            :پوشیده شود با
          </span>
          <div className="row justify-content-between p-5">
            {this.state.matchWith.map((match, index) => (
              <div key={index} style={{ width: "23%", height: "80%" }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={match.image}
                  alt=""
                />
                <span className="w-100 row justify-content-end">
                  {match.title}
                </span>
                <span className="w-100 row justify-content-end">
                  تومان {match.price}
                </span>
                <select className="w-100 row justify-content-end">
                  {match.sizes.map((size, indx) => (
                    <option key={indx} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
          {/* <img
              style={{ width: "23%", height: "80%" }}
              src={require("../../contents/images/arms-cheerful-coffee-1331971.jpg")}
              alt=""
            /> */}
        </div>
        <div>
          <span
            style={{ fontSize: 26 }}
            className="w-100 text-right row justify-content-end"
          >
            : موارد مشابه
          </span>
          <div className="row justify-content-between p-5">
            {this.state.similarItems.map((similar, index) => (
              <div key={index} style={{ width: "23%", height: "80%" }}>
                <img
                  style={{ width: "100%", height: "100%" }}
                  src={similar.image}
                  alt=""
                />
                <span className="w-100 row justify-content-end">
                  {similar.title}
                </span>
                <span className="w-100 row justify-content-end">
                  تومان {similar.price}
                </span>
                <select className="w-100 row justify-content-end">
                  {similar.sizes.map((size, indx) => (
                    <option key={indx} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
            ))}
          </div>
          {/* <img
              style={{ width: "23%", height: "80%" }}
              src={require("../../contents/images/arms-cheerful-coffee-1331971.jpg")}
              alt=""
            /> */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(ItemDetails);
