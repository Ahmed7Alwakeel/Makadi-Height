
import { React } from "react";
import Weather from "./Weather";

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-lg mb-lg-5">
                <div className="container-fluid">
                    <a className="navbar-brand"><img src={require("./img/LOGOWhite_EN1.png")} className="h-100" /></a>
                    <button className="navbar-toggler text-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon "> <i className="fa fa-bars fs-5 text-light"></i></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        </ul>
                        <Weather />
                        <div className="nav__circle mb-lg-0 mb-2 me-lg-2 mt-lg-0 mt-2">
                            <i class="fa fa-phone fs-5 text-light m-3"></i>
                        </div>
                        <div className="mt-lg-0 mt-3">
                            <button className="btn btn-light border-0 rounded-0 ms-lg-2 me-lg-2 ps-4 pe-4">Book Now </button>
                        </div>
                        <div className="mt-lg-0 mt-3">
                            <span className="ms-lg-2 me-lg-2 text-light fw-bold">MENU</span>
                        </div>
                        <div className="mt-lg-0 mt-3">
                            <i className="fa fa-bars fs-5 fw-lighter ms-lg-2 text-light"></i>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar

