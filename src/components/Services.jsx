import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Services = () => {
  return (
    <div className="services">
      <Carousel
        infiniteLoop
        autoPlay
        showArrows={false}
        showStatus={false}
        interval={1000}
      >
        <div>
          <img
            src="https://images.unsplash.com/photo-1621839673705-6617adf9e890?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
            alt=""
          />
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1622679153051-46d6d7a03fa6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHxXaU15Zy1qS2tHZ3x8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>

        <div>
          <img
            src="https://media.istockphoto.com/photos/colorful-background-of-two-colores-blue-and-orange-sheets-of-blank-picture-id1324259263?b=1&k=20&m=1324259263&s=170667a&w=0&h=Equ9rDoV5LEZXva48RHvvIEKpLFEXHe97vZl9p-6xrM="
            alt=""
          />
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1524678714210-9917a6c619c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDh8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>

        <div>
          <img
            src="https://media.istockphoto.com/photos/white-voltage-charger-with-usb-cable-for-phone-and-gadgets-charge-on-picture-id1403069097?k=20&m=1403069097&s=170667a&w=0&h=SQ1PmtdV_ztgmrgSHdJKgiR9uipzs03phUBjr8w9BfE="
            alt=""
          />
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1626460561069-c86d94488bbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
            alt=""
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
