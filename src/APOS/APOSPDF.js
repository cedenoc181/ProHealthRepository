import React, { useState, useEffect } from "react";
import { FallingLines } from "react-loader-spinner";
// import tp from "./APOS-files/APOS-TP.pdf";
// import tpi from "./APOS-Images/APOS-TP-cover.jpg" 

function APOSPDF({apos}) {

  const [overview, setOverview] = useState(true);

  const [isLoading, setIsLoading] = useState(false);

console.log(apos)
  const handleRevert = () => {
    setOverview(true);
  };

  function handleClick() {
    setIsLoading(true);
  }

  useEffect(() => {
    if (isLoading) {
      // Simulating an asynchronous operation
      setTimeout(() => {
        setIsLoading(false);
        setOverview(false);
      }, 2000); // Simulating a 2-second delay before showing the iframe
    }
  }, [isLoading]);
  console.log();

  return (
    <div className="container">
 <div className="grid flex justify-center">
        <div className="image-container">
          {isLoading ? (
            <FallingLines
              visible={true}
              width="100"
              ariaLabel="Falling-lines-loading"
              color="#0F659C"
            />
          ) : overview ? (
            <div>
              <p className="image-label">{apos.imageAlt}</p>
              <img
                className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
                src={apos.imagePath}
                alt={apos.imageAlt}
                onClick={handleClick}
              />
            </div>
          ) : (
            <div>
              <iframe
                title={apos.imageAlt}
                id={apos.id}
                style={{ border: "1px" }}
                src={apos.PDF_path}
                frameborder="1"
                height="650"
                width="1050"
              ></iframe>
              <button className="close mt-5" onClick={handleRevert}>
                Close
              </button>
            </div>
          )}
         </div>
        </div>



    </div>
  )
}

export default APOSPDF