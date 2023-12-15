"use client";
import { useState } from "react";
import { DatePicker } from "keep-react-demo";

export const DatePickerComponent = () => {
  const [date, setDate] = useState<Date | null>(null);
  return (
    <DatePicker singleDatePicker={setDate}>
      <DatePicker.SingleDate />
    </DatePicker>
  );
};
