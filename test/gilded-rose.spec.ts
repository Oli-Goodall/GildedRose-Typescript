import { expect } from 'chai';

import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {
    let gildedRose; 

    describe('Brie Tests', function() {
        beforeEach(() => gildedRose = new GildedRose([new Item('Aged Brie', 4, 25)]));
        it('Increases in quality as time goes by', () => {
            let brie = gildedRose.updateQuality();
            // console.log(brie);
            // console.log(brie);
            expect(brie[0].sellIn).to.equal(3);
            expect(brie[0].quality).to.equal(26);
        })
    })

});
