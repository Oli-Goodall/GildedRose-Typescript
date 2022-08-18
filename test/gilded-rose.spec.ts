import { expect } from 'chai';

import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {
    let gildedRose; 

    describe('Brie Tests', function() {
        it('Increases in quality as time goes by', () => {
            let gildedRose = new GildedRose([new Item('Aged Brie', 4, 25)]);
            let items = gildedRose.items;

            gildedRose.updateQuality();
            
            expect(items[0].sellIn).to.equal(3);
            expect(items[0].quality).to.equal(26);
        })
        it('Quality cannot equal over 50', () => {
            let gildedRose = new GildedRose([new Item('Aged Brie', 4, 50)])
            let items = gildedRose.items;

            gildedRose.updateQuality();
            
            expect(items[0].sellIn).to.equal(3);
            expect(items[0].quality).to.equal(50);
        })
    })
    describe('Normal Item tests', function() {
        it('Decreases in quality', () => {
            let gildedRose = new GildedRose([new Item('Normal Item', 4, 25)]);
            let items = gildedRose.items;

            gildedRose.updateQuality();
            
            expect(items[0].sellIn).to.equal(3);
            expect(items[0].quality).to.equal(24);
        })
    })
});
