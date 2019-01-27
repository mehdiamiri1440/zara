import React from "react";
import "./accessDenied.css";
const AccessDenied = ({}) => {
  return (
    <div className="w-100">
      <h2 className="pt-3 text-muted text-center">دسترسی محدود شده است</h2>
      <div className="d-flex justify-content-center">
        <img
          className="w-50 h-75"
          src={require("../../contents/images/access-denied.png")}
          alt=""
        />
      </div>
      <h1 className="d-flex py-3 text-danger justify-content-center">
        <span>
          <i className="fas fa-exclamation-triangle" />
        </span>
        <span className="px-2"> 403 </span>
        <span>
          <i className="fas fa-exclamation-triangle" />
        </span>
      </h1>
      <div className="d-flex text-muted justify-content-center">
        متاسفانه شما دسترسی ورود به این صفحه را ندارید
      </div>
      <div
        style={{ cursor: "pointer" }}
        onClick={() => window.history.back()}
        className=" pt-2 d-flex btn-link text-muted justify-content-center"
      >
        <span>
          <i className="far fa-hand-point-up" />
        </span>
        <div className="hoverableText text-primary px-2">
          بازگشت به صفحه قبلی
        </div>
        <span>
          <i className="far fa-hand-point-up" />
        </span>
      </div>
    </div>
  );
};
export default AccessDenied;
