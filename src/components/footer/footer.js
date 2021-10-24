import React from "react";
import "./footer.styles.scss";

function Footer() {
  const footerContent = [
    "FAQ",
    "Help Center",
    "Account",
    "Media Center",
    "Investor Realtions",
    "Jobs",
    "Redeem Gift Cards",
    "Buy Gift Cards",
    "Ways to Watch",
    "Terms of Use",
    "Privacy",
    "Cookie Preferences",
    "Corporate Information",
    "Contact Us",
    "Speed Test",
    "Legal Notices",
    "Netflix Originals",
  ];

  return (
    <div className="footer">
      <p className="content">Questions? Contact us.</p>
      <div>
        <ul>
          {footerContent.map((list, idx) => (
            <li className="list" key={idx}>
              {list}
            </li>
          ))}
        </ul>
        <p className="content">Netflix India</p>
        <p className="content">Developed By Amandeep Chauhan</p>
      </div>
    </div>
  );
}

export default Footer;
