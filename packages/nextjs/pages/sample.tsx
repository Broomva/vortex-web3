import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { useScaffoldContractRead, useScaffoldContractWrite } from "~~/hooks/scaffold-eth";

const Sample: NextPage = () => {

  const { address } = useAccount();
  const { writeAsync } = useScaffoldContractWrite({
    contractName: "ProgressToken",
    functionName: "completeVideo",
    blockConfirmations: 1,
    onBlockConfirmation: txnReceipt => {
      console.log("Transaction blockHash", txnReceipt.blockHash);
    },
  });

  const { data: balance} = useScaffoldContractRead({
    contractName: "ProgressToken",
    functionName: "balanceOf",
    args: [ address ],
  });

  return (
    <>
      <p></p>
      <button className="btn btn-primary" onClick={() => writeAsync({ args: [address] })}>
        Mintear tokens
      </button>
      <p>
        {address} Balance of BLZ: {Number(balance)}
      </p>
    </>
  );
};

export default Sample;
