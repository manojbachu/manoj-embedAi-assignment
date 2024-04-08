import { FaAnglesRight } from "react-icons/fa6";
import { FiChevronDown } from "react-icons/fi";
import { TbPlus } from "react-icons/tb";
import { TiPlus } from "react-icons/ti";
import { PiCompassFill } from "react-icons/pi";

import "./index.css";

const LeftBar = () => {
  const userName = "Aman Kumar";

  return (
    <div className="left-bar-bg">
      <div className="d-flex justify-content-between align-items-center p-1">
        <p className="logo-name">character.ai</p>
        <button type="button" className="right-arrow-btn">
          <FaAnglesRight size={12} color={"inherit"} />
        </button>
      </div>
      <button type="button" className="create-character-btn">
        <TbPlus className="plus-icon" />
        Create
      </button>
      <button type="button" className="discover-btn">
        <PiCompassFill className="compass-icon" />
        Discover
      </button>
      <p className="chats-p">Chats</p>
      <p className="today-p">Today</p>
      <div className="history-div">history</div>
      <hr className="hr-line" />
      <button type="button" className="try-btn">
        Try c.ai
        <TiPlus className="golden-plus-icon" />
      </button>

      {/* <!-- Default dropup button --> */}
      <div class="btn-group dropup mt-4">
        <div
          class="drop-up"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <div className="d-flex align-items-center">
            <p className="user-profile-p">{userName.charAt(0)}</p>
            <p className="user-name-p">{userName}</p>
          </div>
          <FiChevronDown color={"#7c7c87"} />
        </div>
        <div class="dropdown-menu w-100">
          {/* <!-- Dropdown menu links --> */}
        </div>
      </div>
    </div>
  );
};

export default LeftBar;
