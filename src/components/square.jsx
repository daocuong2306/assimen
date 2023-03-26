import {useState} from 'react'

const Square = ({value,position,handlePlay,color1}) => {
    const handleSPlay = () =>{
        if(!value) {
            handlePlay(position)
        }
    }
    return <>
    <button onClick={handleSPlay} className="h-[50px] w-[50px] text-xl text-black border-0 bg-gray-300 " >
        {value}
        </button>
    </>
}

export default Square