"use client";

import ExpenseView from "./views/expense.client";
import VenueView from "./views/venue.client";

export default function OTCalculator() {
  return (
    <>
      <VenueView />
      <ExpenseView />
    </>
  );
}
