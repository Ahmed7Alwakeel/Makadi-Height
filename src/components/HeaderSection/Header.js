import { React } from "react";
import './Header.css';
import Navbar from "./Navbar";
import IntroSection from "./IntroSection";



function Header() {

  return (
    <>
      <div className="container mt-2 bg-img m-0">
        <div className="row layer mb-0">
          <div className="col-12">
            <Navbar />
          </div>
          <div className="col-12 ">
            <IntroSection />
          </div>
        </div>
      </div>
    </>
  )
}
export default Header;
