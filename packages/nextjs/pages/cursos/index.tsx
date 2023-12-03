import * as React from "react";
import Image from "next/image";
import { MaxWidthWrapper } from "../../components/MaxWidthWrapper";
import Certificado from "../../public/certificado.png";
import { useToast } from "@chakra-ui/react";
import { useAccount } from "wagmi";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

const UpdatedComponent: React.FC = () => {
  const toast = useToast();
  const { address } = useAccount();

  const { writeAsync } = useScaffoldContractWrite({
    contractName: "ProgressToken",
    functionName: "completeVideo",
    args: [address], // Add the args property with the address as an array
    blockConfirmations: 1,
    onBlockConfirmation: txnReceipt => {
      console.log("Transaction blockHash", txnReceipt.blockHash);
    },
  });

  const handleFileUpload = (event: any) => {
    const file = event.target.files[0];
    console.log("Archivo cargado:", file);
    writeAsync();

    setTimeout(() => {
      toast({
        title: "Has ganado 1 BLZ.",
        description: "Gracias por aprender con nosotros.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
    }, 1000);
    // Aquí puedes manejar el archivo cargado como necesites
  };
  return (
    <MaxWidthWrapper>
      <div className="flex flex-col items-stretch p-3">
        <header className="justify-center items-center border-[color:var(--primary-100,#E40406)] bg-red-600 bg-opacity-10 flex w-full flex-col pt-8 pb-12 px-16 rounded-3xl border-2 border-dashed max-md:px-5">
          <div className="flex w-full  items-center justify-center bg-grey-lighter">
            <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-blue hover:text-white">
              <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <span className="mt-2 text-base leading-normal">Carga el certificado</span>
              <input type="file" className="hidden" onChange={handleFileUpload} />
            </label>
          </div>
        </header>

        <div className="shadow-sm bg-stone-100 flex w-full flex-col items-stretch mt-4 pl-4 pr-2 pt-6 pb-1 rounded-3xl">
          <div className=" gap-5 flex items-center justify-between w-full p-1">
            <div className="text-stone-800 text-base font-semibold leading-6">Revisa tus certificados!</div>
            <div className="text-stone-800 text-sm font-semibold leading-3 whitespace-nowrap self-start mt-1">
              10 certificados
            </div>
          </div>
          <div className="w-full flex items-center justify-between gap-3 mt-4 px-0.5">
            <Image
              loading="lazy"
              src={Certificado}
              className="aspect-square object-contain object-center w-[59px] overflow-hidden shrink-0 max-w-full"
              alt="Image 6"
              width={59}
              height={59}
            />
            <div className="text-stone-800 text-sm leading-5">Certificado Blockchain </div>
          </div>
          <div className="w-full flex items-center justify-between gap-3 mt-4 px-0.5">
            <Image
              loading="lazy"
              src={Certificado}
              className="aspect-square object-contain object-center w-[59px] overflow-hidden shrink-0 max-w-full"
              alt="Image 6"
              width={59}
              height={59}
            />
            <div className="text-stone-800 text-sm leading-5">Certificado Blockchain </div>
          </div>
          <div className="w-full flex items-center justify-between gap-3 mt-4 px-0.5">
            <Image
              loading="lazy"
              src={Certificado}
              className="aspect-square object-contain object-center w-[59px] overflow-hidden shrink-0 max-w-full"
              alt="Image 6"
              width={59}
              height={59}
            />
            <div className="text-stone-800 text-sm leading-5">Certificado Blockchain </div>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default UpdatedComponent;
