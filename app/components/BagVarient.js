"use client";
import { useState } from "react";
import { IoIosArrowDropdown } from "react-icons/io";

const BagVarient = ({optionSelected, setOptionSelected, handleOptionSelected}) => {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  const toggleDropDownOpen = () => {
    setDropDownOpen(!dropDownOpen);
  }

  const handleClick = (option) => {
    setDropDownOpen(false);
    setOptionSelected(option);
    handleOptionSelected();
    
  }

  const options = ["All", "jewelery", "men's clothing", "electronics", "women's clothing"];

  return (
    <div className="flex flex-col gap-4 justify-between lg:flex-row">
      <div className="flex gap-2">
        Accessories :
        <div className="relative">
          <div className="flex justify-between items-center px-2 w-[180px]"
            onClick={toggleDropDownOpen}
          >
            {optionSelected}
            <IoIosArrowDropdown size={18} />
          </div>
          <div className={`${dropDownOpen ? "block":"hidden"} bg-slate-950 rounded-sm w-[140px] absolute top-8 z-20 flex flex-col`}>
            {options.map((option, i) => (
              <div 
              key={i}
                onClick={() => handleClick(option)}
                className="px-2 py-2 hover:bg-slate-900"
              >{option}</div>
            ))}
          </div>
        </div>
      </div>
      <div>13 products</div>
    </div>
  );
};

export default BagVarient;
