import React from "react";
import {BsCameraFill} from 'react-icons/bs';
import Layout from '../Layout/index';
import './style.css';

const imgs = [
  {Image: "../../assets/item-01.jpg", Name: "Aman"},
  {Image: "../../assets/item-02.jpg", Name: "Mukul Joshi"},
  {Image: "../../assets/item-04.jpg", Name: "Vipesh"},
  {Image: "../../assets/Pradeep verma.jpg", Name: "Karna Singh"}
];

export const Home = () => {
  return (
    <Layout>
      <div className="container">
        {
          imgs.map((item, index) => {
            return (
              <div className="row" key={index}>
                
                <div className="itemDetail">
                  <img src={item.Image} alt={item.Name} />
                  <div style={{marginLeft: '20px'}}>
                    <p style={{fontWeight: 'bold'}}>{item.Name}</p>
                    <p style={{color: 'gray', fontSize: "0.8rem"}}>Hello</p>
                  </div>
                </div>

                <div className="cameraIcon">
                  <BsCameraFill/>
                </div>
              </div>
            )
          })
        }
      </div>
    </Layout>
  );
};
