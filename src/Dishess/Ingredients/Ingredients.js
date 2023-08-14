import axios from "axios";
import { useEffect, useState } from "react";
import duration from '../../Assets/Group 393@2x.jpg'
import { useNavigate } from "react-router";
import refrigeratorr from '../../Assets/Mask Group 20@2x.jpg'
import './ingredients.css'

function Ingredients() {
    const [ingredients, setIngredients] = useState()
   

    const navigate = useNavigate()

    useEffect(() => {
        axios.get('https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1').then(res => {
           
            setIngredients(res.data)
            
        }).catch(err => {
            console.log(err.message)
        })

    }, [])


    return (

        <div className="container-fluid mt-4">
            {/* {location.state.id} */}
            <span className="material-symbols-outlined" role="button" onClick={() => navigate('/')}>
                arrow_back_ios_new
            </span>
            <div className="itemsList  text-wrap ms-5">
                <h1>{ingredients?.name}</h1>
                <p>Mughlai Masala is a style of cookery developed in the Indian Subcontinent by the imperial kitchens of the Mughal Empire.</p>
                <div className="d-flex gap-3"><img alt='duration' src={duration}></img><span>{ingredients?.timeToPrepare}</span></div>
                
            </div>
            {/* <div className="imgls"></div> */}

            <hr className='mt-4 border border-3'></hr>
            <div className="ms-5" >
                <h2>Ingredients</h2>
                <p>For 2 people</p>
                <hr className='mt-4 border border-1' style={{ width: '90%' }}></hr>

                <div className="d-flex flex-column">
                    <h3> Vegetables <span className="material-symbols-outlined"  style={{ fontSize: "22px" }}>
                        arrow_drop_down
                    </span></h3>
                    {ingredients && ingredients.ingredients.vegetables.map((res,index) => (
                        <div className="row justify-content-between mt-2" key={index}>
                            <div className="col-10">
                                <p>
                                    {res.name}
                                </p>
                            </div>
                            <div className="col-2">
                                <p>{res.quantity} {res.quantity.length <=2?<span>Pc</span>:<></>}</p>
                            </div>
                        </div>


                    ))}
                    <h3> Spices <span className="material-symbols-outlined">
                        arrow_drop_down
                    </span></h3>
                    {ingredients && ingredients.ingredients.spices.map((res,index) => (
                        <div className="row justify-content-between mt-2" key={index}>
                            <div className="col-10">
                                <p>
                                    {res.name}
                                </p>
                            </div>
                            <div className="col-2">
                                <p>{res.quantity}</p>
                            </div>
                        </div>


                    ))}
                    <h3> Appliances <span className="material-symbols-outlined">
                        arrow_drop_down
                    </span></h3>
                    <div className="d-flex gap-5">
                        {ingredients && ingredients.ingredients.appliances.map((res,index) => (
                            <div className="mt-2" key={index}>
                                <div className="col-10" >
                                    <img alt="refrigerator" src={refrigeratorr}></img>
                                    <p>
                                        {res.name}
                                    </p>
                                </div>

                            </div>


                        ))}

                    </div>


                </div>
            </div>

        </div>

    )
}
export default Ingredients;