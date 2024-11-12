import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faBullseye,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import Fade from "react-reveal/Fade";

const AboutCompany = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full lg:h-screen mx-auto text-gray-700">
      <Fade bottom>
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <FontAwesomeIcon icon={faStore} className="mr-2 text-green-600" />
          About Evan Store
        </h2>
        <p className="mb-4">
          Welcome to Evan Store! We are an e-commerce shop dedicated to
          providing high-quality products that meet your needs and enhance your
          lifestyle. At Evan Store, we prioritize customer satisfaction,
          offering a curated selection of items with excellent service.
        </p>
      </Fade>

      <Fade left>
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2 flex items-center">
          <FontAwesomeIcon icon={faBullseye} className="mr-2 text-blue-600" />
          Our Mission
        </h3>
        <p className="mb-4">
          To offer a diverse range of quality products at competitive prices,
          creating a seamless and enjoyable shopping experience for our
          customers.
        </p>
      </Fade>

      <Fade right>
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2 flex items-center">
          <FontAwesomeIcon icon={faEye} className="mr-2 text-purple-600" />
          Our Vision
        </h3>
        <p className="mb-4">
          To be a trusted e-commerce destination known for quality,
          affordability, and outstanding customer experiences.
        </p>
      </Fade>

      <Fade bottom>
        <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2 flex items-center">
          <FontAwesomeIcon icon={faHeart} className="mr-2 text-red-600" />
          Our Values
        </h3>
        <ul className="list-disc list-inside space-y-2">
          <li>Customer satisfaction and service</li>
          <li>Quality and affordability</li>
          <li>Innovation in product selection</li>
          <li>Integrity and transparency</li>
        </ul>
      </Fade>
    </div>
  );
};

export default AboutCompany;
