import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { RandomFox } from "@/components/RandomFox";
import type { MouseEventHandler } from "react";
//genera un id unico
const generateId=()=>Math.random().toString(36).substr(2,9);
const random = () => Math.floor(Math.random() * 123) + 1;
//type ImageItema=Array<{id:string;url:string}>
type ImageItems={id:string;url:string}


const Home: NextPage = () => {
  const [images, setImages] = useState<Array<ImageItems>>([]);

  const addNewFox:MouseEventHandler<HTMLButtonElement>=(event)=>{
    
    const newImageItem={
      id: generateId(),
      url:`https://randomfox.ca/images/${random()}.jpg`
    };
setImages([...images,newImageItem]);
  }
  return (

    <div >
      <Head>

        <title>index</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/favicon.ico" />
      </Head>
      <main >
        <h1 className="text-3xl font-bold underline">hola mundo</h1>
        <button onClick={addNewFox}>botton</button>
        {images.map((image) => (
          <div key={image.url} className="p-4"> <RandomFox image={image.url} /></div>
        ))}

      </main>
      <footer></footer>
    </div>

  );
}
export default Home
