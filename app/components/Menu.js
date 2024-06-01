const Menu = ({navigation}) => {
  return (
    <div className="flex flex-col justify-center gap-[0.36rem] cursor-pointer">
      <span className={`w-5 h-[0.12rem] bg-white  ${navigation ? "rotate-45 translate-y-1":""} transition-all`}></span>
      <span className={`${navigation ? "hidden":""} w-5 h-[0.12rem] bg-white transition-all`}></span>
      <span className={`w-5 h-[0.12rem] bg-white ${navigation ? "-rotate-45 -translate-y-1":""} transition-all`}></span>
    </div>
  )
}
export default Menu;
