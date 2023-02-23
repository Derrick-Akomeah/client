import Link from 'next/link'
import Image from "next/image";

const BusinessInformation = ()=>{
    return(
        <div className="flex">
            <div>
                <div className="ml-[120px] mb-[40px] mr-[82px]">
                    <Image src='/back.png' width='49' height='19' alt="" />
                    <h1 className="text-left text-[#FA790F] text-5xl font-semibold mt-[8px]">
                        Mortgage Hub
                    </h1>
                </div>

                <div className=" ml-[120px] flex space-x-[16px] mb-[45px]">
                    <Image src='/miniHouse.png' width='102' height='100' alt="" />
                    <div className="text-left">
                        <h1>Modern Apartment</h1>
                        <p className="text-[#7A7A7A]">East Legon Hills</p>
                        <p className="text-[#7A7A7A]">3 bedroom</p>
                    </div>
                </div>

                <p className="ml-[120px] mb-[16px] text-left text-[#7A7A7A]">Amount Requested: $ 2300</p>
                <p className="ml-[120px] mb-[16px] text-left text-[#7A7A7A]">Lender: Zenith</p>
            </div>

            <div className=" -mt-12 border-l border-[#DADADA] w-[2px] h-[1381px]"/>

            <div className="flex-col ml-[66px] mr-[139px] text-left">
                <p className="w-[231px] h-[29px] mb-[20px] font-semibold text-2xl">
                    Business Information
                </p>
                <p className="w-[678px] h-[52px] mb-[66px] text-xl text-[#7A7A7A]">Donec ac eu diam ipsum donec neque odio. Aliquam faucibus sit elit lacinia ultrices nulla proin.  Dui risus sit sollicitudin vitae facilisi sed neque sagittis
                </p>

                <div className="flex-col">
                    <p className=" text-2xl font-normal mb-[20px]">Employment Details</p>
  
                    <div className="flex space-x-[190px]">
                        <div>
                            <label for="firstName" className="block mb-2 mt-4 text-left text-md  text-black ">
                                Name of Organization
                            </label>
                            <input type="text" id="firstName" className=" text-gray-900 text-sm block w-[240px] p-2.5 border-2 border-gray-200 rounded-sm" required>
                            </input>
                        </div>
                        <div>
                            <label for="firstName" className="block mb-2 mt-4 text-left text-md  text-black">
                                Name of Employer
                            </label>
                            <input type="text" id="firstName" className=" text-gray-900 text-sm block w-[240px] p-2.5 border-2 border-gray-200 rounded-sm" required>
                            </input>
                        </div>
                    </div>
        
                    <label form="firstName" className="block mb-2 mt-4 text-left text-md  text-black">
                        Company Address
                    </label>
                    <input type="text" id="firstName" className=" text-gray-900 text-sm block w-[670px] p-2.5 border-2 border-gray-200 rounded-sm" required>
                    </input>

                    <div className="flex space-x-[190px]">
                        <div>
                            <label form="firstName" className="block mb-2 mt-4 text-left text-md  text-black ">
                                Position Held
                            </label>
                            <input type="text" id="firstName" className=" text-gray-900 text-sm block w-[240px] p-2.5 border-2 border-gray-200 rounded-sm" required>
                            </input>
                        </div>
                        <div>
                            <label form="firstName" className="block mb-2 mt-4 text-left text-md  text-black">
                                Date joined
                            </label>
                            <input type="text" id="firstName" className=" text-gray-900 text-sm block w-[240px] p-2.5 border-2 border-gray-200 rounded-sm" required>
                            </input>
                        </div>
                    </div>

                    <div className="flex space-x-[190px]">
                        <div>
                            <label form="firstName" className="block mb-2 mt-4 text-left text-md  text-black ">
                                Age
                            </label>
                            <input type="text" id="firstName" className=" text-gray-900 text-sm block w-[240px] p-2.5 border-2 border-gray-200 rounded-sm" required>
                            </input>
                        </div>
                        <div>
                            <label form="firstName" className="block mb-2 mt-4 text-left text-md  text-black">
                                Address
                            </label>
                            <input type="text" id="firstName" className=" text-gray-900 text-sm block w-[240px] p-2.5 border-2 border-gray-200 rounded-sm" required>
                            </input>
                        </div>
                    </div>

                    <p className="my-[16px]  font-normal text-base">Proof of Employment</p>
                    <p className="text-[#7A7A7A] font-normal text-base mb-[8px]">
                        Please upload a payslip or any other document as proof.
                    </p>

                    <div className="flex mb-[80px]">
                        <input type="text" id="firstName" className=" text-gray-900 text-sm block w-[290px] p-2.5 border-2 border-gray-200 rounded-sm" required>
                        </input>
                        <div className="bg-orange-500 w-[122px] h-[48px] rounded-r-md">
                            <p className="text-white text-sm font-bold px-[24.5px] py-[14px]">Browse file</p>
                        </div>
                        
                    </div>

                    <div className="flex space-x-[30px]">
                        <Link href='/know-you'>
                            <button className="w-[165px] h-[60px] py-[18px] pl-[41px] pr-[40px] text-orange-500 font-semibold border border-orange-500 rounded-[4px]">
                                Previous
                            </button>
                        </Link>
                        
                        <Link href='/collateral-property' >
                            <button className="w-[165px] h-[60px] py-[18px] px-[45px] text-white font-semibold bg-orange-500 rounded-[4px]">
                                Next
                            </button>
                        </Link>

                    </div>
                </div>
            </div>         
        </div>
    )
}

export default BusinessInformation
    