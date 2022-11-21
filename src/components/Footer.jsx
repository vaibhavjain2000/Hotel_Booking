import React from 'react'
import { FaFacebookSquare,FaLinkedin } from 'react-icons/fa';
import {IoLogoYoutube} from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer id="sticky-footer" className="bg-light text-light-50">
            <div className="container py-1">
                <div className="row">
                    <div className="col-md-6 col-12 my-auto ">
                        <small>Copyright &copy; Spruce Travels</small>
                    </div>
                    <div className="col-md-6 col-12">
                        <div className="d-flex float-right">
                            <a href="https://www.facebook.com/">
                                <FaFacebookSquare className="connect text-dark" /></a>
                            <a href="https://www.linkedin.com/signup">
                                <FaLinkedin className="connect text-dark" /></a>
                            <a href="https://www.instagram.com/?hl=en">
                                <AiFillInstagram className="connect text-dark" /></a>
                            <a href="https://www.youtube.com/">
                                <IoLogoYoutube className="connect text-dark" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer