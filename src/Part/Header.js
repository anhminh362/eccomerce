import { useState } from "react";
import Search from '../Search/Search';
import SearchBar from "../Search/SearchBar";

import axios from 'axios';
import './Header.css';
function Header() {
    const [showForm, setShowForm] = useState(false);
    const [fullName, setFullName] = useState("");
    const [content, setContent] = useState("");

    const handleClick = () => {
        setShowForm(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(fullName, content);

        await axios.put('http://localhost:3000/forms/1', {
            id: 1,
            fullName: fullName,
            content: content
        })
            .then(function (response) {
                alert("Successful");
            })
            .catch(function (error) {
                alert(error);
            });



        setFullName("");
        setContent("");
        setShowForm(false);
    };

    return (
        <>
            {showForm && (
                <div className="form-contact">
                    <form onSubmit={handleSubmit} className="form">
                        <h2>Contact</h2>
                        <input className="form-control input"
                            type="text"
                            placeholder="Họ tên"
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                        <textarea className="form-control textarea"
                            placeholder="Nội dung"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        ></textarea>
                        <button type="submit" className="submit">Gửi</button>
                    </form>
                </div>
            )}

            <div className="banner_bg_main">
                <div className="container">
                    <div className="header_section_top">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="custom_menu">
                                    <ul>
                                        <li>
                                            <a href="#">Best Sellers</a>
                                        </li>
                                        <li>
                                            <a href="#">Gift Ideas</a>
                                        </li>
                                        <li>
                                            <a href="#">New Releases</a>
                                        </li>
                                        <li>
                                            <a href="#">Today's Deals</a>
                                        </li>
                                        <li>
                                            <a href="#">Customer Service</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* header top section start */}
                {/* logo section start */}
                <div className="logo_section">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="logo">
                                    <a href="index.html">
                                        <img src="images/logo.png" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* logo section end */}

                {/* header section start */}
                <div className="header_section">
                    <div className="container">
                        <div className="containt_main">
                            <div id="mySidenav" className="sidenav">
                                <a
                                    href="javascript:void(0)"
                                    className="closebtn"
                                    onclick="closeNav()"
                                >
                                    ×
                                </a>
                                <a href="index.html">Home</a>
                                <a href="fashion.html">Fashion</a>
                                <a href="electronic.html">Electronic</a>
                                <a href="jewellery.html">Jewellery</a>
                            </div>
                            <span className="toggle_icon" onClick={handleClick}>
                                <img src="images/toggle-icon.png" />
                            </span>
                            <div className="dropdown">
                                <button
                                    className="btn btn-secondary dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                >
                                    All Category
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a className="dropdown-item" href="#">
                                        All
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Man
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        Woman
                                    </a>
                                </div>
                            </div>
                            <div className="main">
                                {/* Another variation with a button */}
                                <div className="input-group">
                                    {/* <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Search this blog"
                                    /> */}
                                    <Search></Search>
                                    <div className="input-group-append">
                                        <button
                                            className="btn btn-secondary"
                                            type="button"
                                            style={{ backgroundColor: "#f26522", borderColor: "#f26522" }}
                                        >
                                            <i className="fa fa-search" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="header_box">
                                <div className="lang_box ">
                                    <a
                                        href="#"
                                        title="Language"
                                        className="nav-link"
                                        data-toggle="dropdown"
                                        aria-expanded="true"
                                    >
                                        <img
                                            src="images/flag-uk.png"
                                            alt="flag"
                                            className="mr-2 "
                                            title="United Kingdom"
                                        />{" "}
                                        English{" "}
                                        <i className="fa fa-angle-down ml-2" aria-hidden="true" />
                                    </a>
                                    <div className="dropdown-menu ">
                                        <a href="#" className="dropdown-item">
                                            <img
                                                src="images/flag-france.png"
                                                className="mr-2"
                                                alt="flag"
                                            />
                                            French
                                        </a>
                                    </div>
                                </div>
                                <div className="login_menu">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-shopping-cart" aria-hidden="true" />
                                                <span className="padding_10">Cart</span>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-user" aria-hidden="true" />
                                                <span className="padding_10">Cart</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* header section end */}
                {/* banner section start */}
                <div className="banner_section layout_padding">
                    <div className="container">
                        <div id="my_slider" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <h1 className="banner_taital">
                                                Get Start <br />
                                                Your favriot shoping
                                            </h1>
                                            <div className="buynow_bt">
                                                <a href="#">Buy Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <h1 className="banner_taital">
                                                Get Start <br />
                                                Your favriot shoping
                                            </h1>
                                            <div className="buynow_bt">
                                                <a href="#">Buy Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <h1 className="banner_taital">
                                                Get Start <br />
                                                Your favriot shoping
                                            </h1>
                                            <div className="buynow_bt">
                                                <a href="#">Buy Now</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a
                                className="carousel-control-prev"
                                href="#my_slider"
                                role="button"
                                data-slide="prev"
                            >
                                <i className="fa fa-angle-left" />
                            </a>
                            <a
                                className="carousel-control-next"
                                href="#my_slider"
                                role="button"
                                data-slide="next"
                            >
                                <i className="fa fa-angle-right" />
                            </a>
                        </div>
                    </div>
                </div>
                {/* banner section end */}
            </div>
        </>
    )
}
export default Header;