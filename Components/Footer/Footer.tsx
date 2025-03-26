import * as lib from "../../lib/menu"
const Footer = ()=>{
    return <>
        <div className="bg-[#f5f5f7] w-full  p-5 footer">
            <div className="text-xs/4  lg:text-sm text-gray-500" dangerouslySetInnerHTML={{__html:lib.footerDescription}}></div>
        </div>
    </>
}

export default Footer;