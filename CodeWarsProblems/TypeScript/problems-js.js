

var lut = []; for (var i=0; i<256; i++) { lut[i] = (i<16?'0':'')+(i).toString(16); }
function e7()
{
    var d0 = Math.random()*0xffffffff|0;
    var d1 = Math.random()*0xffffffff|0;
    var d2 = Math.random()*0xffffffff|0;
    var d3 = Math.random()*0xffffffff|0;
    return lut[d0&0xff]+lut[d0>>8&0xff]+lut[d0>>16&0xff]+lut[d0>>24&0xff]+'-'+
    lut[d1&0xff]+lut[d1>>8&0xff]+'-'+lut[d1>>16&0x0f|0x40]+lut[d1>>24&0xff]+'-'+
    lut[d2&0x3f|0x80]+lut[d2>>8&0xff]+'-'+lut[d2>>16&0xff]+lut[d2>>24&0xff]+
    lut[d3&0xff]+lut[d3>>8&0xff]+lut[d3>>16&0xff]+lut[d3>>24&0xff];
}

class ComplexItem {
    constructor(item) {
        this.item = item;
		this.Id = e7(); 
    }
}

class Page {
	constructor(items, pgNumb) {
		this.items = items;
		this.pgNumb = pgNumb;
	}
}

 class PaginationHelper {

	constructor(collection, itemsPerPage) {
		// The constructor takes in an array of items and a integer indicating how many
		// items fit within a single page
		this.list = collection.map((i) => new ComplexItem(i));
		this.itemsPerPage = itemsPerPage;
		this.pages = this.generatePages([...this.list], this.itemsPerPage); 
	}

	generatePages = (l, itemsPerPage) => {
		
		let pages = [];
		let page = 1;

		while (l.length > 0) {
			let take = [...l].splice(0, itemsPerPage);
			l = [...l].splice(itemsPerPage);
			pages.push(new Page(take, page));
			page = page + 1;
		}

		return pages;
	}

	itemCount() {
	// returns the number of items within the entire collection
		return this.list.length;
	}

	pageCount() {
	// returns the number of pages
		return this.pages.length -1;
	}

	pageItemCount(pageIndex) {
	// returns the number of items on the current page. page_index is zero based.
	// this method should return -1 for pageIndex values that are out of range
		try {
			let complexItem = this.pages[pageIndex].length;

			return complexItem;
		} catch(e) {
			return -1;
		}
	}

	pageIndex(itemIndex) {
	// determines what page an item is on. Zero based indexes
	// this method should return -1 for itemIndex values that are out of range
		try {
			let item = this.list[itemIndex];

			let pageWithItem = this.pages.find((page) => {
				return page.items.some(i => i.Id === item.Id);
			});

			return pageWithItem.pgNumb;
		}
		catch(e) {
			return -1;
		}
	}
}

// Cheap sort algorithm

let slowSort = arr => {
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] < arr[j]) {
				let temp = arr[j];
				arr[j] = arr[i];
				arr[i] = temp;
			}
		}
	}

	return arr;
}

let twoOldestAges = ages => {
	let sortedAges = slowSort(ages);
	let [first, second, ...rest] = sortedAges;
	return [ second, first ];
}

module.exports = {
	PaginationHelper,
	twoOldestAges
}