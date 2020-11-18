import React from 'react';

export default function renderRichText(content) {
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
