import { useState } from 'react';
import mehticlogo from './mehticlogo.png';
import pic1 from './pic1.png';
import './index.css';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen)
  return (
    <>
      <nav className="bg-[#fffff] text-[#A9008F]">
        <div className="container mx-auto flex justify-between items-center px-4 py-4 max-w-full">
          <span className="text-2xl font-bold  flex items-center space-x-2">
            <img src={mehticlogo} />
            MehticTechnology
          </span>

          {/* Laptop/Desktop*/}
          <div className="hidden sm:flex space-x-6 lg:space-x-8 ">
            {['Home', 'Product', 'About', 'Career', 'Contact Us'].map((link) => (
              <a key={link} href='#'>
                {link}
              </a>
            ))}
          </div>

          {/* Mobile */}
          <div className='sm:hidden'>
            <button onClick={toggleMenu}>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="sm:hidden px-2 pt-2 pb-3 space-y-1 ">
            {['Home', 'About', 'Services', 'ContactUs'].map((link) => (
              <a
                key={link}
                href="#"
                className="block px-3 py-2 rounded-md text-base font-medium ">
                {link}
              </a>
            ))}
          </div>

        )}
      </nav>

      <div className="bg-gray-200 w-full min-h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] flex flex-col sm:flex-row items-center justify-between px-4 py-6">
        <div>
          <span className="font-bold text-[32px] sm:text-[40px] text-left sm:mr-4 flex-1 text-center text-[#A9008F]">
            Unlock Smarter Financial, Management Tailored For You
          </span>
          <p className='text-[#00000]'>Navigate Your Financial Future with confidence.Our solutions making managing money easier</p>
          <button className='text-[#ffffff] bg-[#A9008F] mt-8 border rounded-md px-6 py-1 '>Contact Us</button>
        </div>
        <img className="w-full sm:w-[50%] md:w-[50%] lg:w-[50%] h-auto mt-4 sm:mt-0" src={pic1} alt="Financial Management" />
      </div>


      <div className='bg-[#000000] mt-8 sm:mt-10 md:mt-12 lg:mt-14 text-white flex flex-col lg:flex-row'>

        <div className='flex flex-col items-start text-left w-full mt-8 lg:w-1/3 space-y-4'>
          <span className="text-2xl font-bold flex items-center space-x-2">
            <img src={mehticlogo} alt="Mehtic Logo" />
            Mehtic Technology
          </span>
          <p className='text-sm sm:text-base md:text-lg lg:text-xl'>
            We are a tech company offering expert technical support, quality service, fast implementation, and proven success in delivering innovative solutions for African businesses in Africa.
          </p>
        </div>

        <div className='flex flex-row mt-10 lg:w-2/4 lg:ml-auto space-x-8'>

        
          <div className='flex flex-col items-start space-y-2 w-full'>
            <h2 className="text-lg font-bold">Products</h2>
            <div className="flex flex-col space-y-1">
              <p>MehticPay</p>
              <p>BankPlus</p>
              <p>BankPlusPrime</p>
            </div>
          </div>

         
          <div className='flex flex-col items-start space-y-2 w-full'>
            <h2 className="text-lg font-bold">Navigation</h2>
            <div className="flex flex-col space-y-1">
              <p>Home</p>
              <p>About</p>
              <p>Career</p>
            </div>
          </div>

         
          <div className='flex flex-col items-start space-y-2 w-full'>
            <h2 className="text-lg font-bold">Help & Support</h2>
            <div className="flex flex-col space-y-1">
              <p>Contact Us</p>
              <p>Terms of use</p>
              <p>Privacy Policy</p>
            </div>
          </div>

        </div>


      </div>





    </>
  );
}

export default App;

