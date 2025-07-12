import { assets } from "../assets/assets"
import { AppContext } from "../context/AppContext";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";

export default function GenerateButton(){
    const {user, setShowLogin} = useContext(AppContext);
    const navigate = useNavigate();
    function handleClick(){
        if(user){
            navigate('/result');
        }
        else{
            setShowLogin(true)
        }
    }
    return(
        <div className="pb-16 text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16">See the magic. Try now</h1>

            <button onClick={handleClick}  className="inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white m-auto hover:scale-105 transition-all duration-500">
                            Generate Images
                            <img className='h-6'src={assets.star_group} />
                        </button>
        </div>
    )
}