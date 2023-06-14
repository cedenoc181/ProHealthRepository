import React from 'react';
import "./APOS.css";
import APOSPDF from "./APOSPDF";
// import data from "..db.json";
// import APOSImages from "./APOS-Images";

function APOS({files}) {

  // const AposImages = require.context("./APOS-Images", true);
  // const AposFiles = require.context("./APOS-files", true);
  // const imageList = AposImages.keys().map(image => AposImages(image));
  // const fileList = AposFiles.keys().map(file => AposFiles(file));


// const [files, setFiles] = useState(data);
// const [images, setImages] = useState(APOSImages);
console.log(files);

  // try stack overflow solution to map through both arrays at the same time 

  return (
    <div className="apos bg-gray-100 w-fill h-screen" id="APOS">
    <div className="Prompt">
          <p className="p-10 font-semibold text-gray-600 text-3xl text-center">
            APOS Therapy PDF's regarding new patient intakes 
             and post 1 year patient evaluations and more in both english and spanish.
          </p>
    </div>  
        { files.map((file) => {
          return(
        <APOSPDF key={file.id} file={file} />
        );
        })}
       

    </div>
  )
}

export default APOS