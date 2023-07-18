import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import $ from 'jquery';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

async function getApiData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}


const HomePage = () => {

  //top slideshow
	
	//   $("#offer").owlCarousel({
	// margin: 27,
	// autoplay:true,
  //   autoplayTimeout:3000,
	// autoplayHoverPause:false,
	// 		nav: true,
	// 		loop: true,
	// 		responsive: {
	// 		  0: {
	// 			items: 1
	// 		  },
	// 		  576: {
	// 			items: 1
	// 		  },
	// 		  768: {
	// 			items:2
	// 		  },
	// 		  992: {
	// 			items:2
	// 		  },
	// 		  1200: {
	// 			items:2,
	// 		  },
	// 		}
	// 	});
	
  // //bottom slideshow
	//       $("#latest_product_slider").owlCarousel({
  //           margin:0,
  //           autoplay:true,
  //           autoplayTimeout:3000,
  //           autoplayHoverPause:false,
  //           nav: true,
  //           loop: true,
  //           responsive: {
  //               0: {
  //               items: 2
  //               },
  //               576: {
  //               items: 2
  //               },
  //               768: {
  //               items:3
  //               },
  //               992: {
  //               items:4
  //               },
  //               1200: {
  //               items:5,
  //               },
  //           }
  //       });
	
  return (
    <>
      <Navbar />

      {/* <!--banner--> */}
      <section className="banner">
        <div id="demo" className="carousel slide" data-ride="carousel">
          {/* <!-- Indicators --> */}
          <div className="container">
            <div className="row res_padd">
              <ul className="carousel-indicators">
                <li data-target="#demo" data-slide-to="0" className="active"></li>
                <li data-target="#demo" data-slide-to="1"></li>
                <li data-target="#demo" data-slide-to="2"></li>
              </ul>
            </div>
          </div>
          
          {/* <!-- The slideshow --> */}
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="images/banner1.jpg" alt="" />
              <div className="container">
                <div className="row res_padd">
                  <div className="sliderr_ttxt">
                    <div className="carousel-caption">
                      <h3>Quality Assurance</h3>
                      <p>Free weighting Machine for our members.</p>
                      <a href="#">Call For Enquiry</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img src="images/banner2.jpg" alt="" />
              <div className="container">
                <div className="row res_padd">
                  <div className="sliderr_ttxt">
                    <div className="carousel-caption">
                      <h3>Simply Dummy Caption Here</h3>
                      <p>Free weighting Machine for our members.</p>
                      <a href="#">Call For Enquiry</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="carousel-item">
              <img src="images/banner3.jpg" alt="" />
              <div className="container">
                <div className="row res_padd">
                  <div className="sliderr_ttxt">
                    <div className="carousel-caption">
                      <h3>Quality Assurance</h3>
                      <p>Free weighting Machine for our members.</p>
                      <a href="#">Call For Enquiry</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="wrapper">
 
        {/* <!--ABOUT--> */}
        <div className="about_us_area">
          <div className="container">
            <div className="row res_padd">
              <h1>Welcom To BazarMoynaguri</h1>
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse vitae pharetra erat. Fusce quis suscipit leo. Nulla
                scelerisque erat in nam at efficitur tortor, vitae porttitor mi.
                Morbi sit amet velit nec leo imperdiet porttitor mi. Morbi sit
                amet velit nec leo imperdiet.
              </h2>
              <img src="images/icon05.jpg" alt="" />

              <div className="linee"></div>

              <div className="aboput_boxx line_left">
                <img src="images/icon12.png" alt="" />
                <h3>Best Quality Product</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>

              <div className="aboput_boxx">
                <img src="images/icon11.png" alt="" />
                <h3>Free Shipping</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>

              <div className="aboput_boxx border_none line_right">
                <img src="images/icon10.png" alt="" />
                <h3>On Time Delivery</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                  eiusmod tempor incididunt ut labore et dolore magna.
                </p>
              </div>

              <a href="#">Quality product at your door step</a>
            </div>
          </div>
        </div>
        
        {/* <!--ABOUT--> */}

        {/* <!--slider--> */}
        <div className="slider_one_area">
          <div className="container">
            <div className="row res_padd">
              <OwlCarousel id="offer" className='owl-carousel testimonial-carousel-main' loop nav>
              {/* <div id="offer" className="owl-carousel testimonial-carousel-main"> */}
                <div className="item">
                  <div className="boxx_sg">
                    <img src="images/icon06.JPG" alt=""/>
                    <div className="containtt_one">
                      <h1>Simply dummy Offer text here</h1>
                      <h2>100% Organic Vegetable</h2>
                      <span>
                        <img src="images/cruve.png" alt=""/>
                        <a href="#">CALL FOR Enquiry <img src="images/icon07.png" alt=""/></a>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="boxx_sg">
                    {/* <img src="images/icon08.jpg" alt=""/> */}
                    <div className="containtt_two">
                      <span>
                        <h1>Simply dummy Offer text here</h1>
                        <h2>100% Organic Vegetable</h2>
                        <a href="#">Call For Enquiry</a>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="boxx_sg">
                    <img src="images/icon33.jpg" alt="" />
                    <div className="containtt_one">
                      <h1>Simply dummy Offer text here</h1>
                      <h2>100% Organic Vegetable</h2>
                      <span>
                        {/* <img src="images/cruve.png" alt=""/> */}
                        <a href="#">
                          CALL FOR Enquiry{" "}
                          <img src="images/icon07.png" alt="" />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="boxx_sg">
                    <img src="images/icon34.jpg" alt="" />
                    <div className="containtt_two">
                      <span>
                        <h1>Simply dummy Offer text here</h1>
                        <h2>100% Organic Vegetable</h2>
                        <a href="#">Call For Enquiry</a>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="boxx_sg">
                    <img src="images/icon35.jpg" alt="" />
                    <div className="containtt_one">
                      <h1>Simply dummy Offer text here</h1>
                      <h2>100% Organic Vegetable</h2>
                      <span>
                        <img src="images/cruve.png" alt="" />
                        <a href="#">
                          CALL FOR Enquiry{" "}
                          <img src="images/icon07.png" alt="" />
                        </a>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="item">
                  <div className="boxx_sg">
                    <img src="images/icon36.jpg" alt="" />
                    <div className="containtt_two">
                      <span>
                        <h1>Simply dummy Offer text here</h1>
                        <h2>100% Organic Vegetable</h2>
                        <a href="#">Call For Enquiry</a>
                      </span>
                    </div>
                  </div>
                </div>
                
              {/* </div> */}
              </OwlCarousel>
            </div>
          </div>
        </div>
        {/* <!--slider END--> */}

        {/* <!--Our Products--> */}
        <div className="our_products">
          <div className="container">
            <div className="row res_padd2">
              <h1>Our Products</h1>
              <h3>Shoping made easy or some caption text show here</h3>
              <img src="images/icon05.jpg" alt="" />

              <div className="linee"></div>

              <div className="product_box">
                <div className="pro_image">
                  <a href="#">
                    <img src="images/icon15.jpg" alt="" />
                  </a>
                  <span className="enq01">
                    <a href="#">Call For Enquiry</a>
                  </span>
                </div>
                <div className="pro_desc">
                  <a href="#">Product name show here</a>
                  <p>Rs.40.00 </p>
                  <span className="pro_line">
                    <strong></strong>
                  </span>
                </div>
              </div>

              <div className="product_box">
                <div className="pro_image">
                  <a href="#">
                    <img src="images/icon22.jpg" alt="" />
                  </a>
                  <span className="enq01">
                    <a href="#">Call For Enquiry</a>
                  </span>
                </div>
                <div className="pro_desc">
                  <a href="#">Product name show here</a>
                  <p>Rs.40.00 </p>
                  <span className="pro_line">
                    <strong></strong>
                  </span>
                </div>
              </div>

              <div className="product_box">
                <div className="pro_image">
                  <a href="#">
                    <img src="images/icon21.jpg" alt="" />
                  </a>
                  <span className="enq01">
                    <a href="#">Call For Enquiry</a>
                  </span>
                </div>
                <div className="pro_desc">
                  <a href="#">Product name show here</a>
                  <p>Rs.40.00 </p>
                  <span className="pro_line">
                    <strong></strong>
                  </span>
                </div>
              </div>

              <div className="product_box">
                <div className="pro_image">
                  <a href="#">
                    <img src="images/icon20.png" alt="" />
                  </a>
                  <span className="enq01">
                    <a href="#">Call For Enquiry</a>
                  </span>
                </div>
                <div className="pro_desc">
                  <a href="#">Product name show here</a>
                  <p>Rs.40.00 </p>
                  <span className="pro_line">
                    <strong></strong>
                  </span>
                </div>
              </div>

              <div className="product_box">
                <div className="pro_image">
                  <a href="#">
                    <img src="images/icon18.png" alt="" />
                  </a>
                  <span className="enq01">
                    <a href="#">Call For Enquiry</a>
                  </span>
                </div>
                <div className="pro_desc">
                  <a href="#">Product name show here</a>
                  <p>Rs.40.00 </p>
                  <span className="pro_line">
                    <strong></strong>
                  </span>
                </div>
              </div>

              <div className="product_box">
                <div className="pro_image">
                  <a href="#">
                    <img src="images/icon17.jpg" alt="" />
                  </a>
                  <span className="enq01">
                    <a href="#">Call For Enquiry</a>
                  </span>
                </div>
                <div className="pro_desc">
                  <a href="#">Product name show here</a>
                  <p>Rs.40.00 </p>
                  <span className="pro_line">
                    <strong></strong>
                  </span>
                </div>
              </div>

              <div className="product_box">
                <div className="pro_image">
                  <a href="#">
                    <img src="images/icon16.JPG" alt="" />
                  </a>
                  <span className="enq01">
                    <a href="#">Call For Enquiry</a>
                  </span>
                </div>
                <div className="pro_desc">
                  <a href="#">Product name show here</a>
                  <p>Rs.40.00 </p>
                  <span className="pro_line">
                    <strong></strong>
                  </span>
                </div>
              </div>

              <div className="product_box">
                <div className="pro_image">
                  <a href="#">
                    <img src="images/icon19.png" alt="" />
                  </a>
                  <span className="enq01">
                    <a href="#">Call For Enquiry</a>
                  </span>
                </div>
                <div className="pro_desc">
                  <a href="#">Product name show here</a>
                  <p>Rs.40.00 </p>
                  <span className="pro_line">
                    <strong></strong>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--Our Products END--> */}

        <div className="small_banner">
          <div className="container">
            <div className="row rellati res_padd">
              <h1>If you have any quary please fell free to contact us</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              <a href="#">Contact Us</a>
            </div>
          </div>
        </div>
        
        {/* <!--Latest Products--> */}
        <div className="latest_products">
          <div className="container">
            <div className="row rellati">
              <div className="lp_product"></div>

              <h1>Latest Products</h1>
              <h3>Shoping made easy or some caption text show here</h3>
              <img src="images/icon05.jpg" alt="" />

              <div className="linee"></div>

              {/* <div
                id="latest_product_slider"
                className="owl-carousel testimonial-carousel-main rounded_pro"
              > */}
              <OwlCarousel id="latest_product_slider" className='owl-carousel testimonial-carousel-main rounded_pro' loop nav>
                <div className="item">
                  <div className="lp_round">
                    <a href="#">
                      <img src="images/icon30.jpg" alt="" />
                    </a>
                  </div>
                  <a href="#">Product name show here</a>
                  <p>Rs.40.00 </p>
                  <a href="#" className="inqq">
                    Call For Enquiry
                  </a>
                </div>

                <div className="item">
                  <div className="lp_round">
                    <a href="#">
                      <img src="images/icon29.png" alt="" />
                    </a>
                  </div>
                  <a href="#">Product name show here</a>
                  <p>Rs.40.00 </p>
                  <a href="#" className="inqq">
                    Call For Enquiry
                  </a>
                </div>

                <div className="item">
                  <div className="lp_round">
                    <a href="#">
                      <img src="images/icon28.jpg" alt="" />
                    </a>
                  </div>
                  <a href="#">Product name show here</a>
                  <p>Rs.40.00 </p>
                  <a href="#" className="inqq">
                    Call For Enquiry
                  </a>
                </div>

                <div className="item">
                  <div className="lp_round">
                    <a href="#">
                      <img src="images/icon27.jpg" alt="" />
                    </a>
                  </div>
                  <a href="#">Product name show here</a>
                  <p>Rs.40.00 </p>
                  <a href="#" className="inqq">
                    Call For Enquiry
                  </a>
                </div>

                <div className="item">
                  <div className="lp_round">
                    <a href="#">
                      <img src="images/icon26.jpg" alt="" />
                    </a>
                  </div>
                  <a href="#">Product name show here</a>
                  <p>Rs.40.00 </p>
                  <a href="#" className="inqq">
                    Call For Enquiry
                  </a>
                </div>

                <div className="item">
                  <div className="lp_round">
                    <a href="#">
                      <img src="images/icon30.jpg" alt="" />
                    </a>
                  </div>
                  <a href="#">Product name show here</a>
                  <p>Rs.40.00 </p>
                  <a href="#" className="inqq">
                    Call For Enquiry
                  </a>
                </div>

                <div className="item">
                  <div className="lp_round">
                    <a href="#">
                      <img src="images/icon29.png" alt="" />
                    </a>
                  </div>
                  <a href="#">Product name show here</a>
                  <p>Rs.40.00 </p>
                  <a href="#" className="inqq">
                    Call For Enquiry
                  </a>
                </div>

                <div className="item">
                  <div className="lp_round">
                    <a href="#">
                      <img src="images/icon28.jpg" alt="" />
                    </a>
                  </div>
                  <a href="#">Product name show here</a>
                  <p>Rs.40.00 </p>
                  <a href="#" className="inqq">
                    Call For Enquiry
                  </a>
                </div>

                <div className="item">
                  <div className="lp_round">
                    <a href="#">
                      <img src="images/icon27.jpg" alt="" />
                    </a>
                  </div>
                  <a href="#">Product name show here</a>
                  <p>Rs.40.00 </p>
                  <a href="#" className="inqq">
                    Call For Enquiry
                  </a>
                </div>

                <div className="item">
                  <div className="lp_round">
                    <a href="#">
                      <img src="images/icon26.jpg" alt="" />
                    </a>
                  </div>
                  <a href="#">Product name show here</a>
                  <p>Rs.40.00 </p>
                  <a href="#" className="inqq">
                    Call For Enquiry
                  </a>
                </div>

                <div className="item">
                  <div className="lp_round">
                    <a href="#">
                      <img src="images/icon30.jpg" alt="" />
                    </a>
                  </div>
                  <a href="#">Product name show here</a>
                  <p>Rs.40.00 </p>
                  <a href="#" className="inqq">
                    Call For Enquiry
                  </a>
                </div>

                <div className="item">
                  <div className="lp_round">
                    <a href="#">
                      <img src="images/icon29.png" alt="" />
                    </a>
                  </div>
                  <a href="#">Product name show here</a>
                  <p>Rs.40.00 </p>
                  <a href="#" className="inqq">
                    Call For Enquiry
                  </a>
                </div>

                <div className="item">
                  <div className="lp_round">
                    <a href="#">
                      <img src="images/icon28.jpg" alt="" />
                    </a>
                  </div>
                  <a href="#">Product name show here</a>
                  <p>Rs.40.00 </p>
                  <a href="#" className="inqq">
                    Call For Enquiry
                  </a>
                </div>

                <div className="item">
                  <div className="lp_round">
                    <a href="#">
                      <img src="images/icon27.jpg" alt="" />
                    </a>
                  </div>
                  <a href="#">Product name show here</a>
                  <p>Rs.40.00 </p>
                  <a href="#" className="inqq">
                    Call For Enquiry
                  </a>
                </div>

                <div className="item">
                  <div className="lp_round">
                    <a href="#">
                      <img src="images/icon26.jpg" alt="" />
                    </a>
                  </div>
                  <a href="#">Product name show here</a>
                  <p>Rs.40.00 </p>
                  <a href="#" className="inqq">
                    Call For Enquiry
                  </a>
                </div>
              </OwlCarousel>
              {/* </div> */}
            </div>
          </div>
        </div>
        {/* <!--Latest Products--> */}
       
        <Footer />
      </div>
      {/* <!--wrapper end--> */}

      <a href="#top" id="toTop"></a>

      {/* <!--category menu--> */}
    </>
  );
};

export default HomePage;
