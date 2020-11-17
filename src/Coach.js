import React from 'react';
import useEntries from "./hooks/useEntries";

function Coach() {
    const entries = useEntries('coach');

    function renderRichText(content) {
        return content.flatMap((item, index) => {
            switch (item.nodeType) {
                case "paragraph":
                    return (<p key={index}>{renderRichText(item.content)}</p>);
                case "text":
                    return item.value;
                case "hyperlink":
                    return (<a key={index} href={item.data.uri} target="_blank">{renderRichText(item.content)}</a>)
            }
        });
    }

    const introduction = entries.map((entry) => (
        <div className="entry" key={entry.sys.id}>
            <h4>{entry.fields.title}</h4>
            {renderRichText(entry.fields.ivettsIntroduction.content)}
        </div>
    ))

    return introduction;
}

export default Coach;
