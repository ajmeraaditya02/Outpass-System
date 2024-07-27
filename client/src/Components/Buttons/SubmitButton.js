import React, {useEffect, useState} from "react";

export default function SubmitButton({title, coolingPeriod, width, handleClick, backgroundColor}){
    const [timer, setTimer] = useState(0);
    useEffect(() => {
        if(timer>0)
            setTimeout(()=>{setTimer(timer-1)},1000)
    }, [timer])
    return(
        <>
            <div className={`${width}`} style={{width:width, margin:"auto"}} >
                <button
                    className={`flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700
                    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800`}
                    style={{
                        backgroundColor:backgroundColor?backgroundColor:"#00136d",
                        border:backgroundColor?"2px solid white":"",
                        margin:backgroundColor?"15px 0 0":"",
                        boxShadow:backgroundColor?`0px 0px 3px ${backgroundColor}`:"",
                        opacity:timer>0?0.7:1
                    }}
                    onClick={(e)=>{
                        if(timer===0){
                            setTimer(coolingPeriod === undefined?5:coolingPeriod);
                            handleClick(e);
                        }
                        else{
                            e.preventDefault();
                        }
                    }}
                >
                    {title}
                </button>
            </div>
        </>
    )
}