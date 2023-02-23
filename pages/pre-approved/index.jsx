import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Balloons from '../../assets/balloons.png'


const PreApproved = ()=>{
    const [open, setOpen] = React.useState(false);
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
                    <div className="w-[600px] h-[567px] mt-[60px] mx-auto bg-white">
                        <div className=" mr-[192px] pt-[40px]">
                            <h1 className="w-[258px] h-[60px] ml-[193px] text-[32px] text-[#FA790F] font-bold">
                                Congratulations!!
                            </h1>
                            <img className="ml-[220px] w-[182px] h-[182px]" src={Balloons} alt="" />
                            <p className="mt-[45px] ml-[68px] mb-[71px] w-[495px] h-[44px] text-[#FA790F] text-base">Your request has been pre-approved. Kindly check your email to view details. Click <span className="text-[#181D77] underline">here</span> to view full summary
                            </p>

                            <button className="w-[204px] h-[60px] ml-[200px] text-xl font-semibold bg-[#FA790F] text-white">
                                What's next?
                            </button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
export default PreApproved
