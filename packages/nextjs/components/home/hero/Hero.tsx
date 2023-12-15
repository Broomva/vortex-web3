// Hero.tsx
import { useRouter } from "next/router";

export const Hero = () => {
  const router = useRouter();

  return (
    <div className="relative bg-cover bg-no-repeat bg-center h-screen" style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}>
      <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
        <div className="text-center text-white px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-none">
            Streamline Your Data Operations with Vortex
          </h1>
          <p className="mt-6 text-xl sm:text-2xl md:text-3xl font-light">
            Connect. Build. Grow. Enter the new era of decentralized data management.
          </p>
          <button
            className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out"
            onClick={() => router.push("/explore")}
          >
            Explore the Marketplace
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
