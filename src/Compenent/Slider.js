import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
export default function Slider() {
    const slides = [
        {
            url: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
        },
        {
            url: 'https://thumbs.dreamstime.com/b/jour-de-terre-d-environnement-dans-les-mains-des-arbres-cultivant-jeunes-plantes-bokeh-verdissent-la-main-femelle-fond-tenant-l-130247647.jpg',
        },
        {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52qqyY2Mosgxt-Pt00pZy4TqIhCanFTwyLwC-D0z5&s',
        },

        {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWps7mcfhTQLPKFGekJQym7VGXmpCtMUlnblnm7TsxSUdqZ3HR53sx53wy3d7lILVLq84&usqp=CAU',
        },
        {
            url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwSFQ6NhYI6E2p7UCNaQSnIzbS4UOtwYUO_VdYeg-Z5ybIiP03ngWNSrNwp4r1uzNL-no&usqp=CAU',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };



        return (
            <div>
                <div className='slider-container'>
                    <div
                        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                        className='slider-image'
                    ></div>

                    <div className={` prev nav-arrow-e ${currentIndex === 0 ? 'hidden' : 'block'} `}>
                        <BsChevronCompactLeft onClick={prevSlide} size={30} />
                    </div>

                    <div className={`nav-arrow next ${currentIndex === slides.length - 1 ? 'hidden' : 'block'}`}>
                        <BsChevronCompactRight onClick={nextSlide} size={30} />
                    </div>

                    
                </div>
            </div>
        );
    }


