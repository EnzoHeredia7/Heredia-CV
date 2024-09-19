import React, { useState } from 'react';



  const educationData = [
    {
      id: 1,
      title: 'UDEMY, Universidad CSS - Aprendiendo desde cero hasta Experto',
      description: 'Curso de 7.5 horas',
      duration: '7.5 horas',
      imgSrc:'/src/assets/Certificados/A1.jpg'

    },
    {
      id: 2,
      title: 'UDEMY, Universidad JavaScript - De Cero a Experto JavaScript!',
      description: 'Curso de 16.5 horas',
      duration: '16.5 horas',
      imgSrc:'/src/assets/Certificados/B2.jpg'

    },
    {
      id: 3,
      title: 'UTN.BA|Centro de e-Learning - Desarrollo Web en Html5 y Css3',
      description: 'Curso de 67 horas',
      duration: '67 horas',
      imgSrc:  '/src/assets/Certificados/C3.jpg'

    },
    {
      id: 4,
      title: 'UTN.BA|Centro de e-Learning - Desarrollo web con Javascritp',
      description: 'Curso de 67 horas',
      duration: '67 horas',
      imgSrc:  '/src/assets/Certificados/E5.jpg'

    },
    {
      id: 5,
      title: 'UTN.BA|Centro de e-Learning - Desarrollo web en HTML 5, CSS3 y Javascript (Nivel Avanzado)',
      description: 'Curso de 67 horas',
      duration: '67 horas',
      imgSrc:  'src/assets/Certificados/D4.jpg'

    }
  ];
  


const Education = () => {
  const [visibleModal, setVisibleModal] = useState(null);

  const mostrarCertificado = (id) => {
    setVisibleModal(id);
  };

  const ocultarCertificado = () => {
    setVisibleModal(null);
  };

  return (
    <section className='education_container' id='education'>
      <h2 className='education_section_title'>Education</h2>
      <div className='educa_container'>
        {educationData.map((data) => (
          <div className='education_content' key={data.id}>
            <div>
              <h3 className="education_title">{data.title}</h3>
              <p>{data.description}</p>
              <p>{data.duration}</p>
            </div>
            <span className="education_button button button--flex" onClick={() => mostrarCertificado(data.id)}>
              Ver Certificación
              <i className="uil uil-arrow-right education_button-icon"></i>
            </span>

            {visibleModal === data.id && (
              <div className="education_modal" onClick={ocultarCertificado}>
                <div className="education_modal-content" onClick={(e) => e.stopPropagation()}>
                  <i className="uil uil-times education_modal-close" onClick={ocultarCertificado}></i>
                  <h3 className="education_modal-title">Certificación</h3>
                  <img src={data.imgSrc} alt={`Certificación ${data.id}`} className="education_modal-image" />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
