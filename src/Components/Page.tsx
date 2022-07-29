import React, {useState} from "react";
import RenderImage from "./RenderImage";
import {resultType, imageType} from "./type";
import InputImage from "./InputImage";

const Page: React.FC<{}> = () => {
    const [image, setImage] = useState<imageType>(null);
    const [result, setResult] = useState<resultType>(undefined);

    return (
        <div>
            <div className={"container"}>
                <div className="bg-light p-5 rounded">
                    <h1>AWS REKOGNITION</h1>
                    <p className="lead">
                        Analyze faces
                    </p>
                    <InputImage
                        setImage={setImage}
                        setResult={setResult}
                    />
                </div>
            </div>
            <RenderImage
                image={image}
                result={result}
            />
        </div>
    );
}

export default Page;


//------------------------------------------------------------------------------
//TEST FUNCTIONS REKOGNITION : OFFLINE
// let data = {
//     AgeRange : {
//         Low : 12,
//         High : 20
//     },
//     Beard : {
//         Value : false,
//         Confidence: 92
//     }
// }
// let dataTable:itemFaceDetails[] = Object.entries(data);
// await setResult(dataTable);
//------------------------------------------------------------------------------
