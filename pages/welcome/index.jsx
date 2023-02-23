import {useState} from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import Image from "next/image";

const Welcome = ()=>{
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box>
                    <div className="relative">
                        <Image className="mx-auto" src='/welcomeCard.png' width='760' height='667' alt="" />
                        <div className="absolute top-[260px] left-[860px]">
                            <div className="flex space-x-2">
                                <h1 className="font-semibold text-3xl text-orange-500">Welcome to HomeHub</h1>
                                <Image src='/love.png' width='43' height='34' alt="" />
                            </div>

                            <Image src='/house-animation.gif' width='184' height='161' className=" ml-16"  alt="" />
                            <p className=" w-[480px] -ml-20 text-orange-500 mt-4">
                                We are so thrilled to have you join the team. Ready to let us guide you home?
                            </p>

                            <p className=" w-[190px] h-[50px] px-2 pt-3 ml-16 mt-8 text-lg text-center text-white bg-orange-500 font-bold rounded-sm cursor-pointer">
                                Let's explore
                            </p>
                        </div>
                    </div>

                </Box>
            </Modal>
        </div>
    );
}
export default Welcome