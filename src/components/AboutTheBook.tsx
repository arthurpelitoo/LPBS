import { useEffect, useRef, useState } from "react";

const AboutTheBook = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const currentElement = sectionRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 } // O elemento é considerado visível se 20% dele aparecer na tela.
        );

        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, []);

    return (
        <div 
            ref={sectionRef}
            className={`mt-32 justify-around transition-opacity duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
            <div className="w-[90vw] md:w-[80vw] h-[40vh] bg-primary rounded-extra-large flex m-auto p-8 shadow-xl">
                <div className="w-full flex items-center justify-around mr-3">
                    <h1 className="font-pacifico text-primaryText text-6xl">Sobre o Livro</h1>
                </div>
                <div className="w-full flex items-center justify-around ml-3">
                    <h1 className="font-playfair text-primaryText text-3xl">
                        <span className="badge badge-highlight text-primaryText badge-lg mb-3">Novo!</span>
                        <br />
                        "Como Fazer Bolos Deliciosos" é um guia completo para todos que desejam transformar a arte <br />
                        de confeitaria em uma experiência prazerosa!
                    </h1>
                </div>
            </div>

            <div className="flex justify-center mt-8">
                <button className="btn btn-secondary text-primaryText btn-lg shadow-lg">Saiba Mais</button>
            </div>
        </div>
    );
};

export default AboutTheBook;