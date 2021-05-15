var qldb = require('amazon-qldb-driver-nodejs');
var qldbRecord;
const driver = new qldb.QldbDriver("helloworld");

exports.handler = async (event) => {

    await driver.executeLambda(async (txn) => {

        qldbRecord = (await txn.execute("SELECT * FROM greeting WHERE exclamation = 'Hello'")).getResultList();
        
    });

    const response = {
        statusCode: 200,
        body: qldbRecord.toString(),
    };
    return response;
};
