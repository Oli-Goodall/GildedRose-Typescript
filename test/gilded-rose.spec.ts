import { expect } from 'chai';

import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {
    let gildedRose; 

    describe('Brie Tests', function() {
        beforeEach(() => gildedRose = new GildedRose([new Item('Aged Brie', 4, 25)]));
        it('Increases in quality as time goes by', () => {
            let item = gildedRose.items

            gildedRose.updateQuality()
            
            expect(item[0].sellIn).to.equal(3);
            expect(item[0].quality).to.equal(26);
        })
    })
});
