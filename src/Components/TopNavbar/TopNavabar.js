import React from "react";
import "./TopNavbar.css";
import { useAuth0 } from "@auth0/auth0-react";
export default function TopNavabar() {
  const { loginWithRedirect } = useAuth0();
  const { user,logout, isAuthenticated } = useAuth0();
  return (
    <div class="body1">
      <div class="top_navbar">
        <div class="logo">EduGeeks</div>
        {!isAuthenticated ? (
          <div className="logIn">
            {" "}
            <button className="logInButton" onClick={() => loginWithRedirect()}>
              Log In
            </button>
          </div>
        ) : (
          <div className="logIn">
            {" "}
            <div><h1>{user?`Hii, ${user.name} `: ""}</h1></div>
            <div><button
              className="logInButton"
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Log Out
            </button></div>
          </div>
        )}
      </div>
    </div>
  );
}
