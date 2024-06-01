import AccessoriesLink from "./components/AccessoriesLink";
import BagsCarousel from "./components/BagsCarousel";
import BagsCard from "./components/BagsCard";

export default function Home() {
  return (
    <>
      <div className="px-8 py-2 md:px-12 lg:px-24">
        <AccessoriesLink />
        <BagsCarousel />
        <BagsCard />
      </div>
    </>
  );
}

