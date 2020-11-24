// import React from 'react';
// import {Helmet} from 'react-helmet';
// import {StaticQuery, graphql} from 'gatsby';
//
// const detailsQuery = graphql`
// query DefaultSEOQuery {
//     site {
//         siteMetaData {
//             title
//             description
//             author
//             image
//             }
//         }
//     }
// `
//
// function Seo({description, keywords, title, image, url, author}) {
//     return (
//         <StaticQuery
//             query={detailsQuery}
//             render={data => {
//                 const metaDescription = description || data.site.siteMetadata.description;
//                 const metaTitle = title || data.site.siteMetadata.title;
//                 const metaAuthor = author || data.site.siteMetadata.author;
//                 const metaUrl = url || data.site.siteMetadata.url;
//                 const metaImage = image || data.site.siteMetadata.image;
//                 const metaKeywords = keywords || ['lightning fast delivery', 'agile']
//                 return (
//                     <Helmet
//                         title={title}
//                         meta={[
//
//                         ].concat()}
//                 )
//                 }
//             }
//         )
//     }
//
// export default Seo;
