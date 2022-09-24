const styles = {
    mainHeader: "fixed z-50 w-screen bg-slate-300 p-6 px-16 sticky top-0",

    deskTop: "hidden md:flex w-full h-full items-center justify-between",
    mobile: "flex md:hidden w-full h-full",

    navUL: "flex items-center gap-8 ",
    navLI: "text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer",
    navCart: "relative flex items-center justify-center",
    navIcon: "text-textColor text-2x1 duration-100 transition-all ease-in-out cursor-pointer h-6 w-6",
    navCartList: "absolute -right-2 -top-2 h-5 w-5 rounded-full flex items-center justify-center bg-cartNumBg",
    navCartNum: "text-white text-xs font-semibold",
    
    logoIMG: "flex items-center gap-2",
    logoName: "text-headingColor text-xl font-bold",
    avatar: "w-10 min-w-[40px] h-10 min-h-[40px] cursor-pointer",

    formLable: "block text-sm font-medium text-gray-700",

// Address List
    ALtable: "w-full text-sm text-center text-gray-500 dark:text-gray-400 table-fixed",
    ALthread: "text-xs",
    ALth: " relative",
    ALtd: "py-2 px-6 h-15 text-sm text-justify-relative text-black ",
    ALbtn: "bg-white hover:bg-gray-300 duration-500 text-black py-2 px-4 border border-gray-100 rounded shadow",
    //Stock List
    SLtable:"w-full",
    SLbtn: "bg-white hover:bg-gray-400 duration-500 text-black py-2 px-2 border border-gray-200 rounded shadow",
    SLthead: "bg-gray-200",
    SLtd:"px-7"

};

export default styles