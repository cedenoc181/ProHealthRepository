import React, { useState, useEffect } from "react";
import { FallingLines } from "react-loader-spinner";

function AUTHPDF({metro}) {

  const [overview, setOverview] = useState(true);

  const [isLoading, setIsLoading] = useState(false);


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

  return (
    <div className="container">
 <div className="grid">
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
              <p className="image-label"> </p>
              <img
                className="img-thumbnail shadow-2xl hover:border-blue-500 cursor-pointer"
                src=""
                alt=""
                onClick={handleClick}
              />
            </div>
          ) : (
            <div>
              <iframe
                title=""
                id=""
                style={{ border: "1px" }}
                src={metro}
                frameborder="1"
                height="650"
                width="800"
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

export default AUTHPDF