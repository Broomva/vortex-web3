import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

const Sample: NextPage = () => {
  const { address } = useAccount();
  const { writeAsync } = useScaffoldContractWrite({
    contractName: "ProgressToken",
    functionName: "completeVideo",
    args: [address], // Add the args property with the address as an array
    blockConfirmations: 1,
    onBlockConfirmation: (txnReceipt) => {
      console.log("Transaction blockHash", txnReceipt.blockHash);
    },
  });

  const { data: balance } = useScaffoldContractRead({
    contractName: "ProgressToken",
    functionName: "balanceOf",
    args: [ address ],
  });

  return (
    <>
      <p></p>
      <button className="btn btn-primary" onClick={() => writeAsync()}>
        Mint Tokens
      </button>
      <p>
        Address:
        {address} 
        </p>
      <p>
        VTX Balance: 
        {Number(balance)}
      </p>
    </>
  );
};

export default Sample;
