import { Flipside } from "@flipsidecrypto/sdk";
// Initialize `Flipside` with your API key
const flipside = new Flipside("00dc2cb5-185f-4e83-8d58-8844ed171df4", "https://api.flipsidecrypto.com");
// Create a query object for the `query.run` function to execute
// with a page size of 100 rows, starting with page #1.
const query = {
    sql: `
    SELECT
        to_asset,
        COUNT(to_asset)
    FROM thorchain.swaps
    GROUP BY to_asset
    ORDER BY COUNT(to_asset) DESC
  `,
    ttlMinutes: 10,
    pageSize: 100,
    pageNumber: 1,
};
// Send the `Query` to Flipside's query engine and await the results for Page #1
const page1Results = await flipside.query.run(query);
console.log(page1Results);
//# sourceMappingURL=index.js.map