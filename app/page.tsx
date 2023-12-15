"use client";
import { DatePickerComponent } from "@/components/DatePicker";
import { SliderComponent } from "@/components/Slider";

export default function Home() {
  return (
    <main className="py-20">
      <div className="container mx-auto space-y-5">
        <SliderComponent />
        <DatePickerComponent />
      </div>
    </main>
  );
}
