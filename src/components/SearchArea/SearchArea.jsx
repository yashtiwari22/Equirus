import React from "react";
import { useState } from "react";
import "./SearchArea.css";
import PersonProfile from "../PersonProfile/PersonProfile";
import Profile from "../../assets/Profile.png";
const SearchArea = () => {
  const [viewProfile, setViewProfile] = useState(false);
  const [searchArea, setSearchArea] = useState(true);

  const handleViewProfile = (e) => {
    setViewProfile(true);
    setSearchArea(false);
  };
  return (
    <>
      {searchArea && (
        <div className="searchArea">
          <div className="searchCard">
            <div>
              <button
                style={{
                  background: "lightblue",
                  border: "none",
                  borderRadius: "5px",
                  height: "40px",
                  cursor: "pointer",
                }}
              >
                Search
              </button>
              <input type="text" />
            </div>
            <div className="recentSearches">
              <li>Tom Cook</li>
              <li>Courtney henry</li>
            </div>

            <div className="onSearch">
              <div className="personList">
                <li>Tom Cook</li>
                <li>Courtney henry</li>
              </div>
              <div className="seperator"></div>
              <div className="personDetail">
                <div className="profile">
                  <img src={Profile} alt="Profile" />
                  <h3>Tom Cook</h3>
                  <p style={{ marginTop: "0px" }}>
                    Director,Product development
                  </p>
                </div>
                <div className="details">
                  <div className="detail">
                    <h3>Phone</h3>
                    <p>8604033142</p>
                  </div>
                  <div className="detail">
                    <h3>URL</h3>
                    <p style={{ color: "blue" }}>https://example.com</p>
                  </div>
                  <div className="detail">
                    <h3>Email</h3>
                    <p style={{ color: "blue" }}>tomcook@example.com</p>
                  </div>
                  <div className="view">
                    <button
                      style={{
                        background: "lightblue",
                        border: "none",
                        borderRadius: "5px",
                        width: "90%",
                        height: "30px",
                        marginLeft: "10px",
                        cursor: "pointer",
                      }}
                      onClick={handleViewProfile}
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="notFound">Not Found</div> */}
          </div>
        </div>
      )}

      {viewProfile && <PersonProfile />}
    </>
  );
};

export default SearchArea;
