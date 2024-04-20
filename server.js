const express = require('express')
const axios = require('axios').default
const client = require('./client')
const app = express()

app.get('/', async (req, res) => {
    const cacheValue = await client.get('posts')
    if(cacheValue) return res.json(JSON.parse(cacheValue))
    const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')
    await client.set("posts", JSON.stringify(data))
    await client.expire("posts", 60)
    return res.json(data)
})

app.listen(9000, () => console.log('Server running on PORT 9000'))