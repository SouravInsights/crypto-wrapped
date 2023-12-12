import Image from "next/image";

export default function HeroSection() {
  return (
    <div>
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 justify-center">
        <div className="text-center">
          <h1 className="text-8xl font-normal font-tiempos italic text-[#7AF274] ">
            Crypto
            <span className="font-tickerbit" aria-hidden="true">
              Wrapped
            </span>
          </h1>

          <p className="mt-2 inline text-8xl font-bold font-tiempos text-[#FFFFFF] flex justify-center items-baseline">
            2023
            <span>
              <Image
                className="ml-2"
                src="/Images/Img.png"
                width={106.67}
                height={40}
                alt="img"
              />
            </span>
          </p>
          <div className="bg-[url('/Images/Topographic-1.svg')] mt-5 flex items-center justify-center gap-x-6">
            <p className=" font-tiempos inline text-xl font-light text-[#FFFFFF] ">
              Get your{" "}
              <span className="font-tickerbit text-2xl"> #CryptoWrapped </span>{" "}
              and share your 2023 <br /> on-chain activity.
            </p>
          </div>
          <div className="mt-10 flex items-center justify-center ">
            <button className="font-tiempos rounded-md border-2 border-dotted border-[#51A04D] px-10 py-3 text-base font-light text-white shadow-sm">
              Enter address or ENS to continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
