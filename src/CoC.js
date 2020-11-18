import React from 'react';
import useEntries from './hooks/useEntries';
import renderRichText from './hooks/renderRichText';

function CoC() {
    const entries = useEntries('codeOfConduct');

    const codeOfConduct = entries.map((entry) => (
        <div className="entry" key={entry.sys.id}>
            {renderRichText(entry.fields.description.content)}
        </div>
    ))

    return (
        <>
            <div className="menu">
                <div className="title">MENU</div>
                <div className="nav">
                    <p><a href="/" target="_blank">Home</a></p>
                    <p><a href="/contact" target="_blank">Contact</a></p>
                </div>
            </div>

            <div id="coc">
                <h5>Code of Conduct</h5>
                {codeOfConduct}
            </div>
        </>
    );
}

export default CoC;
