/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import group from '../Assets/Group 359@2x.jpg';
import refridge from '../Assets/Group 508@2x.jpg'
import './Dishes.css'
import {  useNavigate } from "react-router-dom";

function Dish(props) {

    const Navigate=useNavigate()
    const navigate=()=>{
        Navigate('/Ingredients')
    }
    return (

        <div className=" container-fluid mt-4 ">
            <div className="dishesHeading">
                <h2>Recommended <span  style={{ fontSize: "30px" }}className="material-symbols-outlined">
arrow_drop_down
</span></h2>
                <button className="btn btn-dark float-end">Menu</button>
            </div>
            {props.data[1].map(each => (
                <React.Fragment key={each.id} >
                    <div className="dishesList">
                        <div className="">
                            <div className="d-flex align-items-baseline   gap-md-3  ps-sm-1 ps-xs-1  ">
                                <h3 className="headingone">{each.name}</h3><img alt='Vegetariian' className='groupImage' src={group}></img>
                                <button className="btn btn-success btn-xs ratingBtn">{each.rating}<span className=" star material-symbols-outlined">
                                    star_rate
                                </span></button>
                            </div>
                            <div className="d-flex align-items-baseline gap-md-3   gap-sm-1 gap-xs-1  ps-sm-1 ps-xs-1 flex-column  "  >
                                <div className="d-flex mt-4 gap-5 ps-sm-0">
                                    {each.equipments.length === 1 ?
                                        <img alt='Equipments' src={refridge} className="refridgeImage ms-4 ps-sm-1 ps-xs-1"></img>
                                        : <>
                                            <img alt='Equipments' src={refridge} className="refridgeImage ms-md-3  ms-sm-1 ms-xs-1   ps-sm-1 ps-xs-1"></img>
                                            <img alt='Equipments' src={refridge} className="refridgeImage ms-md-3  ms-sm-1 ms-xs-1   ps-sm-1 ps-xs-1"></img>
                                        </>

                                    }
                                    <div style={{ borderLeft: "2px solid #ddd", position: "relative", }} className="ps-4 ">
                                        <h5 className="headingtwo">Ingredients</h5>
                                        {/* <a>View List</a> */}
                                        <span className="viewbtn  ms-md-2 mt-md-0 ms-sm-2 ms-xs-2"   role="button"onClick={()=>navigate()}>View List<span  className="position-absolute material-symbols-outlined">
                                            chevron_right
                                        </span></span>
                                        
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h4 className="equipments">{each.equipments[0]}</h4>
                                    <h4 className="equipments ms-3 ">{each.equipments[1]}</h4>

                                </div>

                            </div>

                            <div>
                                <p className="description semibold">{each.description}</p>
                            </div>
                             
                        </div>
                        
                        <div className="addButton" style={{ position: "relative" }}>
                            <img className='dishesListImage' alt='item' src={each.image}></img>
                            <button className='btn btn-light selected addbtn' role="button">Add</button>
                        </div>
                    </div>
                    
                    <hr className='mt-4 border border-1'></hr>

                </React.Fragment>
            ))}

{props.data[1].map(each => (
                <React.Fragment key={each.id} >
                    <div className="dishesList">
                        <div className="">
                            <div className="d-flex align-items-baseline   gap-md-3  ps-sm-1 ps-xs-1  ">
                                <h3 className="headingone">{each.name}</h3><img alt='Vegetariian' className='groupImage' src={group}></img>
                                <button className="btn btn-success btn-xs ratingBtn">{each.rating}<span className=" star material-symbols-outlined">
                                    star_rate
                                </span></button>
                            </div>
                            <div className="d-flex align-items-baseline gap-md-3   gap-sm-1 gap-xs-1  ps-sm-1 ps-xs-1 flex-column  "  >
                                <div className="d-flex mt-4 gap-5 ps-sm-0">
                                    {each.equipments.length === 1 ?
                                        <img alt='Equipments' src={refridge} className="refridgeImage ms-4 ps-sm-1 ps-xs-1"></img>
                                        : <>
                                            <img alt='Equipments' src={refridge} className="refridgeImage ms-md-3  ms-sm-1 ms-xs-1   ps-sm-1 ps-xs-1"></img>
                                            <img alt='Equipments' src={refridge} className="refridgeImage ms-md-3  ms-sm-1 ms-xs-1   ps-sm-1 ps-xs-1"></img>
                                        </>

                                    }
                                    <div style={{ borderLeft: "2px solid #ddd", position: "relative", }} className="ps-4 ">
                                        <h5 className="headingtwo">Ingredients</h5>
                                        {/* <a>View List</a> */}
                                        <span className="viewbtn  ms-md-2 mt-md-0 ms-sm-2 ms-xs-2"   role="button"onClick={()=>navigate()}>View List<span  className="position-absolute material-symbols-outlined">
                                            chevron_right
                                        </span></span>
                                        
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h4 className="equipments">{each.equipments[0]}</h4>
                                    <h4 className="equipments ms-3 ">{each.equipments[1]}</h4>

                                </div>

                            </div>

                            <div>
                                <p className="description semibold">{each.description}</p>
                            </div>
                             
                        </div>
                        
                        <div className="addButton" style={{ position: "relative" }}>
                            <img className='dishesListImage' alt='item' src={each.image}></img>
                            <button className='btn btn-light selected addbtn' role="button">Add</button>
                        </div>
                    </div>
                    
                    <hr className='mt-4 border border-1'></hr>

                </React.Fragment>
            ))}


        </div>

    )
}
export default Dish;