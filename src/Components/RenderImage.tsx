import React from "react";
import Result from "./Result";
import {resultType,DisplayImageProps} from "./type";

const RenderImage: React.FC<DisplayImageProps> = (props: DisplayImageProps) => {
    const { image,result } = props;
    return (
        <>
            {typeof image === 'string'
                ? (
                    <>
                        <hr className="featurette-divider"/>
                        <div className="row featurette">
                            <div className="col-md-7 order-md-2">
                                <h2 className="featurette-heading">Face<span className="text-muted">description</span></h2>
                                <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white">
                                    <Result result={result} />
                                </div>
                            </div>
                            <div className="col-md-5 order-md-1">
                                <img
                                    className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                                    width={"500"}
                                    height={"500"}
                                    src={image}
                                    alt={"face"}
                                />
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
