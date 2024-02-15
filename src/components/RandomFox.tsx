
type Props={image:string};
export const RandomFox=(props:Props):JSX.Element=>{
    
    return <img width={320} height="auto" className="rounded"  src={props.image} alt="fox"/>
}