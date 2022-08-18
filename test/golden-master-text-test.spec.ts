// import { expect } from 'chai';
// import { Item, GildedRose } from '../app/gilded-rose';



// describe('Gilded Rose', function () {

//     it('Should match output before refactoring', function(){
//         const gildedRose = new GildedRose([ new Item('Normal Item', 1, 10), 
//         new Item('Aged Brie', 1, 10), 
//         new Item('Backstage passes to a TAFKAL80ETC concert', 1, 10),
//         new Item('Sulfuras, Hand of Ragnaros', 1, 10),
//         new Item('Normal Item', -1, 10), 
//         new Item('Aged Brie', -1, 10), 
//         new Item('Backstage passes to a TAFKAL80ETC concert', -1, 10),
//         new Item('Sulfuras, Hand of Ragnaros', -1, 10)]);
        
//         gildedRose.updateQuality();
//         gildedRose.updateQuality();
//         gildedRose.updateQuality();
//         gildedRose.updateQuality();
//         gildedRose.updateQuality();
//         let result = gildedRose.updateQuality();
//         let expectedResult = [{ name: 'Normal Item', sellIn: -5, quality: 0 },
//             { name: 'Aged Brie', sellIn: -5, quality: 21 },
//             {
//               name: 'Backstage passes to a TAFKAL80ETC concert',
//               sellIn: -5,
//               quality: 0
//             },
//             { name: 'Sulfuras, Hand of Ragnaros', sellIn: 1, quality: 10 },
//             { name: 'Normal Item', sellIn: -7, quality: 0 },
//             { name: 'Aged Brie', sellIn: -7, quality: 22 },
//             {
//               name: 'Backstage passes to a TAFKAL80ETC concert',
//               sellIn: -7,
//               quality: 0
//             },
//             { name: 'Sulfuras, Hand of Ragnaros', sellIn: -1, quality: 10 }];
//         expect(result).to.deep.equal(expectedResult);
//     })
// });



// // function areArraysEqual(array1, array2){
// //     if (array1.length !== array2.length){
// //         return false
// //     };
// //     for (let i = 0; i > array1.length; i++ ){
// //         if (array1[i] !== array2[i]){
// //             return false
// //         }
// //     };
// //     return true
// // };