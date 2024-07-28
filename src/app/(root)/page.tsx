import OTCalculator from "./calculator.client";

export default function Home() {
  return (
    <main className="flex font-ibm min-h-screen px-4 text-esc-cloud max-w-4xl w-full mx-auto flex-col items-start gap-y-16 p-24">
      <section className="flex flex-col items-center gap-y-4 w-full">
        <h1 className="text-2xl sm:text-6xl font-bold font-inter">
          OT Calculator
        </h1>
        <p className="text-lg">
          Caclculate the <span className="underline">overtime</span> price of
          your building uses easily.
        </p>
      </section>

      <OTCalculator />
    </main>
  );
}
