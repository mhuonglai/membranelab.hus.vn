import React from "react";
import { Link } from "react-router-dom";

const Members = () => {
  return (
    <div className="members">
      <div className="container">
        <h2>Group Members</h2>
        <table className="table">
          <thead className="table--head">
            <tr>
              <th>GROUP LEADER</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="table--body">
            <tr>
              <td>
                <Link to={"https://scholar.google.com/citations?hl=vi&user=JqIPisgAAAAJ"}>Ngo Hong Anh Thu</Link>
              </td>
              <td>Principal Investigator</td>
            </tr>
            <tr>
            </tr>
          </tbody>
        </table>
        <h3>Members:</h3>
        <div>
          <p>Dr. Nguyen Duy Vuong</p>
          <p>Mr. Do Dinh Khai</p>
          <p>Ms. Vu Thi Bich Ngoc</p>
          <p>Duong Xuan Quan - Undergraduate Student/ Master Student K62 - 2021</p>
          <p>Lai Thi Mai Huong - Undergraduate Student/ Master Student K65 – 2024</p>
          <p>Tran Quang Khanh - Undergraduate Student/ Master Student K65 – 2024</p>
        </div>
        <h3>Students:</h3>
        <div>
         
          <p>
          Tran Hieu Nghia - Undergraduate Student/ Master Student K62 – 2024
          </p>
          {/* <p>
          Nguyen Ngoc Linh Phuong -  Undergraduate Student K64 – 2019
          </p>
          <p>
          Ngo Van An -  Undergraduate Student K64 – 2019
          </p>
          <p>
          Nguyen Son Duong -  Undergraduate Student K64 – 2019
          </p>
          <p>
          Nguyen Thi Khanh Chi -  Undergraduate Student K65 – 2020
          </p> */}
          <p>
          Dang Le Phuong Linh - Undergraduate Student K66 – 2021
          </p>
          <p>
          Nguyen Thi Lan Anh - Undergraduate Student K66 – 2021
          </p>
          <p>
          Le Thanh Quynh Nhi - Undergraduate Student K66 – 2021
          </p>
          <p>
          Le Quang Hieu - Undergraduate Student K66 – 2021
          </p>
          {/* <p>
          Nguyen Thi Thu Phuong - Undergraduate Student K66 – 2021
          </p>  */}
        </div>
         
      </div>
    </div>
  );
};

export default Members;
