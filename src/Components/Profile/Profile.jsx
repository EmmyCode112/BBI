import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";
import "./Profile.css";

const Profile = () => {
  const [activeButton, setActiveButton] = useState("profile");

  const ProfileView = () => (
    <div className="mt-[26px]">
      <div className="cover relative">
        <img
          src="./Rectangle.png"
          alt=""
          className="large-bg w-full h-[228px] max-md:h-[300px]"
        />
        <img src="./small-bg.png" className="small-bg w-full h-[228px] max-md:h-[300px]"/>
        <img
          src="./user.png"
          alt=""
          className="absolute bottom-[-26%] left-0 right-0 m-auto w-[150px] h-[150px] rounded-full"
        />
      </div>
      <div className="text-center mt-[90px] max-md:mt-[95px]">
        <div>
          <h3 className="text-[#242760] text-[18px] font-[600] leading-[22px] fontInter">
            Kingsley Monica
          </h3>
          <p className="font-[500] text-[13px] fontInter leading-[12px] text-[#544C4C] mt-[8px]">
            kingsleyMonica@gmail.com
          </p>
          <div className="flex mt-[27px] justify-center items-center gap-[3px] ">
            <img src="./location.png" alt="" className="w-[16px]" />
            <span className="fontInter">Lagos, Nigeria</span>
          </div>
        </div>
      </div>
      <ul className="stats max-md:mt-[60px]">
        <li>
          <h2>100</h2>
          <p>
            Classes <br /> Attended
          </p>
        </li>
        <li>
          <h2>22</h2>
          <p>Grants </p>
        </li>
        <li>
          <h2>100</h2>
          <p>Votes</p>
        </li>
        <li>
          <h2>20</h2>
          <p>Referrals</p>
        </li>
      </ul>
      <div className="text-center max-md:mt-[30px]">
        <button className="ref-link-btn fontInter">
          Ref Link: https://beyondborders/90jdf9ion
        </button>
        <p className="mt-[8px] cursor-pointer text-[#BF3643] leading-[20px] text-[12px] font-[600]">
          Log Out {">"}
        </p>
      </div>
    </div>
  );

  const DashboardView = () => (
    <div className="dashboard">
      <div className="mt-[26px] flex items-center gap-[16px]">
        <img
          src="./Hello.png"
          alt=""
          className="w-[60px] h-[60px] rounded-full lg:w-[50px] lg:h-[50px] "
        />
        <div>
          <h2 className="font-[600] text-[26px] leading-[25px] ">
            Hi Kingsley!
          </h2>
          <p className="font-[400] text-[17px] leading-[25px]">
            Welcome to your Dashboard
          </p>
        </div>
      </div>

      <div className="card-container mt-[30px]">
        <div className="card">
          <img src="./Grant status.png" alt="" />
          <h3>Grant Status</h3>
        </div>
        <div className="card">
          <img src="./refer.png" alt="" />
          <h3>Refer & Earn</h3>
        </div>
        <div className="card">
          <img src="./courses.png" alt="" />
          <h3>Current Courses</h3>
        </div>
        <div className="card">
          <img src="./inbox.png" alt="" />
          <h3>Inbox</h3>
        </div>
      </div>
      <ul className="row bg-white mt-[30px] rounded-[7px]">
        <li>
          <img src="./certificate.png" alt="" />
          <p>Your Certificate</p>
        </li>
        <li>
          <img src="./support.png" alt="" />
          <p>Support</p>
        </li>
        <li>
          <img src="./student-help.png" alt="" />
          <p>Student Benefits</p>
        </li>
        <li>
          <img src="./time-table.png" alt="" />
          <p>Time Table</p>
        </li>
        <li>
          <img src="./vote.png" alt="" />
          <p>Vote</p>
        </li>
        <li>
          <img src="./referral-link.png" alt="" />
          <p>Referral Link</p>
        </li>
      </ul>
    </div>
  );

  return (
    <div>
      <div className=" h-[57px] bg-white w-full max-md:hidden"></div>
      <div className="pt-[53px] pb-[124px] profile">
        <div className="flex flex-col max-md:gap-[10px]">
          <div className="flex gap-[39px] max-md:gap-[20px] top">
            <div className="w-[37px] arrow-back h-[32px] flex items-center justify-center cursor-pointer border-[2px] border-[#FF9F00] rounded-[5px] max-sm:border-[none] bg-[white] ">
              <img src="./backbtn.png" className="h-[15px] w-[6px]" alt="" />
            </div>
            <button
              onClick={() => setActiveButton("profile")}
              className={`${activeButton === "profile" ? "active" : ""}`}
            >
              Profile
            </button>
            <button
              onClick={() => setActiveButton("dashboard")}
              className={`${
                activeButton === "dashboard" ? "active" : ""
              } text-white`}
            >
              Dashboard
            </button>
          </div>
          <CSSTransition
            in={activeButton === "profile"}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <ProfileView />
          </CSSTransition>
          <CSSTransition
            in={activeButton === "dashboard"}
            timeout={300}
            classNames="fade"
            unmountOnExit
          >
            <DashboardView />
          </CSSTransition>
        </div>
      </div>
      <div className=" h-[57px] bg-[#084DAE] w-full"></div>
    </div>
  );
};

export default Profile;
