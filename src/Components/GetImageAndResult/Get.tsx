import React from "react";
import AWS, {AWSError, Credentials} from "aws-sdk";
import {imageType, resultType} from "../type";
import './Get.css'
import {DetectFacesResponse} from "aws-sdk/clients/rekognition";

type getImageResultProps = {
    setImage: (params: imageType) => void;
    setResult: (params: resultType) => void;
    changePage?: (params: boolean) => void;
}

const Get: React.FC<getImageResultProps> = (props) => {
    const {setImage, setResult, changePage} = props;

    const getImage = (e: React.ChangeEvent<HTMLInputElement>): void | null => {
        if (e.target.files == null) {
            return null;
        }
        let file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setImage(reader.result);
        }
    }

    const ProcessImage = (event: React.ChangeEvent<HTMLInputElement>): void => {
        AnonLog();
        let file = event.target.files![0];
        let reader = new FileReader();
        reader.onload = (function (theFile) {
            return function (e: any) {
                AWS.config.region = process.env.REACT_APP_REGION as string;
                let rekognition = new AWS.Rekognition();
                let params = {
                    Image: {
                        Bytes: e.target.result
                    },
                    Attributes: [
                        'ALL',
                    ]
                };
                rekognition.detectFaces(params, function (err: AWSError, data: DetectFacesResponse) {
                    if (err) {
                        setResult(null);
                        console.log(err, err.stack);
                    } else {
                        setResult(Object.entries(data.FaceDetails![0]));
                    }
                });
            }
        })(file);
        reader.readAsArrayBuffer(file);
    }

    const AnonLog = (): void => {
        AWS.config.region = process.env.REACT_APP_REGION as string;
        AWS.config.credentials = new AWS.CognitoIdentityCredentials({
            IdentityPoolId: process.env.REACT_APP_POOL_ID as string
        });
        (AWS.config.credentials as Credentials).get(function (): void {
            let accessKeyId = AWS.config.credentials?.accessKeyId;
            let secretAccessKey = AWS.config.credentials?.secretAccessKey;
            let sessionToken = AWS.config.credentials?.sessionToken;
        });
    }

    return (
        <div className={"divInput btn btn-primary"}>
            <label>
                Select Image
                <input type={"file"} accept={"image/*,.png,.jpg,.jpeg"}
                       onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
                           setResult(undefined);
                           if (changePage !== undefined) {
                               changePage(false);
                           }
                           await getImage(e);
                           ProcessImage(e);
                       }}
                />
            </label>
        </div>
    )
}

export default Get;
