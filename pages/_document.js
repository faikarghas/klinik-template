import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps (ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }
    render() {
        return (
            <html>
                <Head>
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="X-UA-Compatible" content="ie=edge" />

                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />

                    {/* bootstrap */}
                    <link
                        rel="stylesheet"
                        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                        crossOrigin="anonymous"
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}