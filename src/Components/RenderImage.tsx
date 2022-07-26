import React from "react";

type DisplayImageProps = {
    image: string | null | ArrayBuffer | undefined;
};

const RenderImage: React.FC<DisplayImageProps> = (props: DisplayImageProps) => {
    const { image } = props;
    return (
        <>
            {typeof image === 'string'
                ? (<img src={image} alt="image"/>)
                : (<></>)
            }
        </>
    )
}

export default RenderImage;
