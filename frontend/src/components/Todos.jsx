import React from 'react'
import { IoIosArrowDropdownCircle } from 'react-icons/io'
import TimeConverter from './TimeConverter';
import { BsDot } from 'react-icons/bs'
import { IoIosArrowDropup } from 'react-icons/io'

const Todos = ({ todo, index }) => {
    const [activeIndex, setActiveIndex] = React.useState(null);

    const toggleAccordion = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };
    return (
        

        <div className="bg-base-300  p-4 rounded-lg flex flex-col gap-2 " key={index}>
            <div className="flex justify-between">
                <p className='text-lg font-bold text-white items-center w-[60%]'>{todo.title}</p>
                <div className='flex gap-1 items-center' >
                    <TimeConverter date={todo.createdAt} />
                    <BsDot />
                    <button
                        className={`accordion-button ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => toggleAccordion(index)}
                    >
                        {
                            activeIndex === index ? <IoIosArrowDropup className='' size={30} /> : <IoIosArrowDropdownCircle className='' size={30} />

                        }
                    </button>
                </div>
            </div>
            <div
                className={` ${activeIndex === index ? 'open' : 'hidden'}`}>
                <p>{todo.description}</p>
            </div>
        </div>

    )
}

export default Todos