import React from 'react';
import Link from 'next/link';
import BackLogo from '../../public/back.png';
import Mortgage1 from '../../public/mortgage.png';
import { ReactComponent as ChartLogo } from '../../public/Donut.svg';
import { ReactComponent as Indicator } from '../../public/Indicator.svg';
import { ReactComponent as Indicator1 } from '../../public/Indicator1.svg';
import { ReactComponent as Indicator2 } from '../../public/Indicator2.svg';
import { ReactComponent as Indicator3 } from '../../public/Indicator3.svg';

const Mortgage = () => {
	return (
		<div className=" font-inter">
			<div className="text-left ml-36 mb-16">
				<img src={BackLogo} alt="" />
				<h1 className="text-[#FA790F] text-5xl font-semibold mt-2">
					Mortgage Hub
				</h1>
				<p className=" text-3xl font-semibold mt-16 mb-4">
					Today's mortgage rates
				</p>
				<p className="text-[#7A7A7A] text-lg">
					These rates can change at any time
				</p>

				<div className="flex justify-between w-[900px] my-12">
					<div>
						<h1 className=" text-xl font-semibold">Lender</h1>
						<p className="font-semibold mt-2 mb-4">Zenith</p>
						<p className="font-semibold">Stanbic</p>
					</div>

					<div>
						<h1 className=" text-xl font-semibold">Rate Type</h1>
						<p className=" mt-2 mb-4">30-year fixed</p>
						<p>15-year fixed</p>
					</div>

					<div>
						<h1 className=" text-xl font-semibold">Purchase Rate %</h1>
						<p className=" mt-2 mb-4">3.00</p>
						<p>2.75</p>
					</div>
				</div>

				<div className=" border-t-2 w-[860px] h-[5px] mb-4"></div>

				<p className="text-[#7A7A7A] text-left">Updated 24th November, 2022</p>

				<p className=" w-[160px] h-[56px] px-4 pt-3 mt-3 text-[#FA790F] text-lg border-2 border-orange-500 font-semibold rounded-sm cursor-pointer">
					Shop all rates
				</p>

				<div className=" mt-24">
					<h1 className=" text-3xl font-semibold mb-2">Mortgage Calculator</h1>
					<p className="text-[#7A7A7A] w-[45%]">
						This is to help you calculate the approximate cost to help you
						choose the mortgage that is right for you
					</p>
				</div>
			</div>

			<div className=" flex ml-36 mb-4 space-x-16">
				<div className="w-[40%] h-[380px] border-2 border-gray-100 shadow-md rounded-md">
					<h1 className=" font-semibold text-lg mt-8 text-left pl-24">
						Breakdown (USD)
					</h1>
					<div className="flex space-x-12">
						<div>
							<ChartLogo className="mt-12 ml-16" />
						</div>
						<div className=" pt-16 space-y-6">
							<div className="flex space-x-2">
								<Indicator />
								<p className="-mt-2">Principle &amp; interest (800.00)</p>
							</div>
							<div className="flex space-x-2">
								<Indicator1 />
								<p className="-mt-2">Property Tax (200.00)</p>
							</div>
							<div className="flex space-x-2">
								<Indicator2 />
								<p className="-mt-2">PMI (600.00)</p>
							</div>
							<div className="flex space-x-2">
								<Indicator3 />
								<p className="-mt-2 text-left">
									Homeowner's Insurance (600.00)
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="w-[36%] h-[340px] -mt-6">
					<div className="pl-4 space-x-3">
						<label
							for="firstName"
							className="block mb-2 mt-4 text-left text-md  text-black pl-3"
						>
							Home Price
						</label>

						<input
							type="text"
							id="firstName"
							className=" text-gray-900 text-sm block w-[415px] p-2.5  bg-[#F6F6F6] border border-gray-100"
							required
						></input>

						<label
							for="firstName"
							className="block mb-2 mt-4 text-left text-md  text-black"
						>
							Down Payment
						</label>

						<input
							type="text"
							id="firstName"
							className=" text-gray-900 text-sm block w-[415px] p-2.5  bg-[#F6F6F6] border border-gray-100"
							required
						></input>

						<label
							for="firstName"
							className="block mb-2 mt-4 text-left text-md  text-black"
						>
							Loan Term
						</label>

						<input
							type="text"
							id="firstName"
							className=" text-gray-900 text-sm block w-[415px] p-2.5  bg-[#F6F6F6] border border-gray-100"
							placeholder="-select-one-"
							required
						></input>

						<label
							for="firstName"
							className="block  mt-4 mb-2 text-left text-md  text-black"
						>
							Estimate your credit
						</label>

						<div className="flex">
							<input
								type="radio"
								id="firstName"
								className=" text-gray-900 text-sm  w-[16px] accent-orange-500"
								required
							></input>
							<label
								for="firstName"
								className="text-left text-md  text-black pt-1 pl-1 pr-12"
							>
								Poor
							</label>

							<input
								type="radio"
								id="firstName"
								className=" text-gray-900 text-sm w-[16px] accent-orange-500"
								required
							></input>
							<label
								for="firstName"
								className="block mb-2 text-left text-md  text-black pt-1 pl-1 pr-12"
							>
								Excellent
							</label>

							<input
								type="radio"
								id="firstName"
								className=" text-gray-900 text-sm w-[16px] accent-orange-500"
								required
							></input>
							<label
								for="firstName"
								className="block mb-2 text-left text-md  text-black pt-1 pl-1 pr-12"
							>
								Good
							</label>

							<input
								type="radio"
								id="firstName"
								className="w-[16px]   accent-orange-500"
								required
							></input>
							<label
								for="firstName"
								className="block mb-2 text-left text-md  text-black pt-1 pl-1 pr-12 "
							>
								Fair
							</label>
						</div>
					</div>
				</div>
			</div>

			<div className="flex space-x-24 mb-32">
				<div className="ml-36 mt-36">
					<img className=" w-[500px] h-[480px]" src={Mortgage1} alt="" />
				</div>

				<div className="text-[#093d47]  pt-48 pl-8 text-left  w-[560px]">
					<h1 className="font-bold text-5xl mb-4">
						What <span className="text-orange-500">Next? </span>Get A
						Pre-Approval <span className="text-orange-500">Now</span>
					</h1>

					<p>
						Donec ac eu diam ipsum donec neque odio. Aliquam faucibus sit elit
						laclnia ultrices nulla proin. Dui risus sit solicitudin vitae
						facilisi sed neque sagittis. Mauris euismod mauris et sit. Bibendum
						aenean justo etiam vestibulum duis malesuada arcu semper. Diam
						posuere pellentesque scelerisque pellentesque. Diam orci consequat
						ligula fringila. Id a pellentesque iaculis matttis.
					</p>

					<Link to="/credit-check">
						<p className=" w-[190px] h-[50px] px-2 pt-3 ml-1 mt-8 text-lg text-center text-[#093d47] border-2 border-[#093d47] font-bold rounded-sm cursor-pointer">
							Get pre-approved
						</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Mortgage;
