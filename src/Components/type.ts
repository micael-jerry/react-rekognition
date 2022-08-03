export type imageType = string | null | undefined | ArrayBuffer;

export type faceDetailsType = object[] | null | undefined;

export type pageProps = {
    image?: imageType;
    setImage: (param: imageType) => void;
    faceDetails?: faceDetailsType;
    setFaceDetails: (param: faceDetailsType) => void;
    changePage?: (param: boolean) => void;
}

export type resultType = itemFaceDetails[] | null | undefined;

export type itemFaceDetails = [
    string,
    {}
];

export type DisplayImageAndResultProps = {
    image: string | null | ArrayBuffer | undefined;
    result: resultType;
    previous: () => void;
    next: () => void;
};
