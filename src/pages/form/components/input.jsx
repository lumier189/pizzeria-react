/* eslint-disable no-unused-vars */
import { useField } from "@unform/core"
import  React, { useEffect, useRef } from "react";


export default function Input({name}){
    const inputRef = useRef(null)
    const { fieldName,registerField,defaultValue,error } = useField(name);

    useEffect(()=>{
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: "value"
        })
    }, [fieldName,registerField]); 


    return(
        <div>
            <input ref={inputRef}  />
             
         {error && <span style={{color:"red"}}>{error}</span>}
        </div>
    )
}