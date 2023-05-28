import React from "react";
import Maincontent from '../MainContent/maincontent.js';
import { useAuth0 } from "@auth0/auth0-react";
import './Home.css';

import './Home.css';
export default function Home() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
    {isAuthenticated?

    <div><Maincontent/></div>:
    (<div className="userLogOut">Please LogIn first <br/> 
</div>)
  };
  </>
  );
}
