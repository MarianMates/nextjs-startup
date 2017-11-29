import stylesheet from 'styles/index.scss'

export default () => (
  <div>
    <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    <h1 className="title"><span>Hello</span> World</h1>
  </div>
)
