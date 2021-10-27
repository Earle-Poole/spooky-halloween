import React from "react";
import "./css/home.css";

const Home = () => {
  return (
    <>
      <div className="Home">
        <span>
          Hello, this application is intended to be a fun way to practice your
          React and TypeScript coding while celebrating Hacktoberfest 2021!
        </span>
        <br />
        <span>
          Feel free to fork this repository, make some changes, and submit a
          pull request!
        </span>
        <br />
        <span>Please avoid purposeless pull requests. Thank you</span>
      </div>
      <a className="background-credit" href="https://pngtree.com/free-backgrounds">
        Background Credit/
      </a>
    </>
  );
};

export default Home;
