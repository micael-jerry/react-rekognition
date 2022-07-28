import React, {useState} from "react";
import AWS, {Credentials} from 'aws-sdk' ;
import RenderImage from "./RenderImage";
import {itemFaceDetails, resultType} from "./type";

const Page: React.FC<{}> = () => {
    const [image, setImage] = useState<string | null | undefined | ArrayBuffer>(null);
    const [result, setResult] = useState<resultType>(null);

    const getImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
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
        if (e.target.files == null) {
            return null;
        }
        let file = await e.target.files[0];
        const reader = new FileReader();
        await reader.readAsDataURL(file);
        reader.onload = () => {
            setImage(reader.result);
        }
    }

    const ProcessImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        AnonLog();
        let file = event.target.files![0];
        let reader = new FileReader();
        reader.onload = (function (theFile) {
            return function (e:any) {
                AWS.config.region = 'eu-west-2';
                let rekognition = new AWS.Rekognition();
                let params = {
                    Image: {
                        Bytes: e.target.result
                    },
                    Attributes: [
                        'ALL',
                    ]
                };
                rekognition.detectFaces(params, async function (err, data) {
                    if (err) {
                        console.log(err, err.stack);
                    }
                    else {
                        await console.log(Object.entries(data.FaceDetails![0]));
                        await setResult(Object.entries(data.FaceDetails![0]));
                    }
                });
            }
        })(file);
        reader.readAsArrayBuffer(file);
    }

    const AnonLog = () => {
        AWS.config.region = 'eu-west-2';
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: 'eu-west-2:371cdf1c-657e-4e3f-a6a0-3cdcf905bfdc',
        });
        (AWS.config.credentials as Credentials).get(function () {
            let accessKeyId = AWS.config.credentials?.accessKeyId;
            let secretAccessKey = AWS.config.credentials?.secretAccessKey;
            let sessionToken = AWS.config.credentials?.sessionToken;
        });
    }

    return (
        <div>
            <div className={"container"}>
                <div className="bg-light p-5 rounded">
                    <h1>AWS REKOGNITION</h1>
                    <p className="lead">
                        Analyze faces
                    </p>
                    <input type={"file"} accept={"image/*,.png,.jpg,.jpeg"}
                           className="btn btn-primary"
                           onChange={ async (e: React.ChangeEvent<HTMLInputElement>) => {
                               getImage(e);
                               await ProcessImage(e);
                           }}
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
