import React from 'react'
import { FiGithub, FiInstagram, FiFacebook, FiTwitter } from "react-icons/fi";


const Footer = () => {
    return (
        <>
            <div className="container-fluid">
                <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-3 border-top">
                    <p className="col-md-4 mb-0 text-muted">&copy; Copyright  Act 2022   made by  Santosh Gajurel  </p>

                <FiGithub/>
                <FiInstagram/>
                <FiFacebook/>
                <FiTwitter/>
                <p>         </p>

                  
                </footer>
            </div>
        </>
    )
}

export default Footer