import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <h2>
        CONTACT INFORMATION
       
      </h2>
      <div className="contact--content">
        <div className="item">
          <b>Dr. Ngo Hong Anh Thu</b>
          <p>Faculty of Chemistry, VNU University of Science</p>
          <p>VNU University of Science, 334 Nguyen Trai Road, Thanh Xuan dist., Hanoi, Vietnam </p>
          <p>
            <strong>Tel: </strong>
            <span>(+84) 988364482</span>
          </p>
          <p>
            <strong>Email: </strong>
            <span>anhthu@hus.edu.vn</span>
          </p>
        </div>
        {/* <div className="item">
          <b>Dr. Tran Quang Hung</b>
          <p>Institute of Chemistry, Vietnam Academy of Science and Technology (VAST)</p>
          <p>A18, 18-Hoang Quoc Viet street, Cau Giay District, Hanoi, Vietnam.</p>
          <p>
            <strong>Tel: </strong>
            <span>(+84)943175337</span>
          </p>
          <p>
            <strong>Email: </strong>
            <span>hungtq@gmail.com</span>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Contact;
