import type { NextPage } from "next";
import React from "react";
import { MainTemplate } from "../templates/MainTemplate";

const Home: NextPage = () => {
  return (
    <MainTemplate>
      <h1>Hello World</h1>
    </MainTemplate>
  );
};

export default Home;
