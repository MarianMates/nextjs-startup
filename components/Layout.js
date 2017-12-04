import Head from 'next/head'
import { Container } from 'reactstrap'

const Layout = (props) => (
  <div>
    <Head>
      <title>Base Structure</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css" crossOrigin="anonymous" />
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" crossOrigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js" crossOrigin="anonymous"></script>
    </Head>
    <Container>
      {props.children}
    </Container>
  </div>
)

export default Layout
