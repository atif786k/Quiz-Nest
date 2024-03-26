import React from 'react'
import "./Sign&Log.css";

function InputField(props){
    return(
        <>
        <div className='inputFeild bg-[#f0f0f0 flex justify-center items-center'>
            <input type={props.type} className='in border-b-2  border-gray-300 text-gray-600' required="required" {...props}/>
            <label htmlFor="" className='lab text-gray-400 bg-opacity-90'>{props.label}</label>
        </div>
        </>
    );
}
export default InputField;