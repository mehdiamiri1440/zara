import React, { Component } from "react";
import { Redirect, withRouter, Link } from "react-router-dom";
import Menu from "../menu/menu";
import "./itemDetailsStyles.css";
import Alert from "react-s-alert";
import MyAlert from "../myAlert/myAlert";
import Footer from "../footer/footer";
import { connect } from "react-redux";
class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finalObject: [],
      selectedSize: [],
      sizeFlag: false,
      colorFlag: false,
      count: 1,
      color: "",
      selectedColor: [],
      similarItems: [
        {
          image: require("../../contents/images/arms-cheerful-coffee-1331971.jpg"),
          name: "تی شزت سال جدید",
          price: "2000",
          sizes: ["sx", "s", "md"],
          colors: ["red", "blue", "green"]
        },
        {
          image: require("../../contents/images/arms-cheerful-coffee-1331971.jpg"),
          name: "نو نیست",
          price: "56867",
          sizes: ["sx", "s", "lg"]
        },
        {
          image: require("../../contents/images/arms-cheerful-coffee-1331971.jpg"),
          name: "عجب تی شزتی",
          price: "1000",
          sizes: ["d", "s", "md"]
        },
        {
          image: require("../../contents/images/arms-cheerful-coffee-1331971.jpg"),
          name: "بیا که ارزانیست",
          price: "43222",
          sizes: ["md", "s", "ss"]
        }
      ],
      matchWith: [
        {
          image: require("../../contents/images/arms-cheerful-coffee-1331971.jpg"),
          name: "تی شزت سال جدید",
          price: "2000",
          sizes: ["sx", "s", "md"]
        },
        {
          image: require("../../contents/images/arms-cheerful-coffee-1331971.jpg"),
          name: "نو نیست",
          price: "56867",
          sizes: ["sx", "s", "lg"]
        },
        {
          image: require("../../contents/images/arms-cheerful-coffee-1331971.jpg"),
          name: "عجب تی شزتی",
          price: "1000",
          sizes: ["d", "s", "md"]
        },
        {
          image: require("../../contents/images/arms-cheerful-coffee-1331971.jpg"),
          name: "بیا که ارزانیست",
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
        name: "تی شرت جدید برای فروش",
        description:
          "لباس جدید مردانه برای فروش در دسترس همه عموم برای بازدید در جنس های مختلف شامل قد سایز و رنگ های مختلف",
        price: 12000,
        size: ["xs", "s", "m", "l"],
        colors: ["green", "blue", "orange", "yellow"]
      }
    };
  }
  componentDidMount() {
    this.getProduct();
    if (
      JSON.parse(localStorage.basket) &&
      JSON.parse(localStorage.basket).length
    )
      this.setState({ finalObject: JSON.parse(localStorage.basket) });
    window.addEventListener("scroll", this.handleScroll);
  }
  getProduct() {
    fetch(
      `http://192.168.1.194:3003/product/id/${
        this.props.history.location.state
      }`,
      {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(responseJson => {
        console.log("it is the countires", responseJson);
        responseJson.map(cloth => (cloth.selectedImage = -1));
        this.setState({ products: responseJson });
      })
      .catch(error => {
        console.log("it was false", error);
      });
  }
  handleScroll = () => {
    var lastScrollY = window.scrollY;
    this.setState({ scrollY: lastScrollY });
  };
  addToCart(e, itemDetails) {
    let finalObject = this.state.finalObject;
    this.state.selectedSize.map((size, index) => {
      let selectedItem = {
        image: itemDetails.imageItems[0].image,
        size: size,
        color: this.state.color ? this.state.color : itemDetails.colors[0],
        name: itemDetails.name,
        price: itemDetails.price,
        count: this.state.count,
        _id: itemDetails._id
      };
      finalObject.push(selectedItem);
    });
    if (this.state.selectedSize && this.state.selectedSize.length > 0) {
      this.setState({ sizeFlag: false, selectedSize: [], finalObject }, () => {
        localStorage.basket = JSON.stringify(this.state.finalObject);

        if (
          JSON.parse(localStorage.basket) &&
          JSON.parse(localStorage.basket).length
        )
          this.setState({ finalObject: JSON.parse(localStorage.basket) });
      });
      console.log("my loicalstorage:", localStorage.basket);
    } else {
      Alert.error("لطفا سایز را انتخاب کنید", {
        position: "bottom-right",
        effect: "slide"
      });
    }
    this.props.deleteItemFromBasket();
  }
  addSizeOrReject(size) {
    let selectedSize = this.state.selectedSize;
    if (selectedSize.indexOf(size) == -1) {
      selectedSize.push(size);
      this.setState({ sizeFlag: true, selectedSize });
    } else {
      Alert.error("این سایز انتخاب شده است", {
        position: "bottom-right",
        effect: "slide"
      });
    }
  }
  addColorOrReject(color) {
    let selectedColor = this.state.selectedColor;
    if (selectedColor.indexOf(color) == -1) {
      selectedColor.push(color);
      this.setState({ colorFlag: true, selectedColor });
    } else {
      Alert.error("این رنگ انتخاب شده است", {
        position: "bottom-right",
        effect: "slide"
      });
    }
  }
  selectColorAndCount(itemDetails) {
    if (!this.state.colorFlag)
      return (
        <div>
          <div className="d-flex   form-group">
            <select className="m-2 form-control w-50" name="" id="">
              {itemDetails.colors.map((color, indx) => (
                <option
                  onClick={event =>
                    this.setState({ color: event.target.value })
                  }
                  value={color}
                >
                  {color}
                </option>
              ))}
            </select>
            <div className="input-group w-50 p-2">
              <input
                value={this.state.count}
                onChange={event => this.setState({ count: event.target.value })}
                className="form-control"
                type="text"
              />
              <span className="px-1 m-auto align-middle">: تعداد</span>
            </div>
          </div>
        </div>
        // <div
        //   style={{ fontSize: 14 }}
        //   className="border-bottom border-top mt-3 pb-3 w-100 text-center pt-4 align-middle"
        // >
        //   {itemDetails.colors.map((color, indx) => (
        //     <div key={indx} className="w-100 col">
        //       <div
        //         onClick={() => this.addColorOrReject(color)}
        //         style={{ fontSize: 18, cursor: "pointer" }}
        //         className={`${
        //           this.state.selectedColor.indexOf(color) != -1
        //             ? "text-danger"
        //             : "text-dark"
        //         } colorHover col w-100`}
        //       >
        //         {color}
        //       </div>
        //     </div>
        //   ))}
        // </div>
      );
    return (
      <div className="w-100 pt-3 col">
        <div
          onClick={() =>
            this.setState({
              colorFlag: false
            })
          }
          style={{ fontSize: 18, cursor: "pointer" }}
          className="text-center border-bottom border-secondary border-top colorHover col w-100"
        >
          {this.state.selectedColor[this.state.selectedColor.length - 1]}
          {console.log("selected color", this.state.selectedColor)}
        </div>
      </div>
    );
  }
  selectSize(itemDetails) {
    if (!this.state.sizeFlag)
      return (
        <div
          style={{ fontSize: 14 }}
          className="border-bottom border-top mt-3 pb-3 w-100 text-center pt-4 align-middle"
        >
          {itemDetails.size.map((size, indx) => (
            <div key={indx} className="w-100 col">
              <div
                onClick={() => this.addSizeOrReject(size)}
                style={{ fontSize: 18, cursor: "pointer" }}
                className={`${
                  this.state.selectedSize.indexOf(size) != -1
                    ? "text-danger"
                    : "text-dark"
                } sizeHover col w-100`}
              >
                {size}
              </div>
            </div>
          ))}
        </div>
      );
    return (
      <div className="w-100 pt-3 col">
        <div
          onClick={() => this.setState({ sizeFlag: false })}
          style={{ fontSize: 18, cursor: "pointer" }}
          className="text-center border-bottom border-secondary border-top sizeHover col w-100"
        >
          {this.state.selectedSize[this.state.selectedSize.length - 1]}
        </div>
      </div>
    );
  }
  renderfullScreenImages(image, index) {
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
                بستن
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
  //   alert(){
  // return(<slam onsuccess={} oncancel={}/>)

  //   }
  mySuccess = () => {
    console.log("helloo mehdi amiri");
  };
  myReject = () => {
    console.log("goodbye mehdi amiri");
  };
  render() {
    const { itemDetails } = this.state;
    return (
      <div>
        <Alert stack={{ limit: 3 }} />
        <div style={{ zIndex: -9 }}>
          <Menu
            menuItems={true}
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
              className="justify-content-center text-center  d-flex w-100"
            >
              {itemDetails.name}
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
            {this.selectSize(itemDetails)}
            {this.selectColorAndCount(itemDetails)}
            <div className="row  justify-content-center p-1">
              <button
                onClick={e => this.addToCart(e, itemDetails)}
                className={`${
                  this.state.selectedSize && this.state.selectedSize.length > 0
                    ? "text-dark"
                    : "text-white"
                } w-50 btn border-dark`}
                style={{
                  backgroundColor:
                    this.state.selectedSize &&
                    this.state.selectedSize.length > 0
                      ? "#FFFFFF"
                      : "#000000",
                  borderRadius: 0
                }}
                type="button"
              >
                اضافه کن
              </button>
            </div>
            {this.state.selectedSize.length > 0 ? (
              <div className="row  justify-content-center p-3">
                <Link
                  to="/shoppingbasket"
                  className="text-white w-50 btn"
                  style={{ backgroundColor: "#000000", borderRadius: 0 }}
                  type="button"
                >
                  تسویه خرید
                </Link>
              </div>
            ) : null}
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
                  {match.name}
                </span>
                <span className="w-100 row justify-content-end">
                  تومان {match.price}
                </span>
                <select className="w-100 form-control row justify-content-end">
                  {match.sizes.map((size, indx) => (
                    <option key={indx} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
                <div className="row justify-content-end col pr-0">
                  <button
                    className="mt-1  text-dark w-50 btn border-dark"
                    style={{ backgroundColor: "#FFFFFF", borderRadius: 0 }}
                  >
                    اضافه کردن
                  </button>
                </div>
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
                  {similar.name}
                </span>
                <span className="w-100 row justify-content-end">
                  تومان {similar.price}
                </span>
                <select className="w-100 form-control row justify-content-end">
                  {similar.sizes.map((size, indx) => (
                    <option key={indx} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
                <div className="row justify-content-end col pr-0">
                  <button
                    className="mt-1  text-dark w-50 btn border-dark"
                    style={{ backgroundColor: "#FFFFFF", borderRadius: 0 }}
                  >
                    اضافه کردن
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return {
    deleteItemFromBasket: () => {
      const action = { type: "ADD_BASKET_COUNT" };
      dispatch(action);
    }
  };
}
function mapStateToProps(state) {
  return { basketCount: state.basketCount };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ItemDetails));
