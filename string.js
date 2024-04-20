const client = require("./client");

async function init() {
    // await client.set("car:5", "tiago ev")
    await client.expire("car:5", 10);
    const result = await client.get("car:5");
    console.log(`Result is ${result}`);
}

init();