import React from "react";
import { Button } from "../components/ui/button";
import ProductCard from "./product-card";
import SearchForm from "./search-form";

const SearchPage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
      <section className="hidden md:block md:col-span-1">
        <Button className="w-full rounded-lg shadom-md border-2 border-muted-foreground px-4 py-2 flex items-center justify-between m-auto bg-white text-black">
          <span>Sort By</span>
          <span className="flex items-center gap-2">
            Hotseller
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </Button>
      </section>
      <section className="col-span-1 md:col-span-2 xl:col-span-3 text-primary">
        <SearchForm />
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8 lg:gap-16 xl:gap-24 mx-auto w-fit ">
          <div className="min-w-[100px] rounded-lg shadow-md p-4">
            <h2 className="text-2xl font-bold m-auto">Filters</h2>
          </div>
          <div className=" rounded-lg shadow-md ">
            <h2 className="text-2xl font-bold ">Filters</h2>
          </div>
          <div className=" rounded-lg shadow-md ">
            <h2 className="text-2xl font-bold ">Filters</h2>
          </div>
        </div> */}
      </section>
      <section className="hidden md:col-span-1  md:flex flex-col items-center justify-center gap-4 p-4 rounded-lg border-2 border-muted-foreground shadow-lg min-w-full bg-muted-foreground font-semibold text-xl">
        this is where all the filters come in
      </section>
      <section
        className="col-span-1 md:col-span-2 xl:col-span-3 bg-white rounded-lg shadow-md p-4
        grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 "
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, itr) => (
          <ProductCard key={itr} />
        ))}
      </section>
    </div>
  );
};

export default SearchPage;
