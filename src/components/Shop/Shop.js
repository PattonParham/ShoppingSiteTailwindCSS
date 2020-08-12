import React from 'react';
import "../../styles/main.css";
import "./Shop.css";
import { storage } from "../../firebase";

function Shop(){
    return(



 
        <div className="gridspace flex flex-wrap">
            
            <div className="galleryphoto w-full sm:w-1/2 md:w-1/3 lg:1/3">
            <div className="photo w-1/4" href="https://www.instagram.com/p/Bza8V9Fhr6W/"></div>
            <div className="price w-1/4">
            <div className="description flex">
            <p>
            Peacock Ore in Copper pendant
                </p>
            </div>
            <div className="shopwidget flex">
            <div className="column w-1/2"> <p className="dollars">$100</p></div>
            <div className="column w-1/2">
            <button className="flex mb-2">Message me</button>
            <button className="flex mb-2">Purchase</button>
            </div>
            </div>
            </div>
            </div>

            <div className="galleryphoto w-full sm:w-1/2 md:w-1/3 lg:1/3">
            <div className="photo w-1/4"></div>
            <div className="price w-1/4"></div>
            </div>

            <div className="galleryphoto w-full sm:w-1/2 md:w-1/3 lg:1/3">
            <div className="photo w-1/4"></div>
            <div className="price w-1/4"></div>
            </div>

            <div className="galleryphoto w-full sm:w-1/2 md:w-1/3 lg:1/3">
            <div className="photo w-1/4"></div>
            <div className="price w-1/4"></div>
            </div>

            <div className="galleryphoto w-full sm:w-1/2 md:w-1/3 lg:1/3">
            <div className="photo w-1/4"></div>
            <div className="price w-1/4"></div>
            </div>

            <div className="galleryphoto w-full sm:w-1/2 md:w-1/3 lg:1/3">
            <div className="photo w-1/4"></div>
            <div className="price w-1/4"></div>
            </div>

            <div className="galleryphoto w-full sm:w-1/2 md:w-1/3 lg:1/3">
            <div className="photo w-1/4"></div>
            <div className="price w-1/4"></div>
            </div>

        </div>


    );
};

export default Shop;