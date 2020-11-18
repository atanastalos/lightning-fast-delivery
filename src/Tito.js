import React from 'react';
import useScript from "./hooks/useScript";
import useEntries from "./hooks/useEntries";

function Tito() {
    useScript('https://js.tito.io/v1');

    const entries = useEntries('titoWidget');

    if(!entries) {return null;}

    const nameOfEvent = entries.map((entry) => (
        <div className="entry" key={entry.sys.id}>
            <tito-widget event={entry.fields.name}></tito-widget>
        </div>
        )
    );

    return (
        <>
            <div id="tito">
                {nameOfEvent}
            </div>
        </>
    );
}

export default Tito;
