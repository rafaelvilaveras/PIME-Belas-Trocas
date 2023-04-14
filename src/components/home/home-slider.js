import React, { useState } from 'react';
import {GoPrimitiveDot} from 'react-icons/go';
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs';

import '../../css/App.css';
import '../../css/slider.css';

import teste1 from '../../images/slider/teste1.jpg';
import teste2 from '../../images/slider/teste2.jpg';
import teste3 from '../../images/slider/teste3.jpg';
import teste4 from '../../images/slider/teste4.jpg';


const HomeSlider = () => {

    const teste = [teste1, teste2, teste3, teste4];
    const [index, setIndex] = useState(0);

    console.log(teste.length)

    return (
        <>
            <div className='flex-row slider-container prevent-select'>
                <div className='arrow-container left'>
                    <BsArrowLeftCircleFill onClick={()=>{index === 0 ? setIndex(teste.length-1) : setIndex(index-1)}}/>
                </div>
                <div className='flex-row slider-wrapper'>
                    {teste.map((item, i)=>{
                        return(
                            <div key={'image'+i} className={i === index ? 'image-container' : 'display-none'}>
                                <img loading='lazy' src={item}/>
                            </div>
                        );
                    })}
                <div className='dot-container'>
                    {teste.map((item, i)=>{
                            return ( <GoPrimitiveDot key={'dot'+i} className={i === index ? 'activeDot s-dot' : ''}/> );
                        })}
                </div>
                </div>

                <div className='arrow-container right'>
                    <BsArrowRightCircleFill onClick={()=>{index === teste.length-1 ? setIndex(0) : setIndex(index+1)}}/>
                </div>
            </div>
        </>
     );
}
 
export default HomeSlider;