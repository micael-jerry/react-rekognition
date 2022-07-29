import React from "react";
import Result from "./Result";
import {DisplayImageProps} from "./type";

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
                                {
                                    (result === undefined || result === null) ?
                                        result === undefined ?
                                            (
                                                <>
                                                    <div className="px-4 py-5 my-5 text-center" >
                                                        Chargement
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <div className="px-4 py-5 my-5 text-center">
                                                        <h1 className="display-5 fw-bold">Error</h1>
                                                        <div className="col-lg-6 mx-auto">
                                                            <p className="lead mb-4">
                                                                Blocage d’une requête multiorigine (Cross-Origin Request) : la politique 
                                                                « Same Origin » ne permet pas de consulter la ressource distante
                                                            </p>
                                                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                                                                <button type="button" className="btn btn-outline-secondary btn-lg px-4">Secondary</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </>
                                            )
                                    : (
                                        (
                                            <div className="d-flex flex-column align-items-stretch flex-shrink-0 bg-white">
                                                <Result result={result} />
                                            </div>
                                        )
                                    )
                                }
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
