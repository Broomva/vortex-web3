// import Link from "next/link";
import { HomePage } from "../components/home/index";
import type { NextPage } from "next";
// import { BugAntIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <HomePage />
    </>
  );
};

export default Home;
