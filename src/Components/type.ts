export type imageType = string | null | undefined | ArrayBuffer;
export type itemFaceDetails = [
    string,
    {}
];

export type resultType = itemFaceDetails[] | null | undefined ;

export type DisplayImageProps = {
    image: string | null | ArrayBuffer | undefined;
    result: resultType
};
