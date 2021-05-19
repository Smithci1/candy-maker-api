const express = require('express')
const PORT = 1400

const app = express()

app.listen(PORT, () => console.log(`server runnning on port: http://localhost:${PORT}`));
