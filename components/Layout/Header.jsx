import Image from 'next/image'
import Link from 'next/link'


const Header = () => {
    return(
        <div className='h-[100px] w-[1440px] flex mb-6 font-inter'>
            <Image src='/logo.png' width='90' height='55' className=' mt-[23px] mb-[22.31px] ml-[120px] mr-[488px]'   alt=''/>
            <div className=' w-[696px] h-[100px] mr-24 flex'>
                <Link href='/'><p className="mt-[40px] mb-[41px] w-[46px] h-[19px] font-[600px]">Home</p></Link>
                <Link href='/about'><p className="ml-[39px] mt-[40px] mb-[41px] w-[71px] h-[19px]">About Us</p></Link>
                <Link href='/properties'><p className="ml-[40px] mt-[40px] mb-[41px] w-[79px] h-[19px]">Properties</p></Link>
                <Link href='/contact'><p className="ml-[40px] mt-[40px] mb-[41px] w-[85px] h-[19px]">Contact Us</p></Link>
                <Link href='/login'><p className="w-[42px] h-[19px] ml-[40px] mt-[40px] mb-[41px]">Login</p></Link>
                <Link href='/sign-up' className='mt-[30px] ml-[40px] mb-[31px] mr-[119px] text-white bg-orange-500 rounded-[4px]'><button className="w-[101px] h-[39px] px-[20px] py-[10px]">Sign Up</button></Link>
            </div>
        </div>
    )
}

export default Header