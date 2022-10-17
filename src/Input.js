import Table from "./Table";
import data from './data.json'
import { useState } from "react";


const Input = () => {
    const [objData, setObjData] = useState(data);
    const mime = ["application/json"]
    let file;

    const fileUpload = (e) => {
        file = e.target.files[0];
        let fileType = file.type;
        if (mime.includes(fileType)) {
            let reader = new FileReader();
            reader.onload = onReaderLoad;   
            reader.readAsText(e.target.files[0]);
        }
        else {
            alert("Invalid");
        }
    }

    function onReaderLoad(e) {
        const objType = JSON.parse(e.target.result);
        setObjData(objType);
    }

    function getHeader() {
        return Object.keys(objData[0]);
    }

    return (
        <div className="flex justify-center items-center flex-col">
            <div className="flex justify-center items-center mt-2">
                <label>
                    <input
                        type="file"
                        className="text-lg text-grey-500
                        file:py-2 file:px-6
                        file:rounded-full file:border-0
                        file:text-lg file:font-medium
                        file:bg-[#6c7ae0] file:text-white
                        hover:file:cursor-pointer hover:file:bg-[#8893e6]
                        text-gray-500 font-semibold"
                        onChange={(e) => fileUpload(e)}
                    />
                </label>
            </div>
            <Table keys={getHeader()} data={objData} />
        </div>
    );
}

export default Input

