import stylesheet from 'styles/index.scss'
import Layout from 'components/Layout.js'
import {Alert} from 'reactstrap'
import { Button } from 'reactstrap'

export default () => (
  <Layout>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <h1 className="title"><span>Hello</span> World</h1>
    <Alert color='primary'>
      Alert
    </Alert>
    <Button className='button-dng' color='danger'>Danger</Button>
  </Layout>
)
