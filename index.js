/*
 * 1.
 * Create an object called Multiplier with two methods: multiply and getCurrentValue. multiply should initially 
 * return the number supplied * 1 and from then on whatever the current value is times the number supplied. 
 * getCurrentValue should return the last answer returned from multiply.
 */
function Multiplier(x) {
	this.x = x;
	this.currentValue = 1;
	this.multiply = function(){
		this.currentValue = currentValue * x;
		return this.currentValue;
	}
	this.getCurrentValue = function () {
		return currentValue;
	};
};

var myMultiplier = new Multiplier(4);


/*
 * 2.
 * Create an Album object that can contain many Photo objects in its photos attribute. Each Album should allow 
 * you to add a new Photo, list all Photos, and access a specific Photo by the order it was added. Each Photo 
 * should store the photo's file name (location) and the location the photo was taken in as strings. Create 
 * instances of each object defined to prove that your object model works.
 */
function Album() {
	this.photos = [];
	this.addPhoto = function(photo) {
		let i = this.photos.length;
		this.photos[i] = photo;
	};
	this.listAllPhotos = function() {
		for (var i = this.photos.length - 1; i >= 0; i--) {
			console.log(this.photos[i]);
		};
	};
	this.findPhoto = function(photo_location) {
		return this.photos[photo_location];
	}
}

function Photo(name, location) {
	this.name = name;
	this.location = location;
}

var firstPhoto = new Photo("1.jpg", "uptown");
var secondPhoto = new Photo("2.jpg", "downtown");
var thirdPhoto = new Photo("3.jpg", "midtown");
var myAlbum = new Album();
myAlbum.addPhoto(firstPhoto);
myAlbum.addPhoto(secondPhoto);
myAlbum.addPhoto(thirdPhoto);

/*
 * 3.
 * Create a Library object that holds Book objects. The Library object can retrieve a book by title, allows 
 * you to add a new Book, will get rid of a book by title, and will give you a count of how many books are in 
 * the library. Each Book holds a title, author, and genre. Create instances of each object defined to prove 
 * that your objects and their methods work.
 */

 function Book(title, author, genre) {
 	this.title = title;
 	this.author = author;
 	
 }