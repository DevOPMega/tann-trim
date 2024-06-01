import Image from "next/image";

const BagsCarousel = () => {
  const bags = [
    { src: "dufflebag.png", alt: "Duffle Bags" },
    { src: "dufflebagsmall.png", alt: "Duffle Bags Small" },
    { src: "frame50.png", alt: "Frame 50 Bags" },
    { src: "handbags.png", alt: "Hand Bags" },
    { src: "laptopsleever.png", alt: "Laptop Sleever" },
    { src: "messengerbag.png", alt: "Messenger Bags" },
    { src: "slingbag.png", alt: "Sling Bags" },
    { src: "totebag.png", alt: "Tote Bags" },
  ];
  return (
    <div className="my-4 lg:my-12">
      <div className="hidden gap-8 justify-between lg:flex">
        {bags.map((bag, i) => (
          <div className="flex flex-col items-center gap-2 transition-transform cursor-pointer hover:scale-125">
            <Image
              key={i}
              src={`/${bag.src}`}
              alt={bag.alt}
              width={64}
              height={48}
              className="w-auto h-auto"
            />
            <span className="text-sm text-slate-300">{bag.alt}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BagsCarousel;
