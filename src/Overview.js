import React from 'react';
import useEntries from "./hooks/useEntries";

function Overview() {
    const entries = useEntries('overview');
// console.log('fetched entries');
// console.log(entries);

    const overviewDescription = entries.map((entry) => (
        <div className="entry" key={entry.sys.id}>
            <h5>{entry.fields.headline}</h5>
            <p>{entry.fields.longerDescription}</p>
        </div>
    ))

    const overViewList1 = entries.map((entry) => (
        <div className="entry" key={entry.sys.id}>
            <h4>{entry.fields.listTitle1}</h4>
            <p>{entry.fields.listDescription1}</p>
        </div>
    ))

    const overViewList2 = entries.map((entry) => (
        <div className="entry" key={entry.sys.id}>
            <h4>{entry.fields.listTitle2}</h4>
            <p>{entry.fields.listDescription2}</p>
        </div>
    ))

    const overViewList3 = entries.map((entry) => (
        <div className="entry" key={entry.sys.id}>
            <h4>{entry.fields.listTitle3}</h4>
            <p>{entry.fields.listDescription3}</p>
        </div>
    ))

    return [overviewDescription, overViewList1, overViewList2, overViewList3];
}

export default Overview;
