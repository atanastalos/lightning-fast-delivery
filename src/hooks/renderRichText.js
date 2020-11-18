import React from 'react';

export default function renderRichText(content) {
    return content.flatMap((item, index) => {
            switch (item.nodeType) {
                case "paragraph":
                    return (<p key={index}>{renderRichText(item.content)}</p>);
                case "text":
                    if (item.marks.length) {
                        switch (item.marks[0].type) {
                            case "italic":
                                return (<i>{item.value}</i>);
                            case "bold":
                                return (<b>{item.value}</b>);
                        }
                    } else {
                        return item.value;
                    }
                case "hyperlink":
                    return (<a key={index} href={item.data.uri} target="_blank">{renderRichText(item.content)}</a>)
            }
        }
    );
}
