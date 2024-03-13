import { useState } from "react";

function Gift(){
    //const gift = ["hoa","quả","bánh","kẹo"];
    const [giftList] = useState<string[]>(["hoa","quả","bánh","kẹo"])
    
    const [gift, setGift]= useState<string>('');

    function handleGetGift(){
        const random = Math.floor(Math.random()*4);
        // console.log(random);
        setGift(giftList[random]);
    }
    return (
    <>
        <h2>{gift}</h2>
        <button onClick={handleGetGift}>Click</button>
    </>
    );
}

export default Gift;