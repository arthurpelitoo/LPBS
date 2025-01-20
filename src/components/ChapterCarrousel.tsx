import React, { useRef, useState } from "react";

// Componente funcional responsável por renderizar um carrossel de capítulos
const ChapterCarrousel = () => {

    // Definição dos capítulos do carrossel com título, descrição e imagem
    const chapters = [
        { title: "Capítulo 1: Ingredientes Fundamentais", description: "Descubra os ingredientes essenciais para fazer bolos deliciosos, desde farinhas e açúcares até fermentos e aromatizantes. Entenda a importância de cada item e como escolher os melhores produtos para suas receitas.", descriptionMobile: "Aprenda a escolher os ingredientes essenciais para bolos deliciosos, como farinhas, açúcares e fermentos." , image: "https://dummyimage.com/300x200/FFD700/000000&text=Capítulo+1" },
        { title: "Capítulo 2: Ferramentas do Mestre Padeiro", description: "Uma cozinha equipada é meio caminho para o sucesso. Conheça os utensílios indispensáveis para preparar, assar e decorar bolos, e aprenda a usá-los como um profissional.", descriptionMobile: "Conheça os utensílios indispensáveis para preparar, assar e decorar bolos com perfeição." , image: "https://dummyimage.com/300x200/87CEFA/000000&text=Capítulo+2" },
        { title: "Capítulo 3: Técnicas de Preparo Perfeitas", description: "Domine as técnicas básicas de mistura, batimento e incorporação de ingredientes para obter massas leves e fofas. Dicas e truques para garantir que cada bolo saia perfeito.", descriptionMobile: "Domine as técnicas básicas para massas leves e fofas, garantindo bolos perfeitos." , image: "https://dummyimage.com/300x200/DC143C/000000&text=Capítulo+3" },
        { title: "Capítulo 4: O Segredo do Forno", description: "Saiba como ajustar o forno corretamente para assar bolos sem erro. Explore temperaturas ideais, tempos de cozimento e como identificar quando seu bolo está pronto.", descriptionMobile: "Aprenda a ajustar o forno para assar bolos na temperatura e tempo ideais." , image: "https://dummyimage.com/300x200/32CD32/000000&text=Capítulo+4" },
        { title: "Capítulo 5: Coberturas e Recheios Essenciais", description: " Eleve suas criações com recheios cremosos e coberturas irresistíveis. Receitas simples para ganaches, chantillys e glacês que complementam qualquer bolo.", descriptionMobile: "Descubra receitas simples para ganaches, chantillys e glacês que completam seus bolos." , image: "https://dummyimage.com/300x200/8A2BE2/000000&text=Capítulo+5" },
        { title: "Capítulo 6: Resolvendo Problemas Comuns", description: "Enfrente os desafios da confeitaria com confiança. Identifique e corrija problemas comuns, como bolos afundados, massas secas e texturas inconsistentes, garantindo que cada tentativa seja um sucesso.", descriptionMobile: "Aprenda a corrigir problemas comuns na confeitaria, como bolos afundados e massas secas." , image: "https://dummyimage.com/300x200/FF4500/000000&text=Capítulo+6" },
    ];

    // Referência para o contêiner do carrossel
    const carouselRef = useRef<HTMLDivElement | null>(null);

    // Estado para rastrear se o usuário está arrastando o carrossel
    const [isDragging, setIsDragging] = useState(false);

    // Coordenada inicial do arrasto
    const [startX, setStartX] = useState(0);

    // Posição de rolagem inicial do carrossel
    const [scrollLeft, setScrollLeft] = useState(0);

    // Função de Arrasto do Mouse
        // Função chamada ao pressionar o botão do mouse para iniciar o arrasto
        const handleMouseDown = (e: React.MouseEvent) => {
            if (carouselRef.current) {
                setIsDragging(true);
                setStartX(e.pageX - carouselRef.current.offsetLeft); // Calcula a posição inicial do clique
                setScrollLeft(carouselRef.current.scrollLeft); // Salva a posição atual da rolagem
                carouselRef.current.style.scrollBehavior = "smooth"; // Remove suavidade durante o arrasto
            }
        };

        // Função para atualizar a posição do carrossel durante o arrasto
        const handleMouseMove = (e: React.MouseEvent) => {
            if (!isDragging || !carouselRef.current) return;

            e.preventDefault(); // Evita comportamentos indesejados do navegador
            const x = e.pageX - carouselRef.current.offsetLeft; // Calcula a posição atual do mouse
            const walk = (x - startX) * 3; // Determina a velocidade de rolagem
            carouselRef.current.scrollLeft = scrollLeft - walk; // Atualiza a posição do carrossel
        };

        // Finaliza o arrasto ao soltar o botão do mouse ou sair da área
        const handleMouseUpOrLeave = () => {
            setIsDragging(false);
            if (carouselRef.current) {
                carouselRef.current.style.scrollBehavior = "smooth"; // Retorna suavidade à rolagem
            }
        };

    // Função de arrasto do Mobile
        // Salva as coordenadas iniciais do toque e a posição de rolagem do carrossel.
        const handleTouchStart = (e: React.TouchEvent) => {
            if (carouselRef.current) {
                setIsDragging(true);
                setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft); // Posição inicial do toque
                setScrollLeft(carouselRef.current.scrollLeft); // Posição atual da rolagem
                carouselRef.current.style.scrollBehavior = "smooth"; // Remove suavidade durante o arrasto
            }
        };

        // Calcule a diferença entre a posição inicial e a atual, e ajuste a rolagem do carrossel.
        const handleTouchMove = (e: React.TouchEvent) => {
            if (!isDragging || !carouselRef.current) return;
        
            const x = e.touches[0].pageX - carouselRef.current.offsetLeft; // Posição atual do toque
            const walk = (x - startX) * 3; // Determina a velocidade de rolagem
            carouselRef.current.scrollLeft = scrollLeft - walk; // Atualiza a posição do carrossel
        };
        
        // Restaura o estado para que o arrasto seja finalizado
        const handleTouchEnd = () => {
            setIsDragging(false);
            if (carouselRef.current) {
                carouselRef.current.style.scrollBehavior = "smooth"; // Retorna suavidade à rolagem
            }
        };

    return (
        // Contêiner principal com título e estrutura do carrossel
        <div className="w-[90vw] smTablet:w-[80vw] h-auto bg-primary rounded-extra-large flex flex-col m-auto p-6 shadow-xl">
            <h2 className="text-4xl font-pacifico text-center text-primaryText">
                Capítulos do Livro
            </h2>
            <div className="relative mt-5">
                {/* Botão para rolagem para a esquerda */}
                <button 
                    onClick={() => {
                        if (carouselRef.current) {
                            const firstChild = carouselRef.current.firstChild;
                            if (firstChild instanceof HTMLElement) {
                                const cardWidth = firstChild.getBoundingClientRect().width || 250; // Obtem largura do primeiro card
                                carouselRef.current.scrollBy({ left: -cardWidth, behavior: "smooth"});
                            }
                        }
                    }}
                    className="absolute text-primary w-8 h-8 btn-circle bg-primaryIcon left-2 top-1/2 transform -translate-y-1/2 z-10 cursor-none">
                    ❮
                </button>

                {/* Contêiner do carrossel que reage aos eventos de arrasto */}
                <div
                    ref={carouselRef}
                    className="carousel-container mr-11 ml-11 overflow-x-hidden snap-x snap-mandatory scroll flex gap-4 select-none"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUpOrLeave}
                    onMouseLeave={handleMouseUpOrLeave}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {/* Renderização dos capítulos no carrossel */}
                    {chapters.map((chapter, index) => (
                        <div
                            key={index}
                            className="snap-center shrink-0 desktop:w-[30%] mobile:w-fit tablet:w-fit smTablet:w-[45%] laptop:w-[35%] bg-secondary rounded-lg shadow-lg overflow-hidden"
                        >
                            <img 
                                src={chapter.image} 
                                alt={chapter.title} 
                                draggable="false" 
                                className="w-full smTablet:h-[200px] tablet:h-fit smTablet:object-cover tablet:object-none" 
                            />
                            <div className="p-4">
                                <h3 className="text-base tablet:text-tablet smTablet:text-lg font-semibold text-primaryText">
                                    {chapter.title}
                                </h3>
                                <p className="text-tablet text-primaryText">
                                    <span className="hidden smTablet:inline">{chapter.description}</span> {/* Frase para telas maiores */}
                                    <span className="inline smTablet:hidden">{chapter.descriptionMobile}</span> {/* Frase para telas menores */}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Botão para rolagem para a direita */}
                <button 
                    onClick={() => {
                        if (carouselRef.current) {
                            const firstChild = carouselRef.current.firstChild;
                            if (firstChild instanceof HTMLElement) {
                                const cardWidth = firstChild.getBoundingClientRect().width || 250; // Obtem largura do primeiro card
                                carouselRef.current.scrollBy({ left: cardWidth, behavior: "smooth"});
                            }
                        }
                    }}
                    className="absolute text-primary w-8 h-8 btn-circle bg-primaryIcon right-2 top-1/2 transform -translate-y-1/2 z-10 cursor-none">
                    ❯
                </button>
            </div>
        </div>
    );
};

export default ChapterCarrousel;