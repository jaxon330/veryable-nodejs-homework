const { query }  = require('./query');

const createOperators = async () => {
    await query( 
        `
            CREATE TABLE IF NOT EXISTS operators (
                id INTEGER PRIMARY KEY NOT NULL
                , "firstName" TEXT
                , "lastName" TEXT NOT NULL
                , "createdAt" DATE DEFAULT CURRENT_TIMESTAMP
            );
        `
    );
}

// business schema

const createBusinesses = async () => {
    await query(
        `
            CREATE TABLE IF NOT EXISTS businesses (
                id INTEGER PRIMARY KEY NOT NULL
                , "businessName" TEXT
                , "createdAt" DATE DEFAULT CURRENT_TIMESTAMP
            );
        `
    );
}

// ops schema

const createOps = async () => {
    await query(
        `
            CREATE TABLE IF NOT EXISTS ops (
                id INTEGER PRIMARY KEY NOT NULL
                , "operatorId" INT
                , "businessId" INT
                , "opTitle" TEXT
                , "pay" MONEY
                , "startTime" DATETIME
                , "endTime" DATETIME
                , "addressLine1" TEXT
                , "addressLine2" TEXT
                , "city" CHAR(50) NOT NULL
                , "state" CHAR(2) NOT NULL
                , "zip" MEDIUMINT UNSIGNED NOT NULL
                , "createdAt" DATE DEFAULT CURRENT_TIMESTAMP
                , FOREIGN KEY (operatorId) REFERENCES operators(id)
                , FOREIGN KEY (businessId) REFERENCES businesses(id)
            )
        `
    );
}

const seed = async () => {
    console.log( 'Seeding...' );

    await createOperators();

    await createBusinesses();

    await createOps();

    console.log( 'Seeding Completed.' );
}

module.exports = {
    seed
}
