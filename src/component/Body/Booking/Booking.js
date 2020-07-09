import React from "react";
import "./Booking.css";
import Input from "./Input/Input";
import InputSelect from "./InputSelect/InputSelect";
import { FaEllipsisH } from "react-icons/fa";

const Booking = () => {
  // const { labelFor, labelName, selectId } = props;

  return (
    <div>
      <section className="booking">
        <div className="container">
          <form action="" className="book-form">
            <Input
              labelFor="destination"
              labelName="Destination"
              inputType="text"
              inputId="destination"
            />
            <Input
              labelFor="check-in"
              labelName="Check in"
              inputType="date"
              inputId="check-in"
            />
            <Input
              labelFor="check-out"
              labelName="Check out"
              inputType="date"
              inputId="check-out"
            />
            <InputSelect
              labelFor="adults"
              labelName="Adults"
              selectId="adults"
            />
            <InputSelect
              labelFor="children"
              labelName="Children"
              selectId="children"
            />
            <button type="submit" className="btn form-btn btn-purple">
              Search
              <span className="dots">
                <FaEllipsisH />
              </span>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Booking;
