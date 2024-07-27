import React from "react"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faX } from "@fortawesome/free-solid-svg-icons";

export default function PasswordInput({title,forgotRequired,data,handleChange,checkRequired,checkMarkStatus})
{
    return(
        <>
            <div className="w-full mt-5">
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                        {title}
                    </label>
                    {
                        forgotRequired?
                            <div className="text-sm">
                                <Link to='/reset' className="font-semibold text-gray-800 hover:text-gray-600">
                                Forgot Password
                                </Link>
                            </div>:""
                    }
                    {
                        checkRequired?
                            checkMarkStatus===true?
                                <FontAwesomeIcon icon={faCheck}/>
                            :
                            checkMarkStatus===false?
                                <FontAwesomeIcon icon={faX}/>
                            :""
                        :""
                    }
                </div>
                <div className="mt-2">
                    <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required={true}
                    value={data}
                    onChange={(e)=>handleChange(e)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-400 sm:text-sm sm:leading-6"
                    />
                </div>
            </div>
        </>
    )
}