import React, { useEffect, useRef, useState } from "react";
import placeholderImage from "../assets/imgs/ingredientes.jpeg";
import placeholderImage2 from "../assets/imgs/bolocomumfuba.jpg";
import placeholderImage3 from "../assets/imgs/bolo-vulcao-brigadeiro-receitas-nestle.jpg";

interface ImageCardProps {
  title: string;
  description: string;
  posterSrc: string;
  isVisible: boolean; // Controla se o card está visível ou não
}

// Componente para renderizar um card com imagem, título e descrição
const ImageCard: React.FC<ImageCardProps> = ({ title, description, posterSrc, isVisible }) => (
  <div
    className={`flex w-full flex-col items-center gap-4 rounded-extra-large p-4 duration-1000 transition-opacity ${
      isVisible ? "opacity-100" : "opacity-0"
    }`}
  >
    {/* Card principal: Imagem e descrição */}
    <div className="aspect-auto w-full rounded-extra-large flex flex-nowrap items-center bg-secondary">
      {/* Exibição da imagem */}
      <img className="size-2/6 aspect-square rounded-extra-large items-start" src={posterSrc} alt={title} />
      <div className="flex flex-col gap-2 items-center w-full">
        {/* Título e descrição do card */}
        <h3 className="text-4xl mobile:text-3xl font-pacifico text-primaryText">{title}</h3>
        <p className="text-1xl text-black text-balance">{description}</p>
      </div>
    </div>
  </div>
);

export const ContentSpace = () => {
  const [visibleSections, setVisibleSections] = useState<boolean[]>([]); // Rastreia quais seções estão visíveis
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]); // Armazena referências aos elementos DOM das seções

  useEffect(() => {
    const refsSnapshot = sectionRefs.current;

    // Criação de um IntersectionObserver para monitorar a visibilidade das seções
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = refsSnapshot.indexOf(entry.target as HTMLDivElement);
            if (index !== -1) {
              setVisibleSections((prev) => {
                const updated = [...prev];
                updated[index] = true; // Marca a seção como visível
                return updated;
              });
            }
          }
        });
      },
      { threshold: 0.5 } // Visível quando 50% do elemento está na viewport
    );

    // Observa cada referência de seção
    refsSnapshot.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    // Limpeza do observer ao desmontar o componente
    return () => {
      refsSnapshot.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Dados das seções
  const sections = [
    {
      title: "Ingredientes",
      description: "Aprenda a fazer melhor uso dos seus ingredientes, marcas que recomendo e onde adquirir!",
      posterSrc: placeholderImage,
    },
    {
      title: "Bolo do básico ao avançado!",
      description: "A prática nunca é demais. Sempre é bom o costume e o aprimoramento de técnicas de cozinha.",
      posterSrc: placeholderImage2,
    },
    {
      title: "Como melhorar suas receitas e por onde divulgar!",
      description: "Falarei sobre como dar toques pessoais à receita e divulgar seus pratos!",
      posterSrc: placeholderImage3,
    },
  ];

  return (
    <div className="container rounded-3xl bg-primary flex flex-col items-center px-5 py-[60px] tablet:px-10 tablet:pb-0 tablet:pt-20 laptop:px-20 laptop:py-[120px] laptop:pb-0">
      <div className="flex flex-col items-center gap-[18px] tablet:max-w-[460px]">
        <h2 className="text-center text-3xl/[38px] font-semibold text-primaryText font-pacifico tablet:text-[46px]/[54px]">
          O que será abordado no livro:
        </h2>
        <p className="text-center text-neutral-800 dark:text-neutral-60 font-playfair laptop:text-2xl tablet:text-lg">
          Capítulos de importância para criar, fazer, experimentar e apresentar!
        </p>
      </div>

      {/* Renderização dinâmica das seções */}
      <div className="mt-16 flex w-full flex-col gap-8">
        {sections.map((section, index) => (
          <div
            key={index}
            ref={(el) => (sectionRefs.current[index] = el)} // Define a ref do DOM
            className="w-full"
          >
            <ImageCard
              title={section.title}
              description={section.description}
              posterSrc={section.posterSrc}
              isVisible={visibleSections[index]} // Controla a visibilidade do card
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const BookContent = () => {
  return (
    <div className="mt-32 justify-around">
      <div className="w-full h-auto rounded flex flex-wrap flex-col m-auto items-center text-center justify-center">
        <ContentSpace /> {/* Componente que renderiza o conteúdo principal */}
      </div>
    </div>
  );
};

export default BookContent; // Exportação do componente principal
