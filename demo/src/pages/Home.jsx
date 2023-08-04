import React from 'react'
import HeroIntro from '../containers/Home/HeroIntro'
import BaseLayout from '../layouts/BaseLayout'
import css from "./Home.module.css"

export default function Home() {
    // header (in the layout)

    // hero
    <div>Home</div>

    return (
        <BaseLayout>


            <section className={css.hero}>
                <HeroIntro/>
            </section>
            
        </BaseLayout>

    )
    // Footer (in the layout)
}