import React from "react";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <form className={styles.hero}>
      <div className={styles.blur} />

      <div className="z-10 flex flex-col items-center justify-center w-full max-w-[500px]">
        <header className="text-stone-50 text-2xl font-bold leading-8 w-full">
          ¡Aprende con diversión mientras recibes recompensas!
        </header>
        <section className="text-stone-50 text-base font-semibold leading-6 w-full mt-8">
          Descubre un aprendizaje entretenido con recompensas en nuestra app blockchain.
        </section>
        <button
          className="text-stone-50 text-sm font-bold leading-5 whitespace-nowrap justify-center bg-red-600 w-full mt-7 pl-11 pr-16 py-3 rounded-[30px] items-start max-md:px-5"
          aria-label="Empezar"
          aria-role="button"
        >
          Empezar
        </button>
      </div>
    </form>
  );
};

export default Hero;
