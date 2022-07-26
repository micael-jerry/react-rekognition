import React, {useState} from "react";
import RenderImage from "./RenderImage";

const Page: React.FC<{}> = () => {
    const [image,setImage] = useState<string | null | undefined | ArrayBuffer>(null);

    const getImage = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.files == null)
            return null;
        try {
            const reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = () => {
                setImage(reader.result);
                if(e.target.files == null)
                    return
            }
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div>
            <div>
                <input type={"file"} accept={"image/*,.png,.jpg,.jpeg"} onChange={getImage}/>
            </div>
            <RenderImage image={image} />
        </div>
    )
}

export default Page;
