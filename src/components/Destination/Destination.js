import React from "react";
import "./Destination.css";

const Destination = () => {
  const myFunction = () => {
    document.getElementById("more").style.display = "block";
  };
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-lg-2 py-lg-5">
        <div className="col-lg-7 text-start">
          <div className="destination-details px-4">
            <h1>COX'S BAZAR</h1>
            <p>
              The name Cox's Bazar originated from the name of a British East
              India Company officer, Captain Hiram Cox, who was appointed as the
              Superintendent of Palonki (today's Cox's Bazar) outpost.
              <span id="more">
                He succeeded Warren Hastings, who became the Governor of Bengal
                following the British East India Company Act in 1773. Cox
                embarked upon the task of rehabilitation and settlement of the
                Arakanese refugees in the area.The major economic activity in
                Cox's Bazar is tourism. A number of hotels, guest houses, and
                motels have been built in the city and coastal region, and many
                people are involved in the service industry. Oysters, snails,
                pearls and their ornaments are very popular with tourists and
                people are involved in the transportation business for tourists.
              </span>
            </p>
            <button onClick={myFunction} id="myBtn">
              Read more
            </button>
          </div>
        </div>
        <div className="col-lg-5 px-lg-5 text-start">
          <div className="booking-form p-4">
            <div className="row">
              <div className="col">
                <div className="mb-2">
                  <label htmlFor="origin">Origin</label>
                  <input type="text" name="origin" id="origin" />
                </div>
                <div>
                  <label htmlFor="origin">Destination</label>
                  <input type="text" name="origin" id="origin" />
                </div>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <div>
                  <label htmlFor="formDate">Form</label>
                  <input type="date" name="formDate" id="formDate" />
                </div>
              </div>
              <div className="col">
                <div>
                  <label htmlFor="toDate">To</label>
                  <input type="date" name="toDate" id="toDate" />
                </div>
              </div>
            </div>
            <div className="mt-4">
              <button className="start-booking-btn">Start Booking</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
