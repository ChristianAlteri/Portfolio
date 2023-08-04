import { useSlotProps } from "@mui/base";
import React from "react";
import Footer from "../components/Footer/footer";
import Navbar from "./nav/Navbar";


export default function BaseLayout(props) {
    return (
        <main>

            {/* header */}
            <Navbar/>
            {/* content */}
            {props.children}

            {/* footer */}
            <Footer/>

        </main>
    )
}