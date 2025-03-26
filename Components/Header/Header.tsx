"use client"
import { FaApple } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
import { RxHamburgerMenu } from "react-icons/rx";
const Header = () => {
    const [hoverelement,setHoverElement] = useState("");
    const [hoverAnimation,setHoverAnimation]= useState("animate-menudown")
    const navItems = [
        {id:2,name:"Store"},
        {id:3,name:"Mac"},
        {id:4,name:"Ipad"},
        {id:5,name:"Iphone"},
        {id:6,name:"Watch"},
        {id:8,name:"AirPods"},
        {id:9,name:"Tv & Home"},
        {id:10,name:"Entertainment"},
        {id:11,name:"Accessories"},
        {id:12,name:"Support"},
    ]


    const handleMouseOver = (val:string | React.JSX.Element)=>{
        console.log("came in mouse")
        if(typeof val == "string"){
            setHoverAnimation("animate-menudown")
            setHoverElement(val)
        }else{
            setHoverAnimation("animate-menuup")
        setTimeout(()=>{
            setHoverElement("")
        },200) 
        }
    }

    const changeHoverElement = ()=>{
        setHoverAnimation("animate-menuup")
        setTimeout(()=>{
            setHoverElement("")
        },200)
    }

    useEffect(()=>{
        console.log(hoverelement)
        const handeScroll = ()=>{
            if(hoverelement != "mobile"){
                setHoverAnimation("animate-menuup")
                setTimeout(()=>{
                setHoverElement("")
                },300)
            }
        }
        window.addEventListener('scroll',handeScroll)
    },[hoverelement])

    const handleMobileMenu = ()=>{
            if(hoverelement == "mobile"){
                document.querySelector("body")?.classList.remove('body-no-scroll')
                setHoverAnimation("animate-mobilemenuup")
            setTimeout(()=>{
                setHoverElement("")
            },300)
            }else{
                document.querySelector("body")?.classList.add('body-no-scroll')
                setHoverAnimation("animate-mobilemenudown")
            setHoverElement("mobile")
            }
    }

    return <>
       <div className="relative">
       <header className="w-full bg-white/80 backdrop-blur-xs backdrop-saturate-100  fixed z-10 top-0">
            <nav className="mx-auto w-full lg:w-4xl px-2 lg:px-0">
                <ul className="justify-between lg:items-center flex w-full">
                    <li className="py-4 cursor-pointer"><FaApple size={20}/></li>
                    {navItems.map((itm)=> <li className=" hidden lg:flex font-light text-sm cursor-pointer py-4" 
                    onMouseEnter={()=> handleMouseOver(itm.name)} key={itm.id}>{itm.name}</li>)}
                    <div className="flex"> <li className="py-4 cursor-pointer"><CiSearch size={20}/></li>
                    <li className="py-4 cursor-pointer ml-5"><IoBagOutline size={20}/></li>
                    <li className={`lg:hidden py-4 ml-5`} onClick={handleMobileMenu}><RxHamburgerMenu size={20}/></li>
                    </div>
                </ul>
            </nav>
        </header>
       {
        hoverelement.length > 0  && <DropDownMenu mobileClose={handleMobileMenu} hoverAnimation={hoverAnimation} hoverValue={hoverelement} changehoverElement={changeHoverElement}/>
       }
       </div>
    </>;
}
 
export default Header;