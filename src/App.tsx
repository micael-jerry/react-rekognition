import Page from "./Components/Page";
import Home from "./Components/Home/Home";
import {useState} from 'react';
import {imageType, resultType} from './Components/type';

function App() {
    const [renderHome, setRenderHome] = useState<boolean>(true);
    const [image, setImage] = useState<imageType>(null);
    const [result, setResult] = useState<resultType>(undefined);

    return (
        <>
            {
                renderHome ? (
                    <Home
                        setImage={setImage}
                        setResult={setResult}
                        changePage={setRenderHome}
                    />
                ) : (
                    <Page
                        image={image}
                        setImage={setImage}
                        result={result}
                        setResult={setResult}
                    />
                )
            }
        </>
    );
}

export default App;
