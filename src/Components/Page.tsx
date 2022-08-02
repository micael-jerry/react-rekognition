import RenderImage from "./RenderImage/RenderImage";
import { pageProps } from "./type";
import Get from "./GetImageAndResult/Get";
import React from "react";


const Page: React.FC<pageProps> = (props) => {
    const { image,setImage,result,setResult} = props
    return (
        <div>
            <div className={"container"}>
                <div className="bg-light p-5 rounded">
                    <h1>Amazon Rekognition</h1>
                    <p className="lead">
                        Analyze faces
                    </p>
                    <Get
                        setImage={setImage}
                        setResult={setResult}
                    />
                </div>
            </div>
            <div className={"container"}>
                <RenderImage
                    image={image}
                    result={result}
                />
            </div>
        </div>
    );
}

export default Page;
