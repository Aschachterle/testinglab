/**
 * This class handles change for a vending machine.
 * 
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {
    
    constructor(amountDue) {
        this.amountDue = amountDue;
        this.cashTendered = 0;
    }

    /**
     * The customer inserts a coin, increasing the cashTendered.
     * The parameter "type" is a string that is either quarter, dime, nickel, or penny
     */
    insertCoin(type) {
        if (type === "quarter") {
            this.cashTendered += 25
        } else if (type === "dime") {
            this.cashTendered += 10
        } else if (type === "nickel") {
            this.cashTendered += 5
        } else if (type === "penny") {
            this.cashTendered += 1
        }
    }

    /**
     * Returns true if enough coins have been inserted to at least meet the amountDue
     */
    isPaymentSufficient() {
        if (this.cashTendered >= this.amountDue) {
            return true;
        } else if (this.cashTendered < this.amountDue) {
            return false;
        }
    }

    giveChange() {
        let changeback = this.cashTendered - this.amountDue
        // TODO return the correct change in the following format...
        for (let i = 0; i < changeback; i++) {
            if (i % 25 === 0) {
                changeback - 25
                quarters++
            } else if (i % 10 === 0) {
                changeback - 10
                dimes++
            } else if (i % 5 === 0) {
                changeback - 5
                nickels++
            } else if (i % 1 === 0) {
                changeback - 1
                pennies++
            }
        }
        return {
            quarters: 0,
            dimes: 0,
            nickels: 0,
            pennies: 0
        }
    }
}
var vendor = new ChangeHandler(100);
var vendor2 = new ChangeHandler(68);