import Table from "./Table";
import data from './data.json'
import Handler from "./Handler";
import { useState, useEffect } from "react";


const Input = () => {
    const [objData, setObjData] = useState(data);
    const [isValid, setIsValid] = useState(true);
    const [error, setError] = useState('');
    const [keys, setKeys] = useState([]);
    const mime = ["application/json"]
    let file;

    useEffect(() => {
        const headKeys = () => {
            try {
                const keys = Object.keys(data[0]);
                setKeys(keys);
                setIsValid(true);
            } catch (err) {
                setIsValid(false);
                setError(`Default JSON File not Found : ${err.message}`);
            }
        }
        headKeys();
    }, [])

    const fileUpload = (e) => {
        file = e.target.files[0];
        let fileType = file.type;
        if (mime.includes(fileType)) {
            let reader = new FileReader();
            reader.onload = onReaderLoad;
            reader.readAsText(e.target.files[0]);
        }
        else {
            alert("Invalid File Type");
            e.target.value = null;
        }
    }

    const onReaderLoad = (e) => {
        try {
            const objParsed = JSON.parse(e.target.result);
            const keys = Object.keys(objParsed[0]);
            if((keys.length || objParsed.length) > 100) throw Error("JSON File is too big");
            setKeys(keys);
            setObjData(objParsed);
            setIsValid(true);
        } catch (err) {
            setIsValid(false);
            setError(`Error : ${err.message}`);
        }
    }

    return (
        <div className="flex justify-center items-center flex-col">
            <div className="mt-4">
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

            <div>
                {isValid ?
                    (
                        <>
                            <Table keys={keys} data={objData} />
                        </>
                    )
                    : (
                        <>
                            <Handler error={error} />
                        </>
                    )
                }
            </div>

        </div>
    );
}

export default Input

