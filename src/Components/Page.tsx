import RenderImage from "./RenderImage";
import {resultType, imageType} from "./type";
import InputImage from "./InputImage";

type pageProps = {
    image:imageType;
    setImage: (param: imageType) => void;
    result: resultType;
    setResult: (param: resultType) => void;
}

const Page: React.FC<pageProps> = (props) => {
    const { image,setImage,result,setResult} = props
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
