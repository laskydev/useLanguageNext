
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
            'es-MX': 'Hola Mundo', 
            'en-US': 'Hello World',
            'fr': 'Bonjour Monde
'
        })}
      </p>
  )
}
```

The key you must use is the same as the one you configured in the i18 of the next.config

```javascript
module.exports = {
  i18n: {
    locales: ['en-US', 'es-MX' , 'fr'], //Use this values for key in handleLanguage parameters
    defaultLocale: 'en-US',
  },
}
```

