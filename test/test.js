/**
 * We have to do a bit of work upfront to allow the tests
 * to run in the browser and in Node.js. 
 */
let assert, expect;
let testItems = {};
if (typeof window === 'object') {
    // Run tests in browser
    assert = chai.assert;
    expect = chai.expect;
    mocha.setup('bdd');
    testItems = {
        // Variables
        favoriteFoods: typeof favoriteFoods !== 'undefined' ? favoriteFoods : undefined,
        numberOfFoods: typeof numberOfFoods !== 'undefined' ? numberOfFoods : undefined,
        secondAnimal: typeof secondAnimal !== 'undefined' ? secondAnimal : undefined,
        lastAnimal: typeof lastAnimal !== 'undefined' ? lastAnimal : undefined,
        dessert: typeof dessert !== 'undefined' ? dessert : undefined,
        entree: typeof entree !== 'undefined' ? entree : undefined,
        lastColor: typeof lastColor !== 'undefined' ? lastColor : undefined,
        firstColor: typeof firstColor !== 'undefined' ? firstColor : undefined,
        gems: typeof gems !== 'undefined' ? gems : undefined,
        gemString: typeof gemString !== 'undefined' ? gemString : undefined,
        colorfulGems: typeof colorfulGems !== 'undefined' ? colorfulGems : undefined,
        colors: typeof colors !== 'undefined' ? colors : undefined,
    };
} else {
    // Run tests in Node.js
    assert = require('assert');
    expect = require('chai').expect;
    testItems = require('../assignment/scripts/array-practice.js');
}

/**
 * Put all tests within this describe.
 */
describe('Automated tests', function () {
    describe(`Favorite Foods Array created`, function () {
        it(`Favorite Foods Array created`, function () {
            let { favoriteFoods } = testItems;
            expect(favoriteFoods, 'Expected favoriteFoods to be exist').to.exist;
            expect(favoriteFoods).to.be.a('array');
            expect(favoriteFoods.length).to.be.greaterThan(0);
        });
    });
    describe(`Used .length property to find array length`, function () {
        it(`Used .length property to find array length`, function () {
            let { numberOfFoods } = testItems;
            expect(numberOfFoods, 'Expected lastName to be a number').to.exist;
            expect(numberOfFoods).to.be.a('number');
            expect(numberOfFoods).to.be.greaterThan(0);
        });
    });
    describe(`Second animal is saved in a variable`, function () {
        it(`Second animal is saved in a variable`, function () {
            let { secondAnimal } = testItems;
            expect(secondAnimal, 'Expected secondAnimal to be a string').to.exist;
            expect(secondAnimal).to.be.a('string');
            expect(secondAnimal).to.equal('cat');
        });
    });
    describe(`Last animal is saved in a variable`, function () {
        it(`Last animal is saved in a variable`, function () {
            let { lastAnimal } = testItems;
            expect(lastAnimal, 'Expected lastAnimal to be a string').to.exist;
            expect(lastAnimal).to.be.a('string');
            expect(lastAnimal).to.equal('dog');
        });
    });
    describe(`Used .push() to add item to end of array`, function () {
        it(`Used .push() to add item to end of array`, function () {
            let { dessert, favoriteFoods } = testItems;
            expect(dessert, 'Expected dessert to be a string').to.exist;
            expect(dessert).to.be.a('string');
            expect(dessert).to.equal(favoriteFoods[favoriteFoods.length - 1]);
        });
    });
    describe(`Used .unshift() to add item to beginning of array`, function () {
        it(`Used .unshift() to add item to beginning of array`, function () {
            let { entree, favoriteFoods } = testItems;
            expect(entree, 'Expected dessert to be a string').to.exist;
            expect(entree).to.be.a('string');
            expect(entree).to.equal(favoriteFoods[0]);
        });
    });
    describe(`Used .pop() to remove the item from end of array`, function () {
        it(`Used .pop() to remove the item from end of array`, function () {
            let { lastColor, colors } = testItems;
            expect(lastColor, 'Expected lastColor to be a string').to.exist;
            expect(lastColor).to.be.a('string');
            expect(lastColor).to.equal('teal');
            expect(colors).to.be.an('array').that.does.not.include('teal');
        });
    });
    describe(`Used .shift() to remove the item from beginning of array`, function () {
        it(`Used .shift() to remove the item from beginning of array`, function () {
            let { firstColor, colors } = testItems;
            expect(firstColor, 'Expected firstColor to be a string').to.exist;
            expect(firstColor).to.be.a('string');
            expect(firstColor).to.equal('orange');
            expect(colors).to.be.an('array').that.does.not.include('orange');
        });
    });
    describe(`STRETCH: Replace 'Citrine' with 'Tourmaline'`, function () {
        it(`STRETCH: Replace 'Citrine' with 'Tourmaline'`, function () {
            let { gems } = testItems;
            if(gems.includes('Citrine')) {
                this.skip();
            } else {
                expect(gems).to.be.an('array').that.does.not.include('Citrine');
                expect(gems).to.be.an('array').that.does.include('Tourmaline');
            }
        });
    });
    describe(`STRETCH: Sort the gems in reverse alphabetical order`, function () {
        it(`STRETCH: Sort the gems in reverse alphabetical order`, function () {
            let { gems } = testItems;
            if (gems.includes('Citrine')) {
                this.skip();
            } else {
                expect(gems).to.eql(['Tourmaline', 'Topaz', 'Tanzanite', 'Iolite', 'Emerald', 'Diamond']);
            }
        });
    });
    describe(`STRETCH: Gem string with all gems`, function () {
        it(`STRETCH: Gem string with all gems`, function () {
            let { gemString } = testItems;
            if (gemString === undefined) {
                this.skip();
            } else {
                expect(gemString, 'Expected gemString to exist').to.exist;
                expect(gemString).to.equal('Tourmaline and Topaz and Tanzanite and Iolite and Emerald and Diamond');
            }
        });
    });
    describe(`STRETCH: Colorful gems contains gems and colors`, function () {
        it(`STRETCH: Colorful gems contains gems and colors`, function () {
            let { colorfulGems } = testItems;
            if (colorfulGems === undefined) {
              this.skip();
            } else {
              expect(colorfulGems).to.be.an('array');
              expect(colorfulGems).to.eql(['Tourmaline', 'Topaz', 'Tanzanite', 'Iolite', 'Emerald', 'Diamond', 'yellow', 'green']);
            }
        });
    });
});

/**
 * If running the tests in the browser, call mocha.run()
 */
if (typeof window === 'object') {
    mocha.run();
}
