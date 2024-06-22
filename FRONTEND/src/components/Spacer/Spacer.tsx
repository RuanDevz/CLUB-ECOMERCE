// App.js

import React from "react";
import { Spacer } from "@nextui-org/react";
import {CustomCard} from "./CustomCard";

export default function App() {
  return (
    <div>
        <div className="flex">
       <CustomCard />
      <Spacer x={52} />
      <CustomCard />
      <Spacer x={52} />
      <CustomCard />
        </div>
        <div className="flex mt-24">
      <CustomCard />
      <Spacer x={52} />
      <CustomCard />
      <Spacer x={52} />
      <CustomCard />
        </div>
        <div className="flex mt-24">
      <CustomCard />
      <Spacer x={52} />
      <CustomCard />
      <Spacer x={52} />
      <CustomCard />
        </div>
    </div>
  );
}
