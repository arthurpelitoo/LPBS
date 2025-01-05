import { useState } from 'react'

const ChapterCarrousel = () => {
    const [currentSlide, setCurrentSlide] = useState(1); // Estado para rastrear o slide atual
    const totalSlides = 3; // Número total de slides

    const goToSlide = (slide: number) => {
        setCurrentSlide(slide);
        document.getElementById(`slide${slide}`)?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "start",
        });
    };

    return (
        <div className='relative w-full h-[300px] md:h-[500px] bg-neutral rounded-lg overflow-hidden shadow-xl'>
            {/* Slides */}
            <div className='carousel w-full h-full'>
                <div 
                    id="slide1"
                    className={`carousel-item relative w-full ${
                        currentSlide === 1 ? "opacity-100" : "opacity-50"
                    }`}
                >
                    <img
                        src="https://via.placeholder.com/800x300/FFD700/FFFFFF?text=Slide+1"
                        className="w-full object-cover"
                        alt="Slide 1"
                    />
                    <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                        <button 
                            onClick={() => goToSlide(totalSlides)}
                            className='btn btn-circle btn-secondary'>
                            ❮
                        </button>
                        <button
                            onClick={() => goToSlide(2)}
                            className='btn btn-circle btn-secondary'>
                            ❯
                        </button>
                    </div>
                </div>
                <div 
                    id='slide2' 
                    className={`carousel-item relative w-full ${
                        currentSlide === 2 ? "opacity-100" : "opacity-50"
                    }`}
                >
                    <img
                        src="https://via.placeholder.com/800x300/87CEFA/FFFFFF?text=Slide+2"
                        className="w-full object-cover"
                        alt="Slide 2"
                    />
                    <div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
                        <button
                            onClick={() => goToSlide(1)}
                            className='btn btn-circle btn-secondary'>
                            ❮
                        </button>
                        <button
                            onClick={() => goToSlide(3)}
                            className='btn btn-circle btn-secondary'>
                            ❯
                        </button>
                    </div>
                </div>
                <div 
                    id="slide3" 
                    className={`carousel-item relative w-full ${
                        currentSlide === 3 ? "opacity-100" : "opacity-50"
                    }`}
                >
                    <img
                        src="https://via.placeholder.com/800x300/DC143C/FFFFFF?text=Slide+3"
                        className="w-full object-cover"
                        alt="Slide 3"
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <button 
                            onClick={() => goToSlide(2)}
                            className="btn btn-circle btn-secondary">
                            ❮
                        </button>
                        <button 
                            onClick={() => goToSlide(1)} 
                            className="btn btn-circle btn-secondary">
                            ❯
                        </button>
                    </div>
                </div>
            </div>
            {/* Indicadores */}
            <div className='absolute flex justify-center w-full bottom-4 space-x-2'>
                {Array.from({ length: totalSlides }, (_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index + 1)}
                        className={`btn btn-xs rounded-full ${
                            currentSlide === index + 1 ? "btn-primary" : "btn-secondary"
                        }`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default ChapterCarrousel;