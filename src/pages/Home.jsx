    import React from 'react'
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

    const Home = () => {
      return (
        <div>
          <div className="">
            <div className="static-hero d-none">
              <div className="position-relative">
                <img
                  className="img-fluid"
                  src="/images/slide-img-1.webp"
                  alt="Hero Image"
                />
                <div className="container">
                  <div className="slide-text">
                    <h4 className="fw-bold m-0">NEW ARRIVALS</h4>
                    <span className="title-1">NEW STYLE</span>
                    <br />
                    <span className="slide-1-title-2">htmlFor LAMP</span>
                    <p className="fs-5 slide-1-para">
                      Elegant modern lamp that adds warm ambient lighting to any
                      space.
                    </p>
                    <a href="./shop.html" className="btn shop-btn">
                      SHOP NOW
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Swiper
              modules={[Navigation, Autoplay]}
              navigation
              autoplay={{ delay: 3000 }}
              loop={true}
              className="swiper"
            >
              
              <SwiperSlide>
                <div className="position-relative">
                  <img
                    className="img-fluid lamp-img"
                    src="/images/slide-img-1.webp"
                    alt="img"
                  />
                  <div className="container">
                    <div className="slide-text">
                      <h4 className="fw-bold m-0">NEW ARRIVALS</h4>
                      <span className="title-1">NEW STYLE</span>
                      <br />
                      <span className="slide-1-title-2">FOR LAMP</span>
                      <p className="fs-5 slide-1-para">
                        Elegant modern lamp that adds warm ambient lighting to
                        any space.
                      </p>
                      <a href="./shop.html" className="btn shop-btn">
                        SHOP NOW
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>

              
              <SwiperSlide>
                <div className="position-relative">
                  <img
                    className="img-fluid"
                    src="/images/slide-img-2.webp"
                    alt="img"
                  />
                  <div className="container">
                    <div className="slide-chair-text text-center">
                      <h4 className="fw-bold m-0">TRENDING PRODUCTS</h4>
                      <span className="chair-title-1">WOODEN CHAIR</span>
                      <p className="fs-5 mt-2">
                        Upgrade your space with this sleek and cozy modern
                        chair.
                      </p>
                      <a href="./shop.html" className="btn shop-btn">
                        SHOP NOW
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="container py-4">
            <div className="row g-3 g-sm-4">
              <div className="col-md-4 col-12">
                <div className="img-container">
                  <a href="./shop.html">
                    <img
                      src="/images/hero-img-2.avif"
                      alt=""
                      className=" img-fluid w-100 h-100"
                    />
                  </a>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <a href="./shop.html">
                  <img
                    src="/images/hero-img-3.avif"
                    alt=""
                    className="img-fluid w-100 h-100"
                  />
                </a>
              </div>
              <div className="col-md-4 col-12">
                <a href="./shop.html">
                  <img
                    src="/images/hero-img-1.jpg"
                    alt=""
                    className="img-fluid w-100 h-100"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="container py-5 text-center px-5">
            <div className="mb-5">
              <img
                src="/images/desiner-img.jpg"
                alt="img"
                className="border-0 rounded-circle img-fluid "
              />
            </div>
            <p className="fw-medium fs-5 m-0" style={{ color: "#555555" }}>
              TINNA SWEET
            </p>
            <p className="fw-medium fs-6 mb-3" style={{ color: "#8dc1d0" }}>
              DESIGNER
            </p>

            <p style={{ color: "#6a6a6a" }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam aliquam maxime neque veniam sunt mollitia ut distinctio
              corrupti molestiae doloremque illo, voluptatum voluptas dolores id
              voluptates error sit quod inventore.
            </p>
          </div>
          
        </div>
      );
    }

    export default Home