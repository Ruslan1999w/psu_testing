import React, { useState, useRef} from "react";

const stringArrayToInt = (strArr) => {
    const regexp = /[\s,]/;
    let strArray = strArr.split(/\n/);
    strArray = strArray.filter((elem) => elem.length !== 0 ? elem.split(regexp) : null)
        .map((elem) => elem.split(regexp) );
    return (strArray.map((row) => {
        return (row.map((elem) => {
         return elem * 1;
        }));
    }));
}

export default function InputFile ({...props}) {
    const { setFile, matrixVisibility } = props;
    const inputEl = useRef(null);

    const inputHandler = (e) => {
        const reader = new FileReader();
        reader.readAsText(e.target.files[0]);

        reader.onload = function() {
            inputEl.current = reader.result;
            setFile(stringArrayToInt(inputEl.current));
            matrixVisibility(true);
        };
        reader.onerror = function() {
            console.log(reader.error);
        };

    };

    return (
        <label className="custom-file-upload">
            <input
                type="file"
                ref={inputEl}
                onChange={inputHandler}
            />
            Загрузить файл
        </label>
    );
};