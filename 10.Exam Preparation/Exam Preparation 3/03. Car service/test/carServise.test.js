const {expect} = require('chai')
const carService = require('../carService.js')

describe('Car Service', function () {
    describe('Is it expensive', () => {
        it('should return the cost will be more expensive when issue is engine or transmission', () => {
            expect(carService.isItExpensive("Engine")).to.equal("The issue with the car is more severe and it will cost more money")
            expect(carService.isItExpensive("Transmission")).to.equal(
                "The issue with the car is more severe and it will cost more money"
            );
        })

        it("should return the price will be a bit more cheaper when issue is different", () => {
            expect(carService.isItExpensive("Wheel")).to.equal(
                "The overall price will be a bit cheaper"
            )
        })
    })
    describe("discount", function () {
        it("should throw error when params are Nan", function () {
            expect(carService.discount("string", 5)).to.throw("Invalid input");

            expect(carService.discount(5, "string")).to.throw("Invalid input");
        });

        it("should return that discount was not applied when parts are below or equal 2", function () {
            expect(carService.discount(1, 40)).to.equal(
                "You cannot apply a discount"
            );

            expect(carService.discount(2, 40)).to.equal(
                "You cannot apply a discount"
            );
        });

        it("should return that discount is applied when parts are greater than 2", function () {
            expect(carService.discount(3, 20)).to.equal(
                `Discount applied! You saved 3$`
            );

            expect(carService.discount(7, 20)).to.equal(
                `Discount applied! You saved 3$`
            );

            expect(carService.discount(8, 20)).to.equal(
                `Discount applied! You saved 6$`
            );
        });
    });

    describe("partsToBuy", function () {
        it("should throw error if any of the inputs is not valid", function () {
            expect(
                carService.partsToBuy(NaN, ["blowoff valve", "injectors"])
            ).to.equal("Invalid input");

            expect(
                carService.partsToBuy(
                    [
                        {part: "blowoff valve", price: 145},
                        {part: "coil springs", price: 230},
                    ],
                    NaN
                )
            ).to.equal("Invalid input");
        });

        it("should return total sum correctly", function () {
            expect(
                carService.partsToBuy(
                    [{part: "blowoff valve", price: 100}],
                    ["blowoff valve"]
                )
            ).to.equal(100);
        });
    });

})