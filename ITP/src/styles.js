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


    formLable: "block text-sm font-medium text-gray-700"

};

export default styles