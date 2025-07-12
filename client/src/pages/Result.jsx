import { useState } from "react";
import { assets } from "../assets/assets";

export default function Result() {
    const [image, setImage] = useState(assets.sample_img_1);
    const [isImageLoaded, setIsImageLoaded] = useState(false);
    const [loading, setLoading] = useState(true);
    const [input, setInput] = useState('');
    function onSubmitHandler(){
        return 0;
    }
    return (
        
        <form className="flex flex-col items-center justify-center min-[90vh]:">
            <div>
                <div className="relative">
                    <img src={image} className="max-w-sm" />
                    <span className={`absolute bottom-0 left-0 h-1 bg-blue-500 ${loading ?  'w-full transition-all duration-[10s]':'w-0'}`}></span>
                </div>
                <p className={!loading ? 'hidden' : ''}>Loading.....</p>
            </div>
            {!isImageLoaded && (
                <div className="flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full">
                <input onChange={(ev)=>setInput(ev.target.value)} value ={input} type="text" placeholder="Describe what you want to generate" className="flex-1 bg-transparent outline-none ml-8 max-sm:w-20 placeholder-color"/>
                <button type="submit" className="bg-zinc-900 px-10 sm:px-16 py-3 rounded-full" onClick={()=> {setIsImageLoaded(true),setLoading(true)}}>Generate</button>
            </div>
            )}
            {!!isImageLoaded && (
                <div className="flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full">
                <p className="bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer" onClick={()=> {setIsImageLoaded(false),setLoading(false)}}>Generate Another</p>
                <a className= "bg-zinc-900 px-10 py-3 cursor-pointer rounded-full" download href={image}>Download</a>
            </div>
            )}
            
        </form>

    )
}