// This component is is used to customise the HTML head section
import Head from 'next/head';

const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <link rel="shortcut icon" href="" />
    {/* content such as css and images should be placed in the static folder */}
    <link rel="stylesheet" type="text/css" href="/static/style.css" />
    <link href="https://fonts.googleapis.com/css?family=Archivo|Roboto+Slab" rel="stylesheet"></link>
    <title>ITT News Network | Home</title>
  
  </Head>
  

);

export default Meta;