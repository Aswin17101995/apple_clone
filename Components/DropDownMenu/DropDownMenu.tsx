
import { useEffect, useState } from "react";
import * as types from "./types"
import * as lib from "../../lib/menu"
import { IoMdArrowBack, IoMdClose } from "react-icons/io";
import { MdNavigateNext } from "react-icons/md";
const DropDownMenu:React.FC<types.DropDownMenuProps> = ({hoverValue,changehoverElement,hoverAnimation,mobileClose})=>{
    const [menu,setmenuList] = useState<any[] | types.MenuList[]>([])
    const[children,setChildren] = useState(false)
    const[firstTime,setFirstTime] = useState(true)
    const[childrenValue,setChildrenValue] = useState("")

    useEffect(()=>{
        if(hoverValue.length > 0){
            switch(hoverValue.toLowerCase()){
                case "mac":
                    setmenuList(lib.macSubMenu)
                    break;
                case "ipad":
                    setmenuList(lib.ipadSubMenu)
                    break;
                case "iphone":
                    setmenuList(lib.iphoneSubMenu)
                    break;
                case "watch":
                    setmenuList(lib.wathcSubMenu)
                    break;
                case "airpods":
                    setmenuList(lib.airpodsSubmenu)
                    break;
                case "tv & home":
                    setmenuList(lib.entertainmentSubmenu)
                    break;
                case "entertainment":
                    setmenuList(lib.entertainmentSubmenu)
                    break;
                case "accessories":
                    setmenuList(lib.accessoriesSubmenu)
                    break;
                case "support":
                    setmenuList(lib.supportSubmenu)
                    break;
                case "store":
                    setmenuList(lib.storeSubMenu)
                    break;
                case "mobile":
                    setmenuList(Object.keys(lib.allSubMenus))
                    break;
                default:
        
                    break;
            }
        }
        const Interval = setTimeout(() => {
            setFirstTime(false)
        }, 500);
        return(()=>{
            setmenuList([])
            clearInterval(Interval)
        })
    },[hoverValue])



    useEffect(()=>{
        if(children == true){
            let subValues = lib.allSubMenus[`${childrenValue}`]
            let subList ;
            // subValues.forEach((itm)=>{
            //     subList =[...subList,itm.type,...(itm.children).map((val) => val.name)]
            // })

            subList = subValues.reduce((acc:string[],ele)=> {
                let temp = ele.children.map((itm)=> itm.name)
                return [...acc,...temp]
            },[])

            setmenuList(subList)
        }
    },[children])

    console.log(children)

    const entryANimation = (index :number)=>{
        return {
            animationName: "list_animation2",
            animationDuration: "20s",
            animationTimingFunction: "ease-out",
            animationDelay: `${(index + 1 )* 100}ms`, // Incremental delay
            animationFillMode: "forwards", // Ensure it stays at its final state
          }
    }

 

    return <>
        <div className="hidden lg:block w-full min-h-screen absolute top-0 z-9 bg-white/10 backdrop-blur-md backdrop-saturate-50 ">
            <div className={`w-full min-h-65 bg-white rounded-b-xl z-10 
                ${hoverAnimation} p-4`} >
                   <div key={1} className= {`flex  w-4xl mx-auto`}>
                   {
                       hoverValue!= "mobile" &&  Array.isArray(menu) && menu.map((itm:types.MenuList)=>{
                            return <>
                                <div key={itm.id} className="text-sm text-gray-400 font-light not-first:ml-20 ">

                                    {itm.type}
                                    {
                                        itm.children.map((val,index)=> <div  key={`${itm.id}-${val.id}`} className={`${itm.id % 10 == 1 ?"text-xl font-semibold" : "text-sm font-[400] text-[#333336]"} py-1 text-black 
                                        cursor-pointer animate-list 
                                        `}>{
                                            val.name
                                        }</div>)
                                    }
                                </div>
                            </>
                        })
                    }
                   </div>
                </div>
                <div className="w-full blur-lg min-h-25" onMouseEnter={changehoverElement}>
                    hello
                </div>
        </div>
        {
            hoverValue == "mobile" &&   <div className={`block z-10 absolute -top-13 overflow-y-auto w-full h-screen bg-white lg:hidden  ${hoverAnimation}`}>
            <div className={`${children ? "flex justify-between items-center fixed w-full" :"float-right left-2 top-20"} p-2  `} >
               {children &&  <IoMdArrowBack size={20} onClick={(e)=>{
                e.stopPropagation()
                setChildren(false)
                setmenuList(Object.keys(lib.allSubMenus))
               }}/>}
               <IoMdClose size={20} onClick={mobileClose}/>
            </div>
           <div className="mt-15 p-2 w-full">
           {
                menu.map((itm,index)=>{
                    return <>
                    <div
                    key={itm.trim().toLowerCase()}
                    onClick={()=>{
                     if(children == true){
                        return
                     }
                     setChildren(true)
                    setChildrenValue(itm)
                    }}
    
                     className={`${children ?"animate-slideleftoptions" : (!firstTime ? "animate-slideleftoptions":"")} group text-3xl font-semibold pb-5 mx-2   cursor-pointer flex justify-between items-center`} >
                        <div>{itm}</div>
                        {
                            !children && <div className="invisible group-hover:visible"><MdNavigateNext size={20}/></div>
                        }
                        </div>
                        </>
                })
               }

           </div>
        </div>
        }
    </>
}

export default DropDownMenu;