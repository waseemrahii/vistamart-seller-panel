import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs"; // Importing relevant icons
import PaymentOption from "./PaymentOption/PaymentOption";
import PayMentMethod from "../ThirdParty/Paymentmethod/PayMentMethod";
import Priority from "./Priority/Priority";

import BussnessVendorSetup from "./VenderSetup/VenderSetup";
import CustomerSettings from "./Customers/Customers";
import DeliveryManSettings from "./Deliver";
import Shiping from "./Shiping/Shiping";
import ShippingSettings from "./Shiping/Shiping";
import BDeliverySettings from "./DeliverySettings/BDeliverySettings";
import InvoiceSettings from "./Invioce";

const BusinessSetupShop = () => {
  const [activeSection, setActiveSection] = useState("General");

  const renderSection = () => {
    switch (activeSection) {
      case "General":
        return <ShippingSettings />;
      case "PaymentOptions":
        return <CustomerSettings />;
      case "Products":
        return <PaymentOption />;
      case "PrioritySetup":
        return <Priority />;
      case "Orders":
        return <PaymentOption />;
      case "Vendors":
        return <BussnessVendorSetup />;
      case "Customers":
        return <CustomerSettings />;
      case "DeliveryMen":
        return <DeliveryManSettings />;
      case "ShippingMethod":
        return <ShippingSettings />;
      case "DeliveryRestriction":
        return <BDeliverySettings />;
      case "Invoice":
        return <InvoiceSettings />;
      default:
        return <ShippingSettings />;
    }
  };

  return (
    <div className="content container-fluid snipcss-VLj3O">
      <div className="d-flex justify-content-between align-items-center gap-3 mb-3">
        <h2 className="h1 mb-0 text-capitalize d-flex align-items-center gap-2">
          <img
            src="https://6valley.6amtech.com/public/assets/back-end/img/business-setup.png"
            alt=""
          />{" "}
          Business Setup
        </h2>
        <div className="btn-group">
          <div
            className="ripple-animation"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <BsThreeDotsVertical size={18} />
          </div>
          <div className="dropdown-menu dropdown-menu-right bg-aliceblue border border-color-primary-light p-4 dropdown-w-lg">
            <div className="d-flex align-items-center gap-2 mb-3">
              <img
                width="20"
                src="https://6valley.6amtech.com/public/assets/back-end/img/note.png"
                alt=""
              />
              <h5 className="text-primary mb-0">Note</h5>
            </div>
            <p className="title-color font-weight-medium mb-0">
              Please click save information button below to save all the changes
            </p>
          </div>
        </div>
      </div>
      <div className="inline-page-menu my-4">
        <ul className="list-unstyled">
          <li className={` ${activeSection === "General" ? "active" : ""}`}>
            <button
              className="btn-link"
              onClick={() => setActiveSection("General")}
            >
              General
            </button>
          </li>
          <li
            className={`text-capitalize ${
              activeSection === "PaymentOptions" ? "active" : ""
            }`}
          >
            <button
              className="btn-link"
              onClick={() => setActiveSection("PaymentOptions")}
            >
              Payment options
            </button>
          </li>
          <li className={` ${activeSection === "Products" ? "active" : ""}`}>
            <button
              className="btn-link"
              onClick={() => setActiveSection("Products")}
            >
              Products
            </button>
          </li>
          <li
            className={`text-capitalize ${
              activeSection === "PrioritySetup" ? "active" : ""
            }`}
          >
            <button
              className="btn-link"
              onClick={() => setActiveSection("PrioritySetup")}
            >
              Priority setup
            </button>
          </li>
          <li className={` ${activeSection === "Orders" ? "active" : ""}`}>
            <button
              className="btn-link"
              onClick={() => setActiveSection("Orders")}
            >
              Orders
            </button>
          </li>
          <li
            className={`text-capitalize ${
              activeSection === "Vendors" ? "active" : ""
            }`}
          >
            <button
              className="btn-link"
              onClick={() => setActiveSection("Vendors")}
            >
              Vendors
            </button>
          </li>
          <li
            className={`text-capitalize ${
              activeSection === "Customers" ? "active" : ""
            }`}
          >
            <button
              className="btn-link"
              onClick={() => setActiveSection("Customers")}
            >
              Customers
            </button>
          </li>
          <li
            className={`text-capitalize ${
              activeSection === "DeliveryMen" ? "active" : ""
            }`}
          >
            <button
              className="btn-link"
              onClick={() => setActiveSection("DeliveryMen")}
            >
              Delivery men
            </button>
          </li>
          <li
            className={`text-capitalize ${
              activeSection === "ShippingMethod" ? "active" : ""
            }`}
          >
            <button
              className="btn-link"
              onClick={() => setActiveSection("ShippingMethod")}
            >
              Shipping Method
            </button>
          </li>
          <li
            className={`text-capitalize ${
              activeSection === "DeliveryRestriction" ? "active" : ""
            }`}
          >
            <button
              className="btn-link"
              onClick={() => setActiveSection("DeliveryRestriction")}
            >
              Delivery restriction
            </button>
          </li>
          <li
            className={`text-capitalize ${
              activeSection === "Invoice" ? "active" : ""
            }`}
          >
            <button
              className="btn-link"
              onClick={() => setActiveSection("Invoice")}
            >
              Invoice
            </button>
          </li>
        </ul>
      </div>
      <div className="py-4">{renderSection()}</div>
    </div>
  );
};

export default BusinessSetupShop;