import React from 'react';
import Get from '../GetImageAndResult/Get';
import {pageProps} from '../type';
import './Home.css';

const Home: React.FC<pageProps> = (props) => {
    const {setImage, setFaceDetails, changePage} = props;
    return (
        <div className="content-center text-center text-white bg-dark">
            <div className="cover-container p-3 mx-auto flex-column">
                <main className="px-3">
                    <h1>Amazon Rekognition</h1>
                    <p className="lead">Automate the analysis of your images</p>
                    <p className="lead"></p>
                    <p className="lead">
                        <Get
                            setImage={setImage}
                            setFaceDetails={setFaceDetails}
                            changePage={changePage}
                        />
                    </p>
                </main>
            </div>
        </div>
    )
}

export default Home;
