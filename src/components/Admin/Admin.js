import React from 'react';
import "../../styles/main.css";
import "./Admin.css";
// import { storage } from "../../firebase";
// import {state, useState} from "react";

function Admin(){

    // const [image, setImage] = useState(null);
    // const [url, setUrl] = useState("");
    // const [progress, setProgress] = useState(0);

    // const handleChange = e => {
    //     if (e.target.files[0]){
    //         setImage(e.target.files[0]);
    //     }
    // };

    // const handleUpload = () => {
    //     const uploadTask = storage.ref(`images/${image.name}`).put(image);
    //     uploadTask.on(
    //         "state_changed",
    //         snapshot => {
    //             const progress = Math.round(
    //                 (snapshot.bytestTransferred / snapshot.totalBytes) * 100
    //             );
    //         },
    //         error => {
    //             console.log(error);
    //         },
    //         () => {
    //             storage
    //             .ref("images")
    //             .child(image.name)
    //             .getDownloadURL()
    //             .then(url => {
    //                 setUrl(url);
    //             });
    //         }
    //     )
    // };

    // console.log("image: ", image);

    return(

        <div className="row cards flex mb-4">

            <div className="Upload card w-1/3">

                
               
                {/* <input type="file" multiple="false" accept="image/*" id="finput" onchange="upload()">
                </input> */}

                <div className="image"></div>
            </div>
            <div className="Messages card w-1/3">

            {/* <button className="uploadbutton" onClick={handleUpload} type="file" >Upload Item</button>
            <div id="fileinupt" className="">
            <input  type="file"  className="w-full" onChange={handleChange}></input>
            <progress value={progress} max="100"></progress>
            {url}
            <img src={url} alt="firebase-image"></img>
            </div> */}


                
            </div>
            <div className="DirectOrders card w-1/3">
            </div>
        </div>
    );
};

export default Admin;