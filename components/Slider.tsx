"use client";
import { Slider } from "keep-react-demo";

export const SliderComponent = () => {
  return (
    <Slider
      range={true}
      min={100}
      max={1000}
      defaultValue={[100, 300]}
      tooltip="top"
      onChange={(value) => console.log(value)}
    />
  );
};
