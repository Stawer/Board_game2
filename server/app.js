const express = require('express')
const app = express()
const port = 3000

require('./services/LanguageMock')
require('./services/AuthorMock')
require('./services/TypeMock')
require('./services/StoreMock')
require('./services/SupplierMock')
require('./services/GameMock')
require('./services/InventoryMock')

//parsea las rerquest json
app.use(express.json())

//permite modularizar y asignar rutas particulares
app.use('/authors', require('./routes/authors.js'))
app.use('/games', require('./routes/games.js'))
app.use('/store', require('./routes/store.js'))
app.use('/supplier', require('./routes/supplier.js'))
app.use('/types', require('./routes/types.js'))
app.use('/languages', require('./routes/languages.js'))
app.use('/inventory', require('./routes/inventory.js'))

app.listen(port, () => {
    console.log('listening on port', port)
})