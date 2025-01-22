import React from "react"
import { LuPhone } from "react-icons/lu"
import { BiMessage } from "react-icons/bi"
import { IoLogoInstagram } from "react-icons/io5"
import { FiYoutube } from "react-icons/fi"
import { FaFacebook } from "react-icons/fa"
import { CiTwitter } from "react-icons/ci"

export default function HomeHeader(){
    return(
        <div className="w-full bg-[#252842] h-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center">
                        {/* Contact Info */}
                        <div className="flex flex-wrap items-center text-white text-sm space-x-4 mb-2 md:mb-0">
                            <div className="flex items-center space-x-1">
                                <LuPhone />
                                <h6 className="font-bold">(225) 555-0118</h6>
                            </div>
                            <div className="flex items-center space-x-1">
                                <BiMessage />
                                <h6 className="font-bold">michelle.rivera@example.com</h6>
                            </div>
                        </div>
        
                        {/* Follow Us Text */}
                        <div className="text-white text-center text-sm font-bold mb-2 md:mb-0">
                            Follow Us and get a chance to win 80% off
                        </div>
        
                        {/* Social Icons */}
                        <div className="flex items-center text-white space-x-3">
                            <span className="font-bold">Follow Us:</span>
                            <div className="text-lg"><IoLogoInstagram /></div>
                            <div className="text-lg"><FiYoutube /></div>
                            <div className="text-lg"><FaFacebook /></div>
                            <div className="text-lg"><CiTwitter /></div>
                        </div>
                    </div>
    )
}