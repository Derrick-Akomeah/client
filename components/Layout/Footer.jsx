import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

import Image from "next/image"

const Footer = ()=>{
    return(
        <div className="bg-orange-500 h-[530px] pt-36 text-white font-inter">
            <div className="flex space-x-12">
                <div className="pl-8 space-y-4 w-[450px] ml-8">
                    <h1 className="text-3xl text-left font-bold">About</h1>
                    <p className="w-[300px] text-left">Urna rutrum mauris adipiscing sapien ornare eget integer.</p>
                    <div className="text-left space-x-2">
                        <FacebookRoundedIcon className=" bg-orange-500 text-white rounded-xl"/>
                        <TwitterIcon className="text-white border-2 border-white rounded-xl"/>
                        <InstagramIcon className=" text-white bg-orange-500 border-2 rounded-xl"/>
                        <YouTubeIcon className="text-white border-2 border-white rounded-xl" />
                    </div>
                </div>
            
                <div className="space-y-6 w-[300px] text-left">
                    <h1 className="text-3xl font-bold">Services</h1>
                    <div className="flex space-x-2">
                        <ChevronRightOutlinedIcon />
                        <p>List Home</p>
                    </div>
                    
                    <div className="flex space-x-2">
                        <ChevronRightOutlinedIcon />
                        <p>Rent Home</p>
                    </div>

                    <div className="flex space-x-2">
                        <ChevronRightOutlinedIcon />
                        <p>Buy Home</p>
                    </div>

                    <div className="flex space-x-2">
                        <ChevronRightOutlinedIcon />
                        <p>Mortgage Hub</p>
                    </div> 
                </div>
            
                <div className=" space-y-6 w-[350px] pl-8">
                    <h1 className="text-3xl text-left font-bold">Company</h1>
                    <div className="flex space-x-2">
                        <ChevronRightOutlinedIcon />
                        <p>Home</p>
                    </div>
                    
                    <div className="flex space-x-2">
                        <ChevronRightOutlinedIcon />
                        <p>About Us</p>
                    </div>

                    <div className="flex space-x-2">
                        <ChevronRightOutlinedIcon />
                        <p>Properties</p>
                    </div>

                    <div className="flex space-x-2">
                        <ChevronRightOutlinedIcon />
                        <p>FAQ</p>
                    </div>
                </div>
            
                <div className=" space-y-6 pl-8 w-[350px]">
                    <h1 className="text-3xl text-left font-bold">Contact Us</h1>

                    <div className=" space-y-6">
                        <div className="flex space-x-4">
                            <Image src='/contact-location.png' width='32' height='32' className=" text-white" alt=''/>
                            <p>Greater Accra-Tema</p>
                        </div>

                        <div className="flex space-x-4">
                            <Image src='/contact-phone.png' width='32' height='32' className=" text-white" alt=''/>
                            <p>+233 24 006 295</p>
                        </div>

                        <div className="flex space-x-4">
                            <Image src='/contact-email.png' width='32' height='32' className="text-white" alt=''/>
                        </div> 
                    </div>      
                </div>
            </div>
            <div className=" border-t-2 ml-16 my-16 py-8 w-[1400px]">
                © 2022 All Rights Reserved
            </div>
        </div>
    )
}

export default Footer