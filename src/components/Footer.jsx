import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa';
const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
            <div>
                <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
                <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut illo nulla magnam corrupti soluta, distinctio enim adipisci ipsam explicabo non eum in corporis eligendi itaque tempore error. Tempore eligendi corporis repudiandae, saepe incidunt natus, quisquam quas quis perspiciatis magni, quibusdam dolor nemo accusantium nulla inventore praesentium. Quae doloremque laboriosam qui!</p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30} />
                    <FaInstagram size={30} />
                    <FaTwitterSquare size={30} />
                    <FaGithubSquare size={30} />
                    <FaDribbbleSquare size={30} />
                </div>
            </div>
            <div className='lg:col-span-2 text-center flex justify-between'>
                <div>
                    <h6 className='text-gray-400 text-xl px-4 md:px-8 font-medium py-2 lg:py-4'>Solutions</h6>
                    <ul>
                        <li className='py-2 text-md '>Analytics</li>
                        <li className='py-2 text-md '>Marketing</li>
                        <li className='py-2 text-md '>Commerce`</li>
                        <li className='py-2 text-md '>Insights</li>
                    </ul>
                </div>
                <div>
                    <h6 className='text-gray-400 text-xl px-4 md:px-8 font-medium py-2 lg:py-4'>Support</h6>
                    <ul>
                        <li className='py-2 text-md '>Pricing</li>
                        <li className='py-2 text-md '>Documentation</li>
                        <li className='py-2 text-md '>Guides</li>
                        <li className='py-2 text-md '>API Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className='text-gray-400 text-xl px-4 md:px-8 font-medium py-2 lg:py-4'>Company</h6>
                    <ul>
                        <li className='py-2 text-md '>About</li>
                        <li className='py-2 text-md '>Blog</li>
                        <li className='py-2 text-md '>Jobs</li>
                        <li className='py-2 text-md '>Press</li>
                        <li className='py-2 text-md '>Careers</li>
                    </ul>
                </div>
                <div>
                    <h6 className='text-gray-400 text-xl px-4 md:px-8 font-medium py-2 lg:py-4'>Legal</h6>
                    <ul>
                        <li className='py-2 text-md '>Claim</li>
                        <li className='py-2 text-md '>Policy</li>
                        <li className='py-2 text-md '>Terms</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer