"use client";

import React from "react";
import Renderables from "@/src/renderables/renderables";
import data from "@/src/lib/data.json";
import { pageStructure } from "../helpers/pageStructure";

const Home = () => {
  // @ts-ignore: for some reason it breaks because theme is string and expects "theme1"|"theme2"
  const page: pageStructure = data;

  return (
    <>
        <Renderables pageContents={page}/>
    </>
  );
};

export default Home;
