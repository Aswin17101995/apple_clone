export interface DropDownMenuProps{
    hoverValue:string,
    changehoverElement : ()=> void,
    hoverAnimation:string,
    mobileClose:()=> void
}
export interface children{
    id:number,
    name:string
}
export interface MenuList{
    id: number;
    type: string;
    children: children[]
}

export interface MenuStateList{
    submenuList:MenuList[]
}

export interface MenuMobile{
    
}