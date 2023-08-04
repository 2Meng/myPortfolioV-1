import React from "react";

function About () {
    return(
        <section className="About-section md:flex md:items-center md:justify-center md:flex-col ">
            <div className="about-me max-w-screen-md mt-32 font-medium tracking-wide">
                <h2 className="text-3xl text-center my-10 px-20">About me!</h2>
                <p className="indent-12">I've been aspiring to be a developer for some time but... I never got my toes wet...! Learning to code always felt intimidating which kept me away for so long... But! This year I took the leap of faith and signed myself up for a coding bootcamp for the structure and to make some connections and I can safely say that although it was hard and still is..! It was completely worth it! Throughout this 6 month journey I've learned so much and I'm still learning!</p>
            </div>

            <div className="skills text-4xl mt-80 font-medium bg-white rounded">
                <h2 className="text-3xl text-center my-10 px-20">PLACEHOLDER</h2>
                <ul className="md:flex md:items-center md:justify-center">
                    <li className="mx-5"><img className="my-5 mx-5" src="/imgs/HTML-icon.png" alt="HTML"/></li>
                    <li className="mx-5"><img className="my-5 mx-5" src="/imgs/CSS-icon.png" alt="CSS"/></li>
                    <li className="mx-5"><img className="my-5 mx-5" src="/imgs/js-icon.png" alt="javascript"/></li>
                    <li className="mx-5"><img className="my-5 mx-5" src="/imgs/node-js.png" alt="Node"/></li>
                    <li className="mx-5"><img className="my-5 mx-5" src="/imgs/SQL-icon.png" alt="SQL"/></li>
                    <li className="mx-5"><img className="my-5 mx-5" src="/imgs/React-icon.png" alt="react"/></li>
                </ul>
            </div>
        </section>
    )
}

export default About;