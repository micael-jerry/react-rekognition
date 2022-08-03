import RenderImageAndResult from "./RenderImageAndResult/RenderImageAndResult";
import {pageProps} from "./type";
import Get from "./GetImageAndResult/Get";
import React, {useEffect, useState} from "react";


const Page: React.FC<any> = (props) => {
    const {image, setImage, faceDetails, setFaceDetails} = props;
    const [result, setResult] = useState<any>(undefined);
    const [num,setNum] = useState<number>(0);

    useEffect(() => {
        setNum(0);
        handleChangeResult(0);
    },[faceDetails]);

    useEffect(() => {
        handleChangeResult(num);
    },[num])

    function handleChangeResult(n: number): void {
        if(faceDetails === undefined){
            setResult(undefined);
        }
        else if(faceDetails === null) {
            setResult(null);
        }
        else {
            setResult(Object.entries(faceDetails[n]));
        }
    }

    function next():void {
        if(num+1<faceDetails.length){
            setNum(num+1);
        }
    }
    function previous():void {
        if(num-1>=0) {
            setNum(num-1);
        }
    }

    return (
        <div>
            <div className={"container"}>
                <div className="bg-light p-5 rounded">
                    <h1>Amazon Rekognition</h1>
                    <p className="lead">
                        Analyze faces
                    </p>
                    <button onClick={previous}>previous : {num}</button>
                    <button onClick={next}>next : {num}</button>
                    <Get
                        setImage={setImage}
                        setFaceDetails={setFaceDetails}
                    />
                </div>
            </div>
            <div className={"container"}>
                <RenderImageAndResult
                    image={image}
                    result={result}
                />
            </div>
        </div>
    );
}

export default Page;
