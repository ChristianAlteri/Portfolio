import React from "react";

function Footer() {
    return (
        <footer className="footer fixed-bottom text-center">
      <div className="content has-text-centered">
        <p>
          <strong>React Portfolio</strong> - a React portfolio by {" "}
          <a href="https://github.com/timmobrien" target="_blank" rel="noreferrer">
             Tim Obrien
          </a>
          .
          <hr />
          <a
            href="https://www.linkedin.com/in/timothymobrien29/"
            target="_blank" rel="noreferrer"
          >
            LinkedIn
          </a>

        </p>
      </div>
    </footer>
    )
}
export default Footer;