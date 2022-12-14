
# useLanguageNext

Quick and easy translation of your next.js applications




## Usage/Examples

```javascript
import useLanguage from 'useLanguageNext'

function App() {
  const {handleLanguage} = useLanguage()

  return (
      <p>
        {handleLanguage({
            'ES-MX': 'Hola Mundo', 
            'EN-US': 'Hello World'
        })}
      </p>
  )
}
```

The key you must use is the same as the one you configured in the i18 of the next.config

```javascript
module.exports = {
  i18n: {
    locales: ['en-US', 'fr', 'nl-NL'], //Use this values for key in handleLanguage parameters
    defaultLocale: 'en-US',
  },
}
```

