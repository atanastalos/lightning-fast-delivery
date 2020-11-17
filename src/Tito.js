import useScript from "./hooks/useScript";
import useEntries from "./hooks/useEntries";
import React from "react";

function Tito() {
    useScript('https://js.tito.io/v1');

    const entries = useEntries('titoWidget');

    const Entries = entries.map((entry) => (
        <div className="entry" key={entry.sys.id}>
            <tito-widget event={entry.fields.name}></tito-widget>
        </div>
        )
    );

    return (
        <>
            <div id="tito">
                {Entries}
            </div>
        </>
    );
}

export default Tito;
