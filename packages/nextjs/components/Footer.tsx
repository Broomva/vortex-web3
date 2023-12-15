import Image from "next/image";
import Logo from "../logo_brain_blaze.png";

/**
 * Site footer
 */
export const Footer = () => {
  return (
    <div className="flex flex-col items-stretch">
      <footer className="items-center flex w-full flex-col justify-center px-16 py-4 max-md:px-5 text-center mt-6">
        <div className="flex w-[159px] max-w-full flex-col items-stretch">
          <div className="items-stretch flex justify-between gap-1 pr-2">
            <Image loading="lazy" src={Logo} alt="Logo" />
            <div className="text-red-600 text-xl font-bold leading-6 self-center grow whitespace-nowrap my-auto">
              <span className="text-black">Brain</span> <span className="text-red-600">Blaze</span>
            </div>
          </div>
          <nav className="mt-4 flex flex-col gap-2" aria-label="Main Navigation">
            <div>
              <a href="#" className="text-stone-800 text-sm font-semibold leading-3 self-center whitespace-nowrap mt-4">
                Contacto
              </a>
            </div>
            <div>
              <a href="#" className="text-stone-800 text-sm font-semibold leading-3 mt-4">
                Preguntas frecuentes
              </a>
            </div>
            <div>
              <a href="#" className="text-stone-800 text-sm font-semibold leading-3 self-center whitespace-nowrap mt-4">
                Documentación
              </a>
            </div>
          </nav>
            <p className="text-stone-500 text-center text-sm leading-5 self-stretch mt-4">
            Broomva
            <br />
            Vortex © 2023
          </p>
        </div>
      </footer>
    </div>
  );
};
