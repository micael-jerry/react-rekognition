import React from "react";

type DisplayImageProps = {
    image: string | null | ArrayBuffer | undefined;
};

const RenderImage: React.FC<DisplayImageProps> = (props: DisplayImageProps) => {
    const { image } = props;
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
                                    <div className="list-group list-group-flush border-bottom scrollarea">
                                        <div className="list-group-item list-group-item-action py-3 lh-tight">
                                            <div className="d-flex w-100 align-items-center justify-content-between">
                                                <strong className="mb-1">List group item heading</strong>
                                                <small className="text-muted">Tues</small>
                                            </div>
                                            <div className="col-10 mb-1 small">Some placeholder content in a paragraph
                                                below the heading and date.
                                            </div>
                                        </div>
                                    </div>
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
