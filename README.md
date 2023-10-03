## How to use:

1. Use a SQL client such as TablePlus to query the data you need
2. Export that data as JSON, replacing the placeholder in `sql-dump-data.json`
3. [optional] change the resulting filename on line 21 (default is the current date as an ISO string)
4. Update the reduce function on line 4 to fit your needs
   a. [optional] filter out any data you don't want in the final result (this can sometimes be easier than creating an uber-specific SQL query)
   b. format/transform the data to contain all of the properties and values you need (object keys will become the spreadsheet headers; each item in the resulting array will become a row in the spreadsheet)
5. Run `node index.js` to create your CSV
6. Upload the CSV file to a spreadsheet

## Running the example:

```
cd example
node index.js
```
