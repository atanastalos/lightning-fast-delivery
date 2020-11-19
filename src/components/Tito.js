import React from 'react';
import useScript from "../hooks/useScript";

function Tito() {
    useScript('https://js.tito.io/v1');

    return (
        <>
            <div id="tito">
                <tito-widget event={process.env.REACT_APP_TITO_EVENT}></tito-widget>
            </div>
        </>
    );
}

export default Tito;
