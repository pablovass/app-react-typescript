import { useRef } from "react";
type Props={image:string};

export const RandomFox=({image}:Props):JSX.Element=>{
    const node = useRef<HTMLImageElement>(null);
    
    return( <img width={320} height="auto" className="rounded"  src={image} alt="fox"/>);
};