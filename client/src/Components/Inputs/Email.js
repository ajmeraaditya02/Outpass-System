import React from "react";

export default function EmailInput({data, handleChange}){
    return(
        <>
            <div className="w-full">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                    Email address
                </label>
                <div className="mt-2">
                    <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    pattern="[a-z0-9._]+@lnmiit.ac.in"
                    value={data}
                    onChange={e=>handleChange(e)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>  
        </>
    )
}