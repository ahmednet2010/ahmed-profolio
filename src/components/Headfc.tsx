import React,{useEffect} from 'react'

export default ({ meta,data,lang,dir }: any) => {
    const metatag = [
      { name: "description", content: meta.description },
      { name: "keyword", content: meta.keyword },
      { name: "generator", content: meta.generator },
      { name: "title", content: meta.title },
      { name: "author", content: data.author },
      { name: "theme-color", content: data.color },
      { name: "robots", content: data.robots },
    ];
    useEffect(() => {
      const html:any|HTMLHtmlElement = document.querySelector("html");
      html.dir = dir;
      html.lang= lang;
    }, [])
    
    return (
      <>
        {metatag.map(({ name, content }, index) => (
          <meta name={name} content={content} key={index} />
        ))}
        <link rel="canonical" href={data.siteUrl} />
        <title>{meta.title}</title>
      </>
    );
}
