"use client";
import BagVarient from "./BagVarient";
import { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";
import { CiBookmark } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { LiaRupeeSignSolid } from "react-icons/lia";

const BagsCard = () => {
  const [optionSelected, setOptionSelected] = useState("All");
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await axios("https://fakestoreapi.com/products");
      const data = await res.data;
      setProducts([...data]);
      setSelectedProducts([...data]);
    }
    getData();
  }, []);

  const handleOptionSelected = () => {
    console.log(optionSelected);
    setSelectedProducts(products.filter(product => product.category === optionSelected));
  }

  return (
    <div className="py-8">
      <BagVarient
        optionSelected={optionSelected}
        setOptionSelected={setOptionSelected}
        handleOptionSelected={handleOptionSelected}
      />
      <div className="py-8 flex flex-col items-center justify-between flex-wrap lg:flex-row lg:items-start">
        {selectedProducts.map((product) => (
          <div key={product.id} className="px-4 py-4 shrink-0 w-full cursor-pointer transition-transform lg:w-1/4 hover:scale-110">
            <div className="rounded-lg border border-slate-700 overflow-hidden">
              <div className="relative flex justify-center items-center bg-white h-[320px]">
                <Image
                  className="w-[200px] h-[200px]"
                  src={product.image}
                  width={1440}
                  height={1080}
                  alt={product.category}
                />
                <CiBookmark 
                  color="black"
                  className="absolute z-10 top-4 right-4 cursor-pointer"
                  size={28}
                />
              </div>
              <div className="py-3 px-2">
                <p className="text-slate-300">{product.title}</p>
                <div className="pt-2 flex justify-between items-center">
                  <div className="flex gap-[2px] items-end">
                    <LiaRupeeSignSolid size={20}/>
                    <span className="font-semibold">{product.price}</span>
                    <span className="line-through text-xs">899</span>
                    <span className="text-green-400 text-xs">(50% off)</span>
                  </div>
                  <IoBagHandleOutline size={24} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BagsCard;
