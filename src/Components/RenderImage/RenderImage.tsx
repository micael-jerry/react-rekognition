import React from "react";
import Result from "../Result/Result";
import {DisplayImageProps} from "../type";
import './RenderImage.css'

const RenderImage: React.FC<DisplayImageProps> = (props: DisplayImageProps) => {
    const {image, result} = props;
    return (
        <>
            {typeof image === 'string'
                ? (
                    <>
                        <hr className="featurette-divider"/>
                        <div className="row">
                            <div className="col-md-5 text-center">
                                <img
                                    className="image bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                                    width={"500"}
                                    height={"500"}
                                    src={image}
                                    alt={"face"}
                                />
                            </div>
                            <div className="scroll-bg col-md-7">
                                <h2 className="featurette-heading">
                                    Face
                                    <span className="text-muted"> description</span>
                                </h2>
                                {
                                    (result === undefined || result === null) ?
                                        (result === undefined) ?
                                            (
                                                <>
                                                    <div className="px-4 py-5 my-5 text-center">
                                                        <div className="d-flex justify-content-center">
                                                            <div className="spinner-border" role="status"></div>
                                                        </div>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="px-4 py-5 my-5 text-center">
                                                        <div className="alert alert-dismissible" role="alert">
                                                            <h4 className="alert-heading">Network Error</h4>
                                                            <hr/>
                                                            <p className="mb-0">The network connection is lost</p>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                        : (
                                            (
                                                <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white">
                                                    <Result result={result}/>
                                                </div>
                                            )
                                        )
                                }
                            </div>
                        </div>
                        <hr className="featurette-divider"/>
                    </>
                )
                : (<></>)
            }
        </>
    )
}

export default RenderImage;
