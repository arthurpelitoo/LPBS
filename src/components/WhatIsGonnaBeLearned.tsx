import { useEffect, useRef, useState } from 'react';
import notepad from '../assets/bloco de notas/fundo-de-papel-de-desenho-plano-com-linha-azul.jpg'


const WhatIsGonnaBeLearned = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef  = useRef(null);

    useEffect(() => {
        const currentElement = sectionRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {threshold: 0.2} // O elemento é considerado visível se 20% dele aparecer na tela.
        );

        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        }
    }, []);

    return (
        <div 
            ref={sectionRef}
            className={`mt-32 text-center content-center transition-opacity duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
            <div className="w-[80vw] h-[100vh] bg-primary rounded-extra-large flex flex-wrap m-auto p-8">
                <div className="w-full flex items-center justify-around">
                    <h1 className="font-pacifico text-primaryText text-6xl ">Com Receitas Acessiveis<br></br>e técnicas detalhadas</h1>
                </div>
                <p className="font-playfair text-primaryText text-3xl w-full">Este livro ensina desde os clássicos como bolo de chocolate até criações inovadoras!</p>
                <div className="w-full h-fit justify-between flex flex-nowrap p-5">
                    <div className='relative bg-slate-50 w-[30vw] h-[40vh]'>
                        <img 
                            src={notepad}
                            alt="Cada Capitulo é repleto de dicas uteis!"
                            className="w-full h-full object-cover rounded-md"
                        />
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <p className='text-primaryText text-4xl font-pacifico'>Cada capitulo é repleto de dicas úteis!</p>
                        </div>
                    </div>
                    <div className='relative bg-slate-50 w-[30vw] h-[40vh]'>
                        <img 
                            src={notepad}
                            alt="Serão passadas boas práticas de cozinha!"
                            className="w-full h-full object-cover rounded-md"
                        />
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <p className='text-primaryText text-4xl font-pacifico'>Serão passadas boas práticas de cozinha!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default WhatIsGonnaBeLearned;