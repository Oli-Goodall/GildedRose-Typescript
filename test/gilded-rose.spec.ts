import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    // it('should foo', function() {
    //     const gildedRose = new GildedRose([ new Item('foo', 0, 0) ]);
    //     const items = gildedRose.updateQuality();
    //     expect(items[0].name).to.equal('foo');
    // });

    it('experiment to see what the expected output is', function(){
        const gildedRose = new GildedRose([ new Item('Normal Item', 1, 10)]);
        gildedRose.updateQuality();
        let result = gildedRose.updateQuality();
        expect(result[0].sellIn).to.equal(-1);
        expect(result[0].quality).to.equal(7);
    })

});
