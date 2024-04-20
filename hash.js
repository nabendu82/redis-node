const client = require("./client");

async function init() {
    const result = await client.hset(
        'motorcycle:2',
        {
            model: 'RX125',
            brand: 'Yamaha',
            type: 'Yamaha bikes',
            price: 99000
        }
    )
    console.log(`No of fields added ${result}`);

    const model = await client.hget('motorcycle:2', 'model');
    console.log(`Model: ${model}`);
}

init();
