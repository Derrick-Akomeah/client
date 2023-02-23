import Image from 'next/image';

const Account = () => {
	return (
		<div className="flex space-x-[24px] font-inter">
			<div className="w-[282px] h-[336px] mt-[42px] ml-[120px] mb-[32px] flex-col rounded-[8px] shadow-lg">
				<div className="w-[282px] h-[56px] flex bg-[#FFF6EF]">
					<Image
						src="/account_circle.png"
						width="20"
						height="20"
						className=" my-[18px] ml-[18px] mr-[12px]"
					/>
					<p className="my-[18.5px] text-[#FA790F]">My Account</p>
				</div>

				<div className="w-[282px] h-[56px] flex">
					<Image
						src="/notifications.png"
						width="20"
						height="20"
						className="my-[18px] ml-[18px] mr-[12px]"
					/>
					<p className="my-[18.5px] text-[#FA790F]">Notifications</p>
				</div>

				<div className="w-[282px] h-[56px] flex">
					<Image
						src="/book.png"
						width="20"
						height="20"
						className="my-[18px] ml-[18px] mr-[12px]"
					/>
					<p className="my-[18.5px] text-[#FA790F]">Bookings</p>
				</div>

				<div className="w-[282px] h-[56px] flex">
					<Image
						src="/paid.png"
						width="20"
						height="20"
						className="my-[18px] ml-[18px] mr-[12px]"
					/>
					<p className="my-[18.5px] text-[#FA790F]">Payments</p>
				</div>

				<div className="w-[282px] h-[56px] flex">
					<Image
						src="/real_estate_agent.png"
						width="20"
						height="20"
						className="my-[18px] ml-[18px] mr-[12px]"
					/>
					<p className="my-[18.5px] text-[#FA790F]">Mortgages</p>
				</div>

				<div className="w-[282px] h-[56px] flex">
					<Image
						src="/star_rate_half.png"
						width="20"
						height="20"
						className="my-[18px] ml-[18px] mr-[12px]"
					/>
					<p className="my-[18.5px] text-[#FA790F]">Saved Properties</p>
				</div>
			</div>

			<div className="w-[895px] h-[402px] mt-[39px] mb-[372px] rounded-[8px] shadow-lg">
				<h1 className="text-[#FA790F] text-left text-3xl font-semibold w-[277px] h-[38px] ml-[24px] my-[24px]">
					Account Overview
				</h1>

				<div className="flex mb-[24px]">
					<p className="text-left ml-[24px] mr-[12px] text-xl font-medium">
						Details
					</p>
					<p className=" text-xs text-[#FA790F] w-[61px] h-[15px] pt-2">
						Edit Profile
					</p>
				</div>

				<div className="flex space-x-[152px] w-[894px] h-[71px] bg-[#FAFAFA]">
					<div className="flex-col ml-[29px] mt-[15px] text-left">
						<p className=" text-xs text-[#A1A1A1] mb-[8px]">Name on Account</p>
						<p>Gilbert Oppong</p>
					</div>

					<div className="flex-col text-left mt-[15px]">
						<p className="text-xs text-[#A1A1A1] mb-[8px]">Email</p>
						<p>gilbertoppong04@gmail.com</p>
					</div>

					<div className="flex-col text-left mt-[15px]">
						<p className="text-xs text-[#A1A1A1] mb-[8px]">Phone Number</p>
						<p>0234727352</p>
					</div>
				</div>

				<p className="mt-[40px] ml-[24px] mb-[8px] text-left text-xs text-[#A1A1A1]">
					Password
				</p>
				<p className="ml-[24px] text-left text-[#FA790F]">Reset Password</p>

				<p className="mt-[40px] ml-[24px] mb-[8px] text-left text-xs text-[#A1A1A1]">
					Best form of contact
				</p>
				<div className="flex mb-[24px]">
					<p className="text-left ml-[24px] mr-[12px] text-xl font-medium">
						Email
					</p>
					<p className=" text-xs text-[#FA790F] w-[61px] h-[15px] pt-2">
						Change
					</p>
				</div>
			</div>
		</div>
	);
};

export default Account;
