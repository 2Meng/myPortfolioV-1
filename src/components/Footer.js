import React from "react";

function Footer () {
    return(
        <footer className="md:flex md:items-center md:justify-between text-4xl sticky bottom-0">
            <div>
                <a className="ml-40" href="https://github.com/2Meng" target="_blank" rel="noreferer"><i class="fa-brands fa-github"></i></a>
                <a className="ml-6" href="https://www.linkedin.com/in/toumeng-yang-b78016193/" target="_blank" rel="noreferer"><i class="fa-brands fa-linkedin"></i></a>
            </div>

            <span className="text-2xl mr-40">Email: Tyan1401@gmail.com</span>
        </footer>
    )
}

export default Footer;