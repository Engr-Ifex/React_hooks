import {useState} from 'react';

const ColorPicker = () => {
  const [color, setColor] = useState("bg-black")

  const redColor = () => {
      setColor('bg-red-700')
  }
  const yellowColor = () => {
    setColor('bg-yellow-500')
  }
  const greenColor = () => {
    setColor('bg-green-500')
  }
  return (
    <div className='my-20'>
        <div className= {`w-[280px] h-[280px] mb-6 ${color}`}></div>
        <div className="flex gap-5">
            <button onClick={redColor}  className='bg-red-700 text-white px-4 py-2 rounded'>RED</button>
            <button onClick={yellowColor} className='bg-yellow-500 text-white px-4 py-2 rounded'>YELLOW</button>
            <button onClick={greenColor} className='bg-green-500 text-white px-4 py-2 rounded'>GREEN</button>
        </div>
    </div>
  )
}

export default ColorPicker;
