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

export type pageProps = {
    image?:imageType;
    setImage: (param: imageType) => void;
    result?: resultType;
    setResult: (param: resultType) => void;
    changePage?: (param: boolean) => void;
}
