import Page from "./Components/Page";
import Home from "./Components/Home/Home";
import {useState} from 'react';
import {imageType, resultType} from './Components/type';

function App() {
    const [renderHome, setRenderHome] = useState<boolean>(true);
    const [image, setImage] = useState<imageType>(null);
    const [faceDetails,setFaceDetails] = useState<any>(undefined)

    return (
        <>
            {
                renderHome ? (
                    <Home
                        setImage={setImage}
                        setFaceDetails={setFaceDetails}
                        changePage={setRenderHome}
                    />
                ) : (
                    <Page
                        image={image}
                        setImage={setImage}
                        faceDetails={faceDetails}
                        setFaceDetails={setFaceDetails}
                    />
                )
            }
        </>
    );
}

export default App;
