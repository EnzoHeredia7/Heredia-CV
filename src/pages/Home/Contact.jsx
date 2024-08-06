import React, { useState } from 'react';
import Input from '../../components/Form/Input';
import Textarea from '../../components/Form/Textarea';
import { Laptop} from 'lucide-react';
import PrimaryBtn from '../../components/Button/PrimaryBtn';
import SecondaryBtn from '../../components/Button/SecondaryBtn';
import { RiMailSendLine } from 'react-icons/ri';

const Contact = () => {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    const value = e.target.value;
    setFullname(value.replace(/[^a-zA-Z\s]/g, ''));
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value;
    setPhone(value.replace(/[^0-9]/g, ''));
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <div className="w-full h-auto flex items-center justify-center flex-col lg:py-12 md:py-14 sm:py-12 py-10 lg:px-10 md:px-10 sm:px-6 px-4">
        <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
        <Laptop className='w-5 h-5 -rotate-55 text-green-400' />
          Contact
        </h6>
        <div className='w-full h-auto flex items-center gap-x-8 lg:gap-y-8 md:gap-y-8 sm:gap-y-5 gap-y-4 flex-col lg:p-7 md:p-7 sm:p-4 p-3'>
          <div className='w-full h-auto flex items-center lg:gap-x-8 md:gap-x-4 sm:gap-x-4 gap-x-3 lg:gap-y-8 md:gap-y-8 sm:gap-y-5 gap-y-4 lg:flex-nowrap md:flex-nowrap sm:flex-wrap flex-wrap'>
            <div className='lg:w-[32%] md:w-[32%] sm:w-[48%] w-full h-auto'>
              <Input 
                type="text"
                id='fullname'
                name='fullname'
                className='w-full h-12 px-4'
                placeholder='Insert your name completed'
                value={fullname}
                onChange={handleNameChange}
                required
              />
            </div>
            <div className='lg:w-[32%] md:w-[32%] sm:w-[48%] w-full h-auto'>
              <Input 
                type="email"
                id='email'
                name='email'
                className='w-full h-12 px-4'
                placeholder='Insert your Email'
                value={email}
                onChange={handleEmailChange}
                required
              />
            </div>
            <div className='lg:w-[32%] md:w-[32%] sm:w-[48%] w-full h-auto'>
              <Input 
                type="tel"
                id='phone'
                name='phone'
                className='w-full h-12 px-4'
                placeholder='Insert your Number Phone'
                value={phone}
                onChange={handlePhoneChange}
                maxLength="10"
                required
              />
            </div>
          </div>
          <Textarea
            id='message'
            name='message'
            className='w-full h-35 px-4'
            placeholder='Insert your message'
            value={message}
            onChange={handleMessageChange}
            required
          />
          <SecondaryBtn className="lg:w-auto md:w-auto sm:w-[75%] w-full px-8 py-3 uppercase rounded-md">
            Send <RiMailSendLine className='w-4 h-4'/>
          </SecondaryBtn>
        </div>
      </div>
    </>
  );
}

export default Contact;
