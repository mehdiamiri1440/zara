import React from "react";
import Alert from "react-s-alert";
import "./myAlert.css";
const MyAlert = ({ text, type, onSuccess = () => {}, onReject = () => {} }) => {
  switch (type) {
    case "confirm":
      return confirmAlert();
    case "delete":
      return deleteAlert();
    default:
      return null;
  }

  function deleteAlert() {
    return (
      <div
        id="first"
        className={`py-4 s-alert-box s-alert-error s-alert-top s-alert-is-effect s-alert-effect-stackslide s-alert-show  position-fixed fixed-top bg-danger `}
      >
        <div className="w-100 py-2  text-white text-center">{text}</div>
        <div className="d-flex  justify-content-center">
          <button
            onClick={() => {
              onSuccess();
              Alert.closeAll();
            }}
            style={{ width: "15%" }}
            className="btn btn-primary  mx-2"
          >
            Yes
          </button>
          <button
            onClick={() => {
              onReject();
              Alert.closeAll();
            }}
            style={{ width: "15%" }}
            className="btn btn-warning text-white  mx-2"
          >
            No
          </button>
        </div>
      </div>
    );
  }
  function confirmAlert() {
    return (
      <div className="py-4 position-fixed fixed-top bg-success ">
        <div className="w-100 text-white py-2  text-center">{text}</div>
        <div className="d-flex justify-content-center">
          <button
            onClick={() => {
              onSuccess();
              Alert.closeAll();
            }}
            style={{ width: "15%" }}
            className="btn btn-primary  mx-2"
          >
            Yes
          </button>
          <button
            onClick={() => {
              onReject();
              Alert.closeAll();
            }}
            style={{ width: "15%" }}
            className="btn btn-warning text-white  mx-2"
          >
            No
          </button>
        </div>
      </div>
    );
  }
};
export default MyAlert;
