import React from 'react'
import { useState } from 'react';
  
async function postApiData(url, postData, auth_token) {
  try {
    let headers = {
      "Content-Type": "application/json",
    };
    if (auth_token) {
        headers["Authorization"] = `Bearer ${auth_token}`;
    }

    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(postData),
    });

    if (!response.ok) {
      throw new Error(response);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error posting data:", error);
    return error;
  }
}

async function search(keyword, category = null, min_price = 0, max_price = 1000, order = 1) {
  const search_data_api = "https://phpwebdevelopmentservices.com/project-react-backend/api/common-data";
  const search_data = {
    "params": {
      "cat_slug": category,
      "sort_by": order,
      "category_id": 1,
      "sub_category_id": 1,
      "keyword": keyword,
      "price_range": [
        min_price,
        max_price
      ],
      "offset": 0
    }
  }

  return postApiData(search_data_api, search_data)
    .then((data) => {
      return data.result;
    })
    .catch((error) => {
      console.error("Search Error:", error);
    });
}



const Navbar = () => {
  
  function onSearch(e) {
    e.preventDefault();
    const keyword = e.target.form[0].value;
    search(keyword)
      .then((results) => {
        console.log("Results found: ", results);
        //setSearchResults(results);
      })
      .catch((error) => {
        console.error('Search Error:', error);
      });
  }

  return (
    <div>
        <div className="wrapper">
        <header>
          <div className="two_in_one">
            <div className="top_head">
              <div className="container">
                <div className="row ">
                  <div className="head_contact">
                    <ul>
                      <li>
                        <img src="images/icon04.png" alt="" /> Sarkar shoss
                        exclusive Natun Bazar turminal complex, PO : Maynaguri,
                        Dist : Jalpaiguri, Pin : 753224.
                      </li>
                    </ul>
                  </div>
                  <div className="head_log_area ml-auto">
                    <ul>
                      <li>
                        <a href="#">
                          <img src="images/icon03.png" alt="" />
                          dhrubadjs.mng@gmail.com
                        </a>
                      </li>
                      <li>
                        <a href="tel:7797813261">
                          <img src="images/icon02.jpg" alt="" /> +91 7797813261
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="middle_head">
              <div className="container">
                <div className="row res_padd">
                  <span className="logo">
                    <a href="index.html">
                      <img src="images/logo.png" alt="" />
                    </a>
                  </span>
                  <div className="right_search ml-auto">
                    <div className="left_search">
                      <form>
                        <input
                          type="text"
                          className="search_type mobill010"
                          placeholder="Search for Products"
                          // ki kore ekhan theke nebo value
                        />
                        <button
                          type="submit"
                          value=""
                          className="search_submit"
                          onSubmit={onSearch}
                        ></button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="for_all_cat_sub_cat">
              <div className="menu_area">
                <div className="container">
                  <div className="row res_padd relet">
                  
                    {/* <!--CATEGORY MENU-->                 */}
                    <div className="adjust_rm01">
                      <div className="off_canvas_animate slide off_canvas_container left_menu_1">
                        <div className="off_canvas_animate slide off_canvas_top_menu">
                          <div className="off_canvas_toggles">
                            <span className="nav_prev_btn">
                              <i className="icon-left"></i>Back
                            </span>
                            <span className="nav_close_btn">
                              <i className="icon-cancel"></i>
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="content_animate slide content">
                        <div className="content_animate slide">
                          <span className="nav_toggle">
                            <i className="icon-menu"></i>
                          </span>
                          <nav className="dropdown">
                            <ul>
                              <li>
                                <a
                                  href="javascript:void(0);"
                                  className="adjust_rm02"
                                >
                                  All Categories{" "}
                                  <i
                                    className="fa fa-caret-down"
                                    aria-hidden="true"
                                  ></i>
                                </a>
                                <ul>
                                  <li>
                                    <a href="javascript:void(0);">
                                      Vegetable{" "}
                                      <i
                                        className="fa fa-angle-right"
                                        aria-hidden="true"
                                      ></i>
                                    </a>
                                    <ul>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category One
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Abc Sub Category Here
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category three
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Dummy Sub Category name
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category One
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Abc Sub Category Here
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category three
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Dummy Sub Category name
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category three
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Dummy Sub Category name
                                        </a>
                                      </li>
                                    </ul>
                                  </li>

                                  <li>
                                    <a href="javascript:void(0);">
                                      Fruits
                                      <i
                                        className="fa fa-angle-right"
                                        aria-hidden="true"
                                      ></i>
                                    </a>
                                    <ul>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category One
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category three
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Dummy Sub Category name
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category One
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Abc Sub Category Here
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category three
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Dummy Sub Category name
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category One
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Abc Sub Category Here
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category three
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Dummy Sub Category name
                                        </a>
                                      </li>
                                    </ul>
                                  </li>

                                  <li>
                                    <a href="javascript:void(0);">
                                      Dairy products{" "}
                                      <i
                                        className="fa fa-angle-right"
                                        aria-hidden="true"
                                      ></i>
                                    </a>
                                    <ul>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category One
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Abc Sub Category Here
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category three
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Dummy Sub Category name
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category One
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Abc Sub Category Here
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category three
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Dummy Sub Category name
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category One
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Abc Sub Category Here
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category three
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Dummy Sub Category name
                                        </a>
                                      </li>
                                    </ul>
                                  </li>

                                  <li>
                                    <a href="javascript:void(0);">
                                      Organic Products{" "}
                                      <i
                                        className="fa fa-angle-right"
                                        aria-hidden="true"
                                      ></i>
                                    </a>
                                    <ul>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category One
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Dummy Sub Category name
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category One
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Abc Sub Category Here
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category three
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Dummy Sub Category name
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category One
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Abc Sub Category Here
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category three
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Dummy Sub Category name
                                        </a>
                                      </li>
                                    </ul>
                                  </li>

                                  <li>
                                    <a href="javascript:void(0);">
                                      Grocery Items{" "}
                                      <i
                                        className="fa fa-angle-right"
                                        aria-hidden="true"
                                      ></i>
                                    </a>
                                    <ul>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category One
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Abc Sub Category Here
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category three
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Dummy Sub Category name
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category One
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Abc Sub Category Here
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category three
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Dummy Sub Category name
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category One
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Abc Sub Category Here
                                        </a>
                                      </li>
                                      <li>
                                        <a href="javascript:void(0);">
                                          Sub Category three
                                        </a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </li>
                            </ul>
                          </nav>
                        </div>
                      </div>
                    </div>
                    {/* <!--CATEGORY MENU END-->  */}

                    <nav className="navbar navbar-expand-md navbar-light">
                      <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                      >
                        <span className="navbar-toggler-icon"></span>
                      </button>

                      <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                      >
                        <ul className="navbar-nav mr-auto">
                          <li className="nav-item dropdown ">
                            <a
                              className="nav-link dropdown-toggle"
                              href="#"
                              id="navbarDropdownMenuLink"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Fruits
                            </a>
                            <ul
                              className="dropdown-menu"
                              aria-labelledby="navbarDropdownMenuLink"
                            >
                              <a className="dropdown-item" href="fruits.html">
                                Foodgrains
                              </a>
                              <a className="dropdown-item" href="vagetables.html">
                                {" "}
                                Oil
                              </a>
                              <a className="dropdown-item" href="leaves.html">
                                Masala
                              </a>
                            </ul>
                          </li>

                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              About Bazar Maynaguri
                            </a>
                          </li>

                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              B2B Information
                            </a>
                          </li>

                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              FAQ
                            </a>
                          </li>

                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              Contact Us
                            </a>
                          </li>

                          <li className="nav-item">
                            <a className="nav-link" href="#">
                              Enquiry Us
                            </a>
                          </li>
                        </ul>
                      </div>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
       
      </div>
    </div>
  )
}

export default Navbar
