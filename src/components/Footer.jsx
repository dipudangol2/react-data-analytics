import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='w-screen max-w-[1240px]  mx-auto py-16 px-4 grid lg:grid-cols-3 lg:gap-8 text-gray-300'>
            <div className='w w-full px-4 md:px-0 flex flex-col flex-wrap'>
                <h1 className=' text-3xl font-bold text-[#00df9a]'>REACT.</h1>
                <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut illo nulla magnam corrupti soluta, distinctio enim adipisci ipsam explicabo non eum in corporis eligendi itaque tempore error. Tempore eligendi corporis repudiandae, saepe incidunt natus, quisquam quas quis perspiciatis magni, quibusdam dolor nemo accusantium nulla inventore praesentium. Quae doloremque laboriosam qui!</p>
                <div className='flex justify-between md:w-[75%] my-6 px-4'>
                    <FaFacebookSquare size={30} />
                    <FaInstagram size={30} />
                    <FaTwitterSquare size={30} />
                    <FaGithubSquare size={30} />
                    <FaDribbbleSquare size={30} />
                </div>
            </div>
            <div className='lg:col-span-2 text-center flex justify-between flex-wrap'>
                <div className="w-1/2 md:w-auto">
                    <h6 className='text-white text-xl md:px-8 font-medium py-2 lg:py-4'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-sm '>Analytics</li>
                        <li className='py-2 text-sm '>Marketing</li>
                        <li className='py-2 text-sm '>Commerce</li>
                        <li className='py-2 text-sm '>Insights</li>
                    </ul>
                </div>
                <div className="w-1/2 md:w-auto">
                    <h6 className='text-white text-xl md:px-8 font-medium py-2 lg:py-4'>Support</h6>
                    <ul>
                        <li className='py-2 text-sm '>Pricing</li>
                        <li className='py-2 text-sm '>Documentation</li>
                        <li className='py-2 text-sm '>Guides</li>
                        <li className='py-2 text-sm '>API Status</li>
                    </ul>
                </div>
                <div className="w-1/2 md:w-auto">
                    <h6 className='text-white text-xl md:px-8 font-medium py-2 lg:py-4'>Company</h6>
                    <ul>
                        <li className='py-2 text-sm '>About</li>
                        <li className='py-2 text-sm '>Blog</li>
                        <li className='py-2 text-sm '>Jobs</li>
                        <li className='py-2 text-sm '>Press</li>
                        <li className='py-2 text-sm '>Careers</li>
                    </ul>
                </div>
                <div className="w-1/2 md:w-auto">
                    <h6 className='text-white text-xl md:px-8 font-medium py-2 lg:py-4'>Legal</h6>
                    <ul>
                        <li className='py-2 text-sm '>Claim</li>
                        <li className='py-2 text-sm '>Policy</li>
                        <li className='py-2 text-sm '>Terms</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer