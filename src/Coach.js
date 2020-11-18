import React from 'react';
import useEntries from './hooks/useEntries';
import renderRichText from './hooks/renderRichText';

function Coach() {
    const entries = useEntries('coach');

    const introduction = entries.map((entry) => (
        <div className="entry" key={entry.sys.id}>
            <h4>{entry.fields.title}</h4>
            {renderRichText(entry.fields.ivettsIntroduction.content)}
        </div>
    ))

    return introduction;
}

export default Coach;
