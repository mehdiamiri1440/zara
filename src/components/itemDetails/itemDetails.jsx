import React, { Component } from "react";
import { Redirect, withRouter, Link } from "react-router-dom";
import Menu from "../menu/menu";
import "./itemDetailsStyles.css";
import Alert from "react-s-alert";
import MyAlert from "../myAlert/myAlert";
import Footer from "../footer/footer";
import { connect } from "react-redux";
import { serverAddress } from "./../../utility/consts";
import { numberWithCommas } from "./../../utility/index";
import { addBasketCount } from "../../actions/basket";
class ItemDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      finalObject: [],
      selectedSize: [],
      sizeFlag: false,
      product: [],
      colorFlag: false,
      count: 1,
      color: "",
      selectedColor: [],
      similarItems: [
        {
          name: "تی شزت سال جدید",
          price: "2000",
          sizes: ["sx", "s", "md"],
          colors: ["red", "blue", "green"]
        },
        {
          name: "نو نیست",
          price: "56867",
          sizes: ["sx", "s", "lg"]
        },
        {
          name: "عجب تی شزتی",
          price: "1000",
          sizes: ["d", "s", "md"]
        },
        {
          name: "بیا که ارزانیست",
          price: "43222",
          sizes: ["md", "s", "ss"]
        }
      ],
      matchWith: [
        {
          name: "تی شزت سال جدید",
          price: "2000",
          sizes: ["sx", "s", "md"]
        },
        {
          name: "نو نیست",
          price: "56867",
          sizes: ["sx", "s", "lg"]
        },
        {
          name: "عجب تی شزتی",
          price: "1000",
          sizes: ["d", "s", "md"]
        },
        {
          name: "بیا که ارزانیست",
          price: "43222",
          sizes: ["md", "s", "ss"]
        }
      ],
      scrollY: 0
    };
  }
  componentDidMount = () => {
    this.getProduct();
    // this.getSimilarProducts();
    // this.getMatchWithProducts();
    this.setState({ finalObject: this.props.basket });
    window.addEventListener("scroll", this.handleScroll);
  };
  getSimilarProducts() {}
  getMatchWithProducts() {}
  getProduct() {
    fetch(`${serverAddress}/product/id/${this.props.history.location.state}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ product: responseJson }, () => {
          console.log("it is my response:", responseJson, this.state.product);
        });
      })
      .catch(error => {
        console.log("it was false", error);
      });
  }
  handleScroll = () => {
    var lastScrollY = window.scrollY;
    console.log("scroll:", lastScrollY);
    this.setState({ scrollY: lastScrollY });
  };
  addToCart(e, product) {
    let finalObject = this.state.finalObject;
    this.state.selectedSize.map((size, index) => {
      let selectedItem = {
        image: product.images[0],
        size: size,
        color: this.state.color ? this.state.color : product.color[0],
        name: product.name,
        price: product.price,
        count: parseInt(this.state.count),
        _id: product._id
      };
      finalObject.push(selectedItem);
    });
    if (this.state.selectedSize && this.state.selectedSize.length > 0) {
      this.setState({ sizeFlag: false, selectedSize: [], finalObject }, () => {
        localStorage.basket = JSON.stringify(this.state.finalObject);

        // if (
        //   JSON.parse(localStorage.basket) &&
        //   JSON.parse(localStorage.basket).length
        // )
        //   this.setState({ finalObject: JSON.parse(localStorage.basket) });
      });
      for (let i = 0; i < this.state.selectedSize.length; i++) {
        this.props.addBasketCount(this.props.basket.length);
      }
    } else {
      console.log("my loicalstorage:", localStorage.basket);
      Alert.error("لطفا سایز را انتخاب کنید", {
        position: "bottom-right",
        effect: "slide"
      });
    }
    // window.location.reload();
  }
  addSizeOrReject(size) {
    let selectedSize = this.state.selectedSize;
    if (selectedSize.indexOf(size) == -1) {
      selectedSize.push(size);
      this.setState({ selectedSize });
    } else {
      Alert.error("این سایز انتخاب شده است", {
        position: "bottom-right",
        effect: "slide"
      });
    }
  }
  selectColorAndCount(product) {
    if (!this.state.colorFlag)
      return (
        <div>
          <div className="d-flex   form-group">
            <select className="m-2 form-control w-50" name="" id="">
              {product.color &&
                product.color.map((color, indx) => (
                  <option
                    key={indx}
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
  selectSize(product) {
    if (!this.state.sizeFlag)
      return (
        <div
          style={{ fontSize: 14 }}
          className="border-bottom border-top mt-3 pb-3 w-100 text-center pt-4 align-middle"
        >
          {product.sizes.map((size, indx) => (
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
                src={image}
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
  render() {
    return this.state.product.length > 0 ? (
      <div>
        <Alert stack={{ limit: 3 }} />
        <div style={{ zIndex: -9 }}>
          <Menu
            menuItems={true}
            login={false}
            contact={true}
            search={false}
            position="none"
            color="black"
            basket={true}
          />
        </div>
        <div style={{ paddingTop: "5%" }}>
          <div className=" w-50" style={{ cursor: "pointer", left: 0 }}>
            {this.state.product[0].images.map((image, index) => (
              <div key={index}>
                <img
                  key={index}
                  data-toggle="modal"
                  data-target={`#myModal-${index}`}
                  className="w-100 h-50 p-5 ml-5"
                  src={image}
                />
                {this.renderfullScreenImages(image, index)}
              </div>
            ))}
          </div>
          <div
            className="position-fixed w-50"
            // className={
            //   this.state.scrollY <
            //   screen.height * this.state.product[0].images.length
            //     ? "position-fixed w-50"
            //     : null
            // }
            style={
              this.props.language.direction === "ltr"
                ? { right: 0, top: "19%" }
                : { left: 0, top: "19%" }
            }
            // style={
            //   this.state.scrollY <
            //   screen.height * this.state.product[0].images.length
            //     ? this.props.language.direction === "ltr"
            //       ? { right: 0, top: "19%" }
            //       : { left: 0, top: "19%" }
            //     : { display: "none" }
            // }
          >
            <div
              style={{ fontSize: 24, fontWeight: "bold" }}
              className="justify-content-center text-center  d-flex w-100"
            >
              {this.state.product[0].name}
            </div>
            <div
              style={{ fontSize: 14, fontWeight: "bold", direction: "rtl" }}
              className="justify-content-center  d-flex w-100"
            >
              {numberWithCommas(this.state.product[0].price)}
              {" " + "ریال"}
            </div>
            <div
              style={{ fontSize: 14 }}
              className="justify-content-center   d-flex w-100 text-right pt-4 align-middle"
            >
              {this.state.product[0].color &&
                this.state.product[0].color.map((color, indx) => (
                  <span className="px-1" key={indx}>
                    {color}
                    {` ${
                      indx != this.state.product[0].color.length - 1 ? "," : ""
                    } `}
                  </span>
                ))}
            </div>
            <div
              style={{ fontSize: 14 }}
              className="justify-content-center  d-flex w-100 text-center pt-4 align-middle"
            >
              {this.state.product[0].description}
            </div>
            {this.selectSize(this.state.product[0])}
            {this.selectColorAndCount(this.state.product[0])}
            <div className="row  justify-content-center p-1">
              <button
                onClick={e => this.addToCart(e, this.state.product[0])}
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
            <div className="row  justify-content-center p-3">
              <button
                onClick={() => {
                  if (this.props.basket.length)
                    this.props.history.push({ pathname: "/shoppingbasket" });
                  else
                    Alert.error("لطفا سایز را انتخاب کنید", {
                      position: "bottom-right",
                      effect: "slide"
                    });
                }}
                className="text-white w-50 btn"
                style={{ backgroundColor: "#000000", borderRadius: 0 }}
                type="button"
              >
                تسویه خرید
              </button>
            </div>
          </div>
        </div>
        {/* WEAR WITH */}
        {/* <div>
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
                  تومان {numberWithCommas(match.price)}
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
        </div> */}

        {/* <div>
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
                  تومان {numberWithCommas(similar.price)}
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
        </div> */}

        {/* <Footer /> */}
      </div>
    ) : null;
  }
}
function mapDispatchToProps(dispatch) {
  return {
    addBasketCount: index => dispatch(addBasketCount(index))
  };
}
function mapStateToProps(state) {
  return {
    basketCount: state.basket.basketCount,
    basket: state.basket.basket,
    language: state.language
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ItemDetails));
