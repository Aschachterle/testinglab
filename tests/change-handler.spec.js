// These test cases are all unfinished. We will finish them together.
describe("tests for change-handler", function() {

    // Set up a test below...
    it("amountDue is set based on an argument", function() {
        // Remember, you can arrange, act, and assert...start small
        expect(vendor).toBeDefined(100);
    });

    it("cashTendered is set to zero.", function() {
        expect(vendor.cashTendered).toBeDefined(0);
    });

    it("Inserting a quarter adds 25.", function() {
        vendor.insertCoin("quarter");
        expect(vendor.cashTendered).toBe(25);
    });
    it("Inserting a dime adds 10.", function() {
        vendor.insertCoin("dime");
        expect(vendor.cashTendered).toBe(35);
    });
    it("Inserting a nickel adds 5.", function() {
        vendor.insertCoin("nickel");
        expect(vendor.cashTendered).toBe(40);
    });
    it("Inserting a nickel adds 5.", function() {
        vendor.insertCoin("penny");
        expect(vendor.cashTendered).toBe(41);
    });
    // it("Returns true if cashTendered more than amountDue.", function() {
    //     vendor.insertCoin("quarter");
    //     expect(vendor.isPaymentSufficient()).toBe(true);
    // });
    it("Returns false if cashTendered less than amountDue.", function() {
        expect(vendor.isPaymentSufficient()).toBe(false);
    });
    it("32 change produces: quarters: 1, dimes: 0, nickels: 1, pennies: 2.", function() {
        vendor2.insertCoin("quarter");
        vendor2.insertCoin("quarter");
        vendor2.insertCoin("quarter");
        vendor2.insertCoin("quarter");
        expect(vendor2.giveChange()).toEqual({quarters: 1, dimes: 0, nickels: 1, pennies: 2})
    });
});