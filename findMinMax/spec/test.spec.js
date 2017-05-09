const findMinMax = require('../app.js').findMinMax;

(function() {
	'use strict';

		describe('Min-Max Numbers in a List: ', function () {

				describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

					it('should return [1,4] for [1, 2, 3 , 4]', function () {
						expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
					});

					it('should return [4, 6] for [6, 4]', function () {
						expect(findMinMax([6, 4])).toEqual([4, 6]);
					});

					it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
						expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
					});

				});

				describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

					it('should return [4] for [4, 4, 4, 4]', function () {
						expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
					});

				});

				describe('Min-Max Numbers in a List: Extra Tests ', function () {

			        describe('Return the min and max for different multiple equal numbers in a list', function () {

				        it('should return [1, 13] for [13, 13, 1, 1]', function () {
				        	expect(findMinMax([13, 13, 1, 1])).toEqual([1, 13]);
				        });

				        it('should return [2,  80] for [2, 5, 2, 8, 8, 12, 12, 80]', function () {
				        	expect(findMinMax([2, 5, 2, 8, 8, 12, 12, 80])).toEqual([2,  80]);
				        });

			        });    

    			});

    			describe('Cater for decimals', function () {

				    it('should return [0.5] for [0.5, 0.5, 0.5]', function () {
				      expect(findMinMax([0.5, 0.5, 0.5])).toEqual([0.5]);
				    });

				    it('should return [0.5, 3.5] for [0.5, 1.5, 2, 3, 3.5]', function () {
				      expect(findMinMax([0.5, 1.5, 2, 3, 3.5])).toEqual([0.5, 3.5]);
				    });

			  });

		});


	

})();