import LandingElement from "@/components/common/landing-element";
import { H1 } from "@/components/ui/h1";
import { H2 } from "@/components/ui/h2";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const landingElements = [
  { id: "#works", text: "How It Works?" },
  { id: "#for", text: "Who We're For?" },
  { id: "#trust", text: "Why Trust Us?" },
];

export default function Home() {
  return (
    <main className="h-full">
      <section className="h-full flex flex-col items-center justify-center space-y-4 bg-gradient-to-b from-transparent to-brand from-70%">
        <div className="p-2 rounded-lg drop-shadow-lg ">
          <H1 className="md:text-6xl">
            <span className="text-brand">4barr :</span> Raise Your Standards
          </H1>
        </div>
        <H2>
          Find <span className="text-brand">Real</span> Artists. No{" "}
          <span className="text-brand">Small</span> Talk.
        </H2>
        <Link
          href="/home"
          className="bg-brand flex space-x-2 items-center ring-0 hover:ring-2 ring-brand transition ease-linear p-2 text-xl font-bold rounded-xl my-2"
        >
          <span>Sign Up Now</span>
          <ArrowRightIcon className="size-5" />
        </Link>
        <hr className="border border-brand/20 w-full" />
        <div>
          <ul className="flex space-x-4 p-2">
            {landingElements.map((landingElement, key) => (
              <LandingElement
              key={key}
                id={landingElement.id}
                text={landingElement.text}
              />
            ))}
          </ul>
        </div>
      </section>
      <section id="works" className="h-full"></section>
    </main>
  );
}
