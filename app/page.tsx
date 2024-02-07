import Image from "next/image";
import { CustomFilter, Main, SearchBar } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Main />

      {/* Catalogue*/}
      <div className="mt-12 sm:px-16 px-6 py-4 max-w">
        <div className="flex flex-col items-start justify-start gap-y-2.5 text-black-100">
          <h1 className="text-4xl font-extrabold">Bike Catalogue</h1>
          <p>Explore the bikes you might like</p>
        </div>

        <div className="mt-12 w-full flex justify-between items-center flex-wrap gap-5">
          {/* Search bar */}
          <SearchBar />

          <div className="flex justify-start flex-wrap items-center gap-2">
            {/* Filter options */}
            <CustomFilter />
          </div>
        </div>
      </div>
    </main>
  );
}
