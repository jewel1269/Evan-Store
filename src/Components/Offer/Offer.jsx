import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";

const Offer = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center p-4 bg-white rounded-lg shadow-md text-gray-500">
      <FontAwesomeIcon icon={faGift} size="2x" className="mb-2" />
      <p className="text-lg font-semibold">No offers available</p>
    </div>
  );
};

export default Offer;
