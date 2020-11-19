import {useEffect, useState} from 'react';
import config from '../config';
import * as Contentful from 'contentful';

const useEntries = contentType => {
    const [entries, setEntries] = useState([]);

    const client = Contentful.createClient({
        space: config.contentfulSpace,
        accessToken: config.contentfulAccessToken
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
