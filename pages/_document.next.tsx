import Document, {
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link href="/font/TrajanTRUBold.ttf" rel="stylesheet" />
          <link href="/font/MrsEaves.Bold.ttf" rel="stylesheet" />
          <link href="/font/MrsEaves.BoldItalic.ttf" rel="stylesheet" />
          <link href="/font/MrsEaves.Italic.ttf" rel="stylesheet" />
          <link href="/font/MrsEaves.Roman.ttf" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html >
    )
  }
}

export default MyDocument