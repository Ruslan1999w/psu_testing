import React, { useState, useRef} from "react";

const stringArrayToInt = (strArr) => {
    const regexp = /[\s,]/;
    let strArray = strArr.split(/\n/);
    strArray = strArray.filter((elem) => elem.length !== 0 ? elem.split(regexp) : null)
        .map((elem) => elem.split(regexp) );
    console.log('strArray', strArray);
    // const result = strArray.map((elem) => {
    //     console.log('elem', elem);
    //     return elem;
    // });
    return strArr;
}

export default function InputFile ({...props}) {
    const { setFile } = props;
    const inputEl = useRef(null);
    const inputHandler = (e) => {
        const reader = new FileReader();
        reader.readAsText(e.target.files[0]);

        reader.onload = function() {
            inputEl.current = reader.result;
            setFile(stringArrayToInt(inputEl.current));
        };
        reader.onerror = function() {
            console.log(reader.error);
        };

    }
    // const onButtonClick = () => {
    //     // `current` указывает на смонтированный элемент `input`
    //     inputEl.current.focus();
    // };
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

//onChange={(e) => {
//                                     const reader = new FileReader();
//                                     reader.readAsText(e.target.files[0]);
//
//                                     reader.onload = function() {
//                                         result = reader.result;
//                                         setSelectedFile(result);
//                                         console.log(result);
//                                     };
//
//                                     reader.onerror = function() {
//                                         console.log(reader.error);
//                                     };
//
//                                 }}
//    // let str = "+7(903)-123-45-67";
//     // let regexp1 = /^([-+])?\d+(\.\d+)?$/gi;