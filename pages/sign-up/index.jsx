import Link from 'next/link';
import Image from 'next/image';

const SignUp = () => {
	return (
		<div className="flex font-inter">
			<div className="w-[584px]">
				<Link href={'/'}>
					<Image
						src="/logo.png"
						width="67"
						height="41"
						className="ml-[72px] mt-[44px] mb-[139px]"
						alt=""
					/>
				</Link>
				<p className=" text-[40px] font-bold ml-[203px] mb-[16px]">Hi there!</p>
				<p className="text-[#747A80] text-sm font-light mb-[24px] ml-[226px]">
					Sign up with us here
				</p>

				<input
					className="w-[437px] h-[48px] ml-[70px] mr-[77px] mb-[10px] pl-[8px] border-[1px] border-[#CDCDCF] text-[#ABABAF] text-xs font-light rounded-sm"
					type="text"
					placeholder="Enter full name"
				/>

				<input
					className="w-[437px] h-[48px] ml-[70px] mr-[77px] mb-[10px] pl-[8px] border-[1px] border-[#CDCDCF] text-[#ABABAF] text-xs font-light rounded-sm"
					type="text"
					placeholder="Enter email"
				/>

				<input
					className="w-[437px] h-[48px] ml-[70px] mr-[77px] mb-[10px] pl-[8px] border-[1px] border-[#CDCDCF] text-[#ABABAF] text-xs font-light rounded-sm"
					type="text"
					placeholder="Enter phone number"
				/>

				<div className="flex mb-[19x]">
					<input
						className=" relative w-[437px] h-[48px] ml-[70px] mr-[77px] mb-[10px] pl-[8px] border-[1px] border-[#CDCDCF] text-[#ABABAF] text-xs font-light rounded-sm"
						type="text"
						placeholder="Enter password here"
					/>
					<Image
						src="/hide.png"
						width="20"
						height="24"
						className="absolute w-[20px] h-[24px] left-[470px] bottom-[380px]"
						alt=""
					/>
				</div>

				<div className="flex mb-[19x]">
					<input
						className=" relative w-[437px] h-[48px] ml-[70px] mr-[77px] mb-[10px] pl-[8px] border-[1px] border-[#CDCDCF] text-[#ABABAF] text-xs font-light rounded-sm"
						type="text"
						placeholder="Enter password here"
					/>
					<Image
						src="/hide.png"
						width="20"
						height="24"
						className="absolute w-[20px] h-[24px] left-[470px] top-[480px]"
						alt=""
					/>
				</div>

				<div className="flex space-x-[9px] ml-[70px]">
					<input
						className=" accent-orange-500 border-2 border-[#FA790F]"
						type="checkbox"
					/>
					<p className="w-[328px] h-[19px] mt-2 mb-[8px] text-left text-xs text-[#58575F]">
						By clicking this you hereby accept our{' '}
						<span className="underline text-[#FA790F]">terms & conditions</span>
					</p>
				</div>

				<div className="flex space-x-[9px] ml-[70px] mb-[22px]">
					<input
						className="-mt-2 accent-orange-500 border-2 border-[#FA790F]"
						type="checkbox"
					/>
					<p className="w-[407px] h-[36px]  mb-[8px] text-left text-xs text-[#58575F]">
						Yes, I would love to receive emails with great content and updates.
						(optional)
					</p>
				</div>

				<Link href="/welcome">
					<button className="w-[437px] h-[50px] ml-[70px] mb-[30px] bg-[#FA790F] text-base text-white">
						Sign Up
					</button>
				</Link>

				<p className="w-[219px] h-[21px] ml-[186px] text-sm text-left text-[#818187] mb-[40px]">
					Already have an account?{' '}
					<span className="text-[#FA790F]">Sign In</span>
				</p>

				<div className="flex ml-[70px] mb-[40px]">
					<Image
						width="185"
						height="1"
						className="mr-[31px]"
						src="/Line1.png"
						alt=""
					/>
					<Image
						className="-mt-1"
						width="8"
						height="8"
						src="/EllipseSignUp.png"
						alt=""
					/>
					<Image
						width="185"
						height="1"
						className="ml-[32px]"
						src="/Line2.png"
						alt=""
					/>
				</div>

				<button className="w-[441px] h-[47px] ml-[70px] border-[1px] border-[#FA790F] rounded-tl-[8px] rounded-br-[8px] mb-[103px]">
					<div className="flex">
						<Image
							src="/google.png"
							width="24"
							height="24"
							className="ml-[116px] mt-[11px] mb-[12px]"
							alt=""
						/>
						<p className="ml-[14px] text-left text-xs pt-[15px] pb-[16px]">
							Sign up with Google
						</p>
					</div>
				</button>
			</div>

			<Image width="930" height="1024" src="/transition.gif" alt="" />
		</div>
	);
};

export default SignUp;
