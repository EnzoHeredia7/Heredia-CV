import { Laptop } from 'lucide-react';
import React, { useState } from 'react';
import PrimaryBtn from '../../components/Button/PrimaryBtn';
import { FaTimes } from 'react-icons/fa';
import SecondaryBtn from '../../components/Button/SecondaryBtn';

const Trainers = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [certificates, setCertificates] = useState([]);
  
  const trainerData = [
    {
      id: 1,
      trainerImg: "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/274905661/original/da83f5757af78f6e6dc3e65baada3ec57a66f72e/design-and-create-html-and-css-for-your-website.png",
      name: "HTML5 Y CSS3",
      certificates: [
        "./src/assets/imagenes/html-css.jpg", 
        "./src/assets/imagenes/udemy-css.jpg",// Replace with actual certificate image URL
      ]
    },
    {
      id: 2,
      trainerImg: "https://wisetrolley.com/wp-content/uploads/2023/03/Bootstrap-T-shirt-Black-2.jpg",
      name: "Bootstraps",
  
      certificates: ["./src/assets/imagenes/boots.jpg"] // Replace with actual certificate image URL
    },
    {
      id: 3,
      trainerImg: "./src/assets/imagenes/frontend-logo.png",
      name: "Front End ",
     
      certificates: ["./src/assets/imagenes/Frontend.jpg"] // Replace with actual certificate image URL
    },
    {
      id: 4,
      trainerImg: "https://th.bing.com/th/id/OIP.7uM0I20m_E2V1AobDQDQSwHaHa?rs=1&pid=ImgDetMain",
      name: "Javascript",
    
      certificates: ["./src/assets/imagenes/javascript.jpg",
        "./src/assets/imagenes/udemy-javascript.jpg",
      ] // Replace with actual certificate image URL
    },
    {
      id: 5,
      trainerImg: "https://shots.codepen.io/username/pen/BdVNmO-800.jpg?version=1503454177",
      name: "React.Js",
  
      certificates: ["./src/assets/imagenes/udemy-javascript.jpg"] // Replace with actual certificate image URL
    },
  ];

  const handleShowCertificates = (certificates) => {
    setCertificates(certificates);
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setCertificates([]);
  };

  return (
    <>
<div className="w-full h-auto flex items-center justify-center flex-col lg:py-12 md:py-14 sm:py-12 py-10 lg:px-10 md:px-10 sm:px-6 px-4">
        <h6 className="text-lg font-medium text-gray-200 flex items-center gap-x-2 mb-6">
          <Laptop className='w-5 h-5 -rotate-55 text-green-400' />
          Education
        </h6>
        <div className="w-full h-auto flex items-center justify-center lg:gap-x-8 md:gap-x-6 sm:gap-x-4 gap-x-3 lg:gap-y-8 md:gap-y-6 sm:gap-y-4 gap-y-3 flex-wrap mb-10">
          {trainerData.map((data) => (
            <div 
              key={data.id} 
              className='lg:w-[20%] md:w-[30%] sm:w-[40%] w-full lg:h-[30vh] md:h-[53vh] sm:h-[28vh] h-[60vh] rounded-xl overflow-hidden cursor-pointer relative group border border-transparent hover:border-green-700 hover:shadow-lg transition-all duration-700 ease-in-out'>
              <img src={data.trainerImg} alt="trainer image" className='w-full h-full object-cover group-hover:opacity-50 transition-opacity duration-300 ease-in-out'/>
              <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
                <div className='text-center'>
                  <h1 className='text-xl text-white font-semibold mb-2'>
                    {data.name}
                  </h1>
                  <SecondaryBtn onClick={() => handleShowCertificates(data.certificates)}>
                    Ver Certificados
                  </SecondaryBtn >
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {showPopup && (
  <div className="fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-50 z-50" onClick={handleClosePopup}>
    <div className={`flex ${certificates.length > 1 ? 'flex-row' : 'flex-col'} gap-4 p-1`} onClick={(e) => e.stopPropagation()}>
      {certificates.map((certificate, index) => (
        <div key={index} className={`bg-gray-500 p-2 rounded-lg relative ${certificates.length > 1 ? ' mx-2 w-[80%] h-[80%]' : 'left-20 w-[90%] h-[90%]'} flex items-center justify-center`}>
          <img src={certificate} alt={`certificate-${index}`} className="max-w-full max-h-full w-auto h-auto object-cover"/>
        </div>
      ))}
    </div>
    <button
      className="absolute top-4 right-4 text-green-800 p-1 bg-gray-200 rounded-full hover:bg-gray-300"
      onClick={handleClosePopup}
    >
      <FaTimes className="w-5 h-5"/>
    </button>
  </div>
)}


    </>
  );
};

export default Trainers;
