const client = require("./client");

async function init() {
    await client.lpush("aircrafts", "Rafale");
    await client.lpush("aircrafts", "Sukhoi Su-30MKI");
    await client.lpush("aircrafts", "Tejas");
    await client.lpush("aircrafts", "Mirage 2000");
    await client.lpush("aircrafts", "MiG-29");
    const result = await client.rpop("aircrafts");
    console.log(result);
}

init();
