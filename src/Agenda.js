import React from 'react';
import useEntries from "./hooks/useEntries";

function Agenda() {
    const entries = useEntries('agenda');
// console.log('fetched entries');
// console.log(entries);

    const session1 = entries.map((entry) => (
        <div className="entry" key={entry.sys.id}>
            <p>{entry.fields.session1}</p>
        </div>
    ))

    const session2 = entries.map((entry) => (
        <div className="entry" key={entry.sys.id}>
            <p>{entry.fields.session2}</p>
        </div>
    ))

    const session3 = entries.map((entry) => (
        <div className="entry" key={entry.sys.id}>
            <p>{entry.fields.session3}</p>
        </div>
    ))

    const session4 = entries.map((entry) => (
        <div className="entry" key={entry.sys.id}>
            <p>{entry.fields.session4}</p>
        </div>
    ))

    const extraInformation = entries.map((entry) => (
        <div className="entry" key={entry.sys.id}>
            <p>{entry.fields.extraInformation}</p>
        </div>
    ))

    return [session1, session2, session3, session4, extraInformation];
}

export default Agenda;
