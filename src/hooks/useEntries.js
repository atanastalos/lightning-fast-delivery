import {useEffect, useState} from 'react';
import * as Contentful from 'contentful';

const useEntries = contentType => {
    const [entries, setEntries] = useState([]);

    const client = Contentful.createClient({
        space: '9q21wi6ct9s3',
        accessToken: 'TgJgiOHNp2UAZC4NGWWbCfJSwY8Z-9N65-87qeI6Bvc'
    });

    useEffect(() => {
        client.getEntries({
            'content_type': contentType
        })
            .then((response) => {
                setEntries(response.items);
            })
    }, [])

    return entries;
}

export default useEntries;
