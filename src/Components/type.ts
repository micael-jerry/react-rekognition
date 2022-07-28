export type itemFaceDetails = [
    string,
    {}
];

export type resultType = itemFaceDetails[] | null ;

export type DisplayImageProps = {
    image: string | null | ArrayBuffer | undefined;
    result: resultType
};
