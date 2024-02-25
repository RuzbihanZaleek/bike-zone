import Image from "next/image";
import {
  BikeCard,
  CustomFilter,
  Main,
  SearchBar,
  ShowMore,
} from "@/components";
import { fetchBikes } from "@/utils";
import { fuels, starter, yearsOfProduction } from "@/constants";
import { HomeProps } from "@/types";

export default async function Home({ searchParams }: HomeProps) {
  const allBikes = await fetchBikes({
    manufacturer: searchParams.manufacturer || "honda",
    year: searchParams.year || 2022,
    starter: searchParams.starter || "",
    offset: searchParams.offset || 10,
    model: searchParams.model || "",
  });

  const isDataEmpty =
    !Array.isArray(allBikes) || allBikes.length < 1 || !allBikes;

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
            {/* <CustomFilter title="starter" options={starter} /> */}
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 w-full gap-8 pt-14">
              {allBikes.map((bike) => (
                <BikeCard key={bike} bike={bike} />
              ))}
            </div>
            <ShowMore
              pageNumber={(searchParams.offset || 10) / 10}
              isNextPageExist={(searchParams.offset || 10) < allBikes.length}
            />
          </section>
        ) : (
          <h2 className="text-black text-xl font-bold pt-14 pb-48 w-full flex justify-center">
            Oops, no results!
          </h2>
        )}
      </div>
    </main>
  );
}
