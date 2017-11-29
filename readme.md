## Getting Started

### Prerequisites

```
You need to have node.js and npm installed.
```

### Installed stack
```
Next.js
Apollo
Configs for Sass and Css
```

### Installation

Install all node modules specified in the package.json file.
```
cd /path/to/project_root
npm install
```
Run project on http://localhost:3000/
```
npm run dev
```

## Using sass
Sass file is located at project_root/styles/index.scss .
```
In the component files, you need to import the sass file : import const_name from 'styles/index.scss'.
In  order to apply your styles to the component, you need to insert '<style dangerouslySetInnerHTML={{ __html: style }} />' after the highest order component.
Ex :
import style from 'styles/index.scss'

export default () => (
  <div>
    <style dangerouslySetInnerHTML={{ __html: style }} />
    <h1>Hello World</h1>
  </div>
)
```
```
You can assign variables with values for code reusability.
Ex :
$color : red

.class {
  color : $color;
}
```
