import React from "react";

const Photos = () => {
  return (
    <div className="photos">
      <div className="grid--container">
        <div className="grid--item">
          <p>Logo Team</p>
        </div>
        <div className="grid--item">
          <img src="/img/logo.png"></img>
        </div>
        <div className="grid--item">
          <img src="/img/summer2024.png"></img>
        </div>
        <div className="grid--item">
          <p>Summer 2024</p>
        </div>
        <div className="grid--item">
          <p>Birthday Party</p>
        </div>
        <div className="grid--item">
          <img src="/img/birthdayParty.png" />
        </div>
      </div>
    </div>
  );
};

export default Photos;
