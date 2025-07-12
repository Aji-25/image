import { assets } from "../assets/assets";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";

export default function Login(){
    useEffect(()=>{
        document.body.style.overflow = 'hidden'
    },[])
    const [state, setState] = useState('Login');
    const {setShowLogin} = useContext(AppContext)
    return(
        <div className="fixed top-0 left-0 right-0 bottom-0 z-10 backdrop-blur-sm bg-black/30 flex justify-center items-center">
            <form className="relative bg-white p-10 rounded-xl text-slate-500">
                <h1 className="text-center text-2xl text-neutral-700 font-medium mb-2">{state}</h1>
                <p className="text-sm text-center">Welcome back !</p>
                <p className="text-sm text-center">{`Please ${state} to continue`}</p>

                {state === 'Sign Up' && (
                    <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
                    <img src={assets.user_icon}/>
                    <input className='outline-none text-sm' type="text" placeholder="Full Name" required/>
                </div>
                )}

                <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
                    <img src={assets.email_icon}/>
                    <input className='outline-none text-sm' type="email" placeholder="your@gmail.com" required/>
                </div>

                <div className="border px-6 py-2 flex items-center gap-2 rounded-full mt-4">
                    <img src={assets.lock_icon}/>
                    <input className='outline-none text-sm' type="password" placeholder="Password" required/>
                </div>

                <p className="text-sm text-blue-600 mt-4 mb-2 cursor-pointer">Forgot password?</p>
                <button className="bg-blue-600 w-full text-white py-2 rounded-full">{state === 'Sign Up' ? 'Create Account' : 'Login'}</button>

                {state ==='Sign Up' &&(
                    <p className="mt-5 text-center">Already have an account ?
                <span onClick={()=>{setState('Login')}} className="text-blue-600 cursor-pointer"> Login</span></p>
                )}
                {state === 'Login' && (
                    <p className="mt-5 text-center">Don't have an account ?
                    <span onClick={()=>{setState('Sign Up')}} className="text-blue-600 cursor-pointer"> Sign Up</span></p>
                )}
                

                

                <img src={assets.cross_icon} onClick={()=>{setShowLogin(false)}} className="absolute top-5 right-5 cursor-pointer"/>
            </form>
        </div>
    )
}