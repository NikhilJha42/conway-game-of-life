"use client";
import "./header.css"

export default function Header({title, description}: any){
    return (
        <div id="header-component">
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}