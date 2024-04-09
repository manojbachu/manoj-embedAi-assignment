import { useState } from "react";
import { IoSearch } from "react-icons/io5";

import LeftBar from "../LeftBar";
import AnimationCard from "../AnimationCard";

import "./index.css";

const Home = () => {
  const [searchText, setSearchText] = useState("");

  const onChangeSearchText = (event) => setSearchText(event.target.value);

  const renderUserProfileView = () => (
    <div className="d-flex justify-content-between align-items-center">
      <div className="d-none d-md-block ">
        <div className="d-flex align-items-center ">
          <p className="user-profile-char-p">A</p>
          <p className="user-name-p">Aman Kumar</p>
        </div>
      </div>
      <div className="input-container ml-auto">
        <button type="button" className="search-icon-btn">
          <IoSearch />
        </button>
        <input
          type="text"
          placeholder="Search for Characters"
          value={searchText}
          className="search-input"
          onChange={onChangeSearchText}
        />
      </div>
    </div>
  );

  return (
    <div className="home-bg">
      <LeftBar />
      <div className="home-content">
        <div className="container mt-3">
          <p className="welcome-p d-none d-md-block">Welcome back,</p>
          {renderUserProfileView()}

          <AnimationCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
