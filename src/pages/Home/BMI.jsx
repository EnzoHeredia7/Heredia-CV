import React, { useState } from 'react'
import { Dumbbell } from 'lucide-react'
import Label from "../../components/Label/Label";
import Input from "../../components/Form/Input";
import SecondaryBtn from '../../components/Button/SecondaryBtn';

const BMI = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBMI] = useState(null);

    const calcularBMI = () => {
        const bmi = (weight/((height * height) /10000)).toFixed(2);
        setBMI(bmi); 
    }
  return (
    <>
      <div className='w-full h-auto flex items-center lg:py-16 md:py-14 sm:py-12 py-10 lg:px-24 md:px-16 sm:px-6 px-4'>
        <div className="w-full h-auto flex items-center justify-center flex-col ">
        <h6 className='lg:text-lg md:text-lf sm:text-base text-base font-medium text-gray-200 flex items-center lg:justify-start md:justify-start sm:justify-center justify-center gap-x-2 bg-black/20 rounded-t-md py-2 px-4'>
        <Dumbbell className='w-4 h-4 -rotate-45 text-orange-400' />
        Calcula Tu IMC
         </h6>
         <div className='w-full h-auto flex items-end justify-center bg-black/20 rounded-md lg:gap-5 md:gap-5 sm:gap-3 gap-2 py-10 lg:px-0 md:px-0 sm:px-2 px-4 flex-wrap'>
         <div className='lg:w-[25%] md:w-[50%] w-full h-auto p-2'>
        <Label htmlFor="weight">PESO (kg)</Label>
        <Input 
        id= "weight"
        name="weight"
        type="text" 
        placeholder= "Ingrese su Peso"
        value={weight}
        onChange={(e)=> setWeight(e.target.value)}
        />
         </div>
         <div className='lg:w-[25%] md:w-[50%] w-full h-auto p-2'>
        <Label htmlFor="weight">ALTURA (cm)</Label>
        <Input 
        id= "height"
        name="height"
        type="text" 
        placeholder= "Ingrese su Altura"
        value={height}
        onChange={(e)=> setHeight(e.target.value)}
        />
         </div>
         <div className='lg:w-[20%] md:w-[35%] sm:w-[50%] w-full h-auto p-2' >
        <SecondaryBtn
        type="submit"
        className='w-full h-11 justify-center'
        onClick={calcularBMI}
        >
            Calcular BMI
        </SecondaryBtn>
         </div>
         {bmi !== null && (
            <div className='bg-black rounded-b-md px-6 py-2.5'>
          <p className='text-orange-600' >
            Tu IMC: <span className='font-bold'>{bmi}</span>
        </p>
            </div>      
         )}
         </div>
        </div>
      </div>
    </>
  )
}

export default BMI
