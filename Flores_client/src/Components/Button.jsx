function Button({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="font-['DM_Sans'] text-[11px] font-semibold tracking-[0.12em]
       uppercase px-5 py-2.5 bg-[#1a1a18] text-white border-[1.5px] border-[#1a1a18]
        rounded-full cursor-pointer transition-all duration-200 hover:bg-white hover:text-[#1a1a18]"
    >
      {children}
    </button>
  );
}

export default Button;
