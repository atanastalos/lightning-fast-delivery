import React from 'react';
import config from '../config';
import useScript from "../hooks/useScript";

function Tito() {
    useScript('https://js.tito.io/v1');

    return (
        <>
            <div id="tito">
                <tito-widget event={config.titoEvent}></tito-widget>
            </div>
        </>
    );
}

export default Tito;
