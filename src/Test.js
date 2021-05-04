import React from 'react';

export const Test = () => {
    const obj = {
        a: 10,
        b: 15,
        c: {
            c1:'sos',
            c2:'sos'
        },
    }
    const newObj = {...obj};
    console.log('newObj', newObj);
    obj.c.c1='sos';
    console.log('newObj', newObj);
    return  (
        <div>
            <h1>Hello</h1>
        </div>
    );
};