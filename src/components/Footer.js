import React from "react";
import { BeakerIcon } from '@heroicons/react/24/solid'
import Button from "./Button";

const Footer = () => {
    return(
        <div>
            <h1 className="font-gt text-3xl font-bold underline">
            <BeakerIcon className="h-6 w-6 text-blue-500" />
            Footer a
            <Button value="footer" />
            </h1>
        </div>
    )
}

export default Footer