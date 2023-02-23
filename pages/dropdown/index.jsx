import React from "react";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Account1 from '../../assets/account_circle1.png'
import Dropdown1 from '../../assets/arrow_drop_down.png'
import AccountLogo from '../../assets/account_circle.png'
import Notification from '../../assets/notifications.png'
import Bookings from '../../assets/book.png'
import Payments from '../../assets/paid.png'
import Mortgages from '../../assets/real_estate_agent.png'
import SavedProperties from "../../assets/star_rate_half.png";

function Dropdown() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='w-[186px] h-[44px] px-[20px] py-[10px] border border-orange-500 rounded-[4px] mt-[30px] ml-[40px] mb-[31px] mr-[119px]'>
            <Button className="w-[186px] h-[44px] py-[10px]"
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <div className="flex space-x-[12px] mr-[28px] -mt-[16px]">
                    <img className=" w-[20px] h-[20px]" src={Account1} alt="" />
                    <p className=' text-orange-500 -mt-1 capitalize'>Hi, Gilbert</p>
                    <img className="w-[10px] h-[5px] mt-[6px]" src={Dropdown1} alt="" />
                </div>
            </Button>

            <Menu className="-ml-[20px]"
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <div  className=' w-[222px] h-[360px] -mt-2 rounded-[8px] shadow-sm border-t-[3px] border-orange-500'>
                    <MenuItem  onClick={handleClose} >
                        <Link to='/account'>
                            <div className="h-[36px] flex">
                                <img className="w-[20px] h-[20px] mt-[18px] ml-[8px] mr-[12px]" src={AccountLogo} alt="" />
                                <p className="my-[18.5px] text-[#FA790F] w-[91px] h-[19px]">My Account</p>
                            </div>
                        </Link>
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                        <Link to='/notifications'>
                            <div className="h-[36px] flex">
                                <img className="w-[20px] h-[20px] mt-[18px] ml-[8px] mr-[12px]" src={Notification} alt="" />
                                <p className="my-[18.5px] text-[#FA790F]">Notifications</p>
                            </div>
                        </Link>
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                        <Link to='/visits'>
                            <div className="h-[36px] flex">
                                <img className="w-[16px] h-[20px] mt-[18px] ml-[8px] mr-[12px]" src={Bookings} alt="" />
                                <p className="my-[18.5px] text-[#FA790F]">Bookings</p>
                            </div>
                        </Link>
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                        <Link to='/payments'>
                            <div className=" h-[36px] flex">
                                <img className="w-[21px] h-[21px] mt-[18px] ml-[8px] mr-[12px]" src={Payments} alt="" />
                                <p className="my-[18.5px] text-[#FA790F]">Payments</p>
                            </div>
                        </Link>
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                        <Link to=''>
                            <div className=" h-[36px] flex">
                                <img className="w-[20px] h-[20px] mt-[18px] ml-[8px] mr-[12px]" src={Mortgages} alt="" />
                                <p className="my-[18.5px] text-[#FA790F]">Mortgages</p>
                            </div>
                        </Link>
                    </MenuItem>

                    <MenuItem onClick={handleClose}>
                        <Link to='/saved-properties'>
                            <div className=" h-[36px] flex">
                                <img className="w-[20px] h-[20px] mt-[18px] ml-[8px] mr-[12px]" src={SavedProperties} alt="" />
                                <p className="mt-[18.5px] text-[#FA790F]">Saved Properties</p>
                            </div>
                        </Link>
                    </MenuItem>
                    <MenuItem onClick={handleClose}><button className='mt-[36px] text-center text-red-500 mx-auto'>Log Out</button></MenuItem>
                </div>
            </Menu>
        </div>
    );
}

export default  Dropdown