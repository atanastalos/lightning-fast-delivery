import React from 'react';
import useEntries from '../hooks/useEntries';
import renderRichText from '../hooks/renderRichText';

function Agenda() {
    const entries = useEntries('agenda');

    const session1 = entries.map((entry) => (
        <div className="entry" key={entry.sys.id}>
            {renderRichText(entry.fields.session1.content)}
        </div>
    ))

    const session2 = entries.map((entry) => (
        <div className="entry" key={entry.sys.id}>
            {renderRichText(entry.fields.session2.content)}
        </div>
    ))

    const lunch = entries.map((entry) => (
        <div className="entry" key={entry.sys.id}>
            <p>{entry.fields.lunchTime}</p>
        </div>
    ))

    const extraInformation = entries.map((entry) => (
        <div className="entry" key={entry.sys.id}>
            <span className="extratext">{entry.fields.extraInformation}</span>
        </div>
    ))

    const session3 = entries.map((entry) => (
        <div className="entry" key={entry.sys.id}>
            {renderRichText(entry.fields.session3.content)}
        </div>
    ))

    const session4 = entries.map((entry) => (
        <div className="entry" key={entry.sys.id}>
            {renderRichText(entry.fields.session4.content)}
        </div>
    ))

    const session5 = entries.map((entry) => (
        <div className="entry" key={entry.sys.id}>
            {renderRichText(entry.fields.session5.content)}
        </div>
    ))


    return [session1, session2, lunch, extraInformation, session3, session4, session5];
}

export default Agenda;
