import "./App.css";
import Home from "./Components/Home/Home.js";

function App() {
  return (
    <>
        <div class="body1">
          <div class="top_navbar">
            <div class="logo">EduGeeks</div>
            <div class="menu">
              <div class="hamburger">
                <i class="fas fa-bars"></i>
              </div>
            </div>
          </div>
          <Home/>
        </div>
      
    </>
  );
}

export default App;
