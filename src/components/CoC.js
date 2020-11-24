import React from 'react';
import useEntries from '../hooks/useEntries';
import renderRichText from '../hooks/renderRichText';

function CoC() {
    const entries = useEntries('codeOfConduct');

    const codeOfConduct = entries.map((entry) => (
        <div className="entry" key={entry.sys.id}>
            {renderRichText(entry.fields.description.content)}
        </div>
    ))

    return (
        <>
            <nav className="menu">
                <div className="title">MENU</div>
                <ul className="nav">
                    <li><a href="/" target="_blank">Home</a></li>
                    <li><a href="/contact" target="_blank">Contact</a></li>
                </ul>
            </nav>

            <div id="coc">
                <h5>Code of Conduct</h5>
                {codeOfConduct}
            </div>
        </>
    );
}

export default CoC;
