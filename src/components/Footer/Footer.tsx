import React from "react";

export default function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">AUTO DIJELOVI INDEX</p>
        <p className="footer-subscription-text">
          Ulica velikog Đake 2, 83000 Čapljina
        </p>
        <div className="footerlink-items">
          <h2 id="naslov">Kontakt</h2>
          <br />
          <ul className="lista">
            <li>Mob : 063 123 456</li>
            <li>
              Email : <a href="/">đaka1@đaka.com</a>
            </li>
          </ul>
        </div>
        <p>Srdačan pozdrav! Index auto dijelovi</p>
        <br />
        <br />
        <small className="website-rights">
          © Index Dijelovi 2023. | Sva prava pridržana.
        </small>
      </section>
    </div>
  );
}
