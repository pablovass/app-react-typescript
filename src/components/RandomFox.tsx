//{"image":"https:\/\/randomfox.ca\/images\/25.jpg","link":"https:\/\/randomfox.ca\/?i=25"}
//npm run dev
const random =()=>Math.floor(Math.random()*123)+1;

export const RandomFox=():JSX.Element=>{
    const image:string = `https://randomfox.ca/images/${random()}.jpg`
    return <img width={320} height="auto" className="rounded"  src={image} alt="fox"/>
}