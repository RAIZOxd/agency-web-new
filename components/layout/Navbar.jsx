
const Navbar = () => {
  return (
    <footer className="bg-[#EBECF0] py-4 border-t border-[#2C313F]">
      <div className="container mx-auto flex justify-between items-center border-b border-[#2C313F] pb-2 w-[1474px]">
        {/* Left Section */}
        <p
          className="text-[24px] leading-[30px] font-[450] text-[#2C313F] tracking-[-0.02em] std-font"
          style={{
            width: "83px",
            height: "30px",
            top: "49px",
            left: "85px",
            gap: "0px",
            opacity: "0px",
          }}
        >
          &copy; 2022.
        </p>

        {/* Center Section */}
        <div className="flex flex-col items-center">
          <p
            className="text-xs tracking-widest text-[#2C313F] std-font"
            style={{
              width: "64px",
              height: "30px",
              paddingTop: "10px",
              left: "767px",
              gap: "0px",
              opacity: "0px",
              fontSize: "20px",
              fontWeight: 500,
              lineHeight: "30px",
              letterSpacing: "0.12em",
              textAlign: "right",
              textDecorationLine: "underline",
              textDecorationStyle: "solid",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >FIFTY</p>



          <p
            className="text-[60px] font-[700] leading-[70px] text-center clash-display-font text-[#2C313F]"
            style={{
              width: "68px",
              height: "70px",
              top: "4px",
              left: "766px",
              gap: "0px",
              opacity: "0px",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
            }}
          >15</p>
        </div>

        {/* Right Section */}
        <div className="space-y-3">
          <div className="w-16 h-0.5 bg-[#2C313F]"></div>
          <div className="w-16 h-0.5 bg-[#2C313F]"></div>
        </div>
      </div>
    </footer>
  );
};

export default Navbar;