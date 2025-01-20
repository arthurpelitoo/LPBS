import React, { useEffect, useRef, useState } from "react";
import "./CustomCursor.css"; // Importa os estilos personalizados para o cursor.

const CustomCursor: React.FC = () => {

  // Referências para os elementos de cursor personalizados (dot e outline).
  const cursorDotRef = useRef<HTMLDivElement | null>(null);
  const cursorOutlineRef = useRef<HTMLDivElement | null>(null);


  // Estado para controlar se o cursor está sobre elementos interativos (links, botões).
  const [isHovering, setIsHovering] = useState(false);

  // Estado para saber se o dispositivo se trata de um celular, assim desativando o cursor.
  const [isPortable, setIsPortable] = useState(false);

  // Hook para monitorar a largura da janela
  useEffect(() => {
    const checkWindowSize = () => {
      setIsPortable(window.innerWidth <= 1024); //Define se é um dispositivo Portable.
    };

    checkWindowSize();
    window.addEventListener("resize", checkWindowSize); // Atualiza ao redimencionar

    return () => {
      window.removeEventListener("resize", checkWindowSize); // Limpa o evento
    };
  }, []);

  // Hook useEffect para configurar eventos de movimentação do mouse e hover.
  useEffect(() => {
    if(isPortable) return; // Não adiciona eventos se for Portable

    // Atualiza a posição do cursor com base nos movimentos do mouse.
    const handleMouseMove = (e: MouseEvent) => {
      const posX = e.clientX; // Posição X do mouse.
      const posY = e.clientY; // Posição Y do mouse.

      // Posiciona o ponto central do cursor no local correto.
      if (cursorDotRef.current) {
        cursorDotRef.current.style.left = `${posX}px`;
        cursorDotRef.current.style.top = `${posY}px`;
      }

      // Anima o contorno do cursor para uma movimentação suave.
      if (cursorOutlineRef.current) {
        cursorOutlineRef.current.animate(
          { left: `${posX}px`, top: `${posY}px` },
          { duration: 500, fill: "forwards" }
        );
      }
    };

    // Função chamada ao entrar em um elemento interativo.
    const handleMouseEnter = () => {
      setIsHovering(true); // Ativa o estado de hover.
    };

    // Função chamada ao sair de um elemento interativo.
    const handleMouseLeave = () => {
      setIsHovering(false); // Desativa o estado de hover.
    };

    // Seleciona todos os elementos interativos da página (links e botões).
    const elements = document.querySelectorAll("a, button, .carousel-container");
    elements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    // Escuta os eventos de movimentação do mouse na janela.
    window.addEventListener("mousemove", handleMouseMove);

    // Limpa os eventos ao desmontar o componente.
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };

  }, [isPortable]); // [] garante que os eventos sejam configurados apenas uma vez.

  if (isPortable) return null;

  return (
    <>
      {/* Ponto do cursor personalizado */}
      <div 
        className="cursor-dot"
        style={{
          width: "5px",
          height: "5px",
          backgroundColor: "white",
          position: "fixed",
          top: "0",
          left: "0",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          zIndex: 999,
          pointerEvents: "none"
        }}
        ref={cursorDotRef}>
      </div>

      {/* Contorno do cursor com animações responsivas ao hover */}
      <div
        className="cursor-outline"
        style={{
          width: isHovering ? "33px" : "30px",
          height: isHovering ? "33px" : "30px",
          border: "2px solid hsla(30, 60%, 17%, 0.5)",
          backgroundColor: isHovering ? "hsla(0, 0%, 100%, 0.5)" : "hsla(30, 60%, 17%, 0.5)",
          transition: "transform 0.5s ease, background-color 0.5s ease",
          position: "fixed",
          top: "0",
          left: "0",
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          zIndex: 999,
          pointerEvents: "none"
        }}
        ref={cursorOutlineRef}
      ></div>
    </>
  );
};

export default CustomCursor;