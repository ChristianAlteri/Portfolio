import { height, minHeight } from "@mui/system";
import React from "react";
import BaseLayout from "../layouts/BaseLayout";

export default function About () {
    return (
        <BaseLayout>
            <div className="d-flex row justify-content-center">
                <div className="mt-4 col-6 text-center bg-dark text-light rounded ">
                    <h1>Tim Obrien</h1>
                    <p>I am a junior web developer working at Dapth</p>
                    <img src="/images/me.jpeg" className="w-100"></img>
                </div>
            </div>
        
        </BaseLayout>
    )
}