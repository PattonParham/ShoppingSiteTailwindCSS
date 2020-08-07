import React from 'react';
import "../../styles/main.css";
import "./Admin.css";

function Admin(){

    function uploadItem(){

    }

    // function upload(){
    //     let imgCanvas = document.getElementsByClassName("image");
    //     let fileInput = document.getElementById("finput");
    //     let image = new SimpleImage(fileInput);
    //     image.drawTo(imgcanvas);

    // }

    return(

        <div className="row cards flex mb-4">

            <div className="Upload card w-1/3">
                <button className="uploadbutton" onClick={uploadItem}>Upload Item</button>
                <input type="file" multiple="false" accept="image/*" id="finput" onchange="upload()">
                </input>

                <div className="image"></div>
            </div>
            <div className="Messages card w-1/3">
            </div>
            <div className="DirectOrders card w-1/3">
            </div>
        </div>
    );
};

export default Admin;