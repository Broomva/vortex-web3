import Image from "next/image";
import Logo from "../logo_brain_blaze.png";

/**
 * Site footer
 */
export const Footer = () => {
  return (
    <div className="flex flex-col items-stretch">
      <header className="items-center flex w-full flex-col justify-center px-16 py-4 max-md:px-5 text-center mt-6">
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
          <form>
            <div className="justify-center items-stretch self-center flex w-28 max-w-full gap-4 mt-4 py-6">
              {/* <Image
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/1569f084048dca930d3f81053721f2f63e36fce83886273f76f83610bd5e9742?apiKey=d627bfd8f24e41d3baf6fe092e7f3e3f&"
                className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                alt="Image 1"
              />
              <Image
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/71707ef6cc695e004051be2515f0f97ddb6e9dc935487f524f38f7501d9312de?apiKey=d627bfd8f24e41d3baf6fe092e7f3e3f&"
                className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                alt="Image 2"
              />
              <Image
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/d1c78a24276b9dc0e2f3357bb56bc823614ca0213c811bfcb426ed792e231a50?apiKey=d627bfd8f24e41d3baf6fe092e7f3e3f&"
                className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                alt="Image 3"
              />
              <Image
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6052143e4bfb3ca2e402f51524749b1339961849534e034ecaed04096f52bf5?apiKey=d627bfd8f24e41d3baf6fe092e7f3e3f&"
                className="aspect-square object-contain object-center w-full overflow-hidden shrink-0 flex-1"
                alt="Image 4"
              /> */}
            </div>
          </form>
        </div>
      </header>
      <footer className="justify-center items-center border-t-[color:var(--bg-300,#E0E2E5)] flex w-full flex-col px-16 py-4 border-t border-solid max-md:px-5">
        <a href="#" className="text-stone-800 text-sm leading-5 self-center whitespace-nowrap">
          Politica de privacidad
        </a>
        <a href="#" className="text-stone-800 text-sm leading-5 self-center whitespace-nowrap mt-4">
          Terminos y condiciones
        </a>
        <a href="#" className="text-stone-800 text-sm leading-5 self-center whitespace-nowrap mt-4">
          Política Protocolo
        </a>
        <p className="text-stone-500 text-center text-sm leading-5 self-stretch mt-4">
          Broomva
          <br />
          Hackathon Web 3 Colombia, 2023
        </p>
      </footer>
    </div>
  );
};
