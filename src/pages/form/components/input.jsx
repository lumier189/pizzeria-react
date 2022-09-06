/* eslint-disable no-unused-vars */
import { useField } from "@unform/core"
import React, { useEffect, useRef } from "react";


export default function Input({ name, placeholder, type }) {
  const inputRef = useRef(null)
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value"
    })
  }, [fieldName, registerField]);
  
  return (
    <div>
      <input className="form-control" placeholder={placeholder} type={type} ref={inputRef} />
      <div>{error && <span style={{ color: "red" }}>{error}</span>}</div>
    </div>
  )
}