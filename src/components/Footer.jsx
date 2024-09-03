import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer--item">
        <img src="https://static.wixstatic.com/media/7dfa92_fcb69aa9b513482fa54d62119dd847e1~mv2_d_2402_3089_s_4_2.jpg/v1/fill/w_72,h_95,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/7dfa92_fcb69aa9b513482fa54d62119dd847e1~mv2_d_2402_3089_s_4_2.jpg"></img>
        <div>
         
          <p>VNU University of Science, Ha Noi</p>
        </div>
      </div>
      <div className="foter--item">
    <p>@2024 by Ngo Hong Anh Thu</p>
      </div>
      <div className="footer--item">
        <div>
          <p style={{textAlign: "right"}}>Faculty of Chemistry</p> 
          <p>Hanoi University of Science</p>
        </div>
        <img src="/img/logo-footer-right.jpg"></img>
        
      </div>
    </footer>
  );
};

export default Footer;
