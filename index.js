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
			console.log(this.photos[i].name);
		};
	};
	this.findPhoto = function(photo_location) {
		return this.photos[photo_location - 1];
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

 function Book (title, author, genre) {
 	this.title = title;
 	this.author = author;
 	this.genre = genre;
 }

 function Library() {
 	this.books = [];
 	var indexOfBook = "";

 	this.getBook = function (book_title) {
 		let book = this.books.filter(function (el) {
 			return (el.title === book_title);
 		});
 		return book[0];
 	}


 	this.getBookIndex = function (book_title) {
 		indexOfBook = this.books.indexOf(this.getBook(book_title));
 	}


 	this.addBook = function (book) {
 		this.books.push(book);
 	}


 	this.removeBook = function (book_title) {
 		this.getBookIndex(book_title);
 		this.books.splice(indexOfBook, 1);
 	}


 	this.countBooks = function () {
 		return this.books.length;
 	}
 }

 var firstBook = new Book ("Harry Potter", "J K Rowling", "Fantasy");
 var secondBook = new Book ("Stormlight Archive", "Brandon Sanderson", "Fantasy");
 var thirdBook = new Book ("The Fractal Geometry of Nature", "Benoit Mandlebrot", "Nonfiction");
 var myLibrary = new Library;
 myLibrary.addBook(firstBook);
 myLibrary.addBook(secondBook);
 myLibrary.addBook(thirdBook);



 /*
  * ADVANCED:
  *
  * 1.
  * Create a prototypical Person object. From this object, extend a Teacher object and a Student object. Each 
  * of these objects should have attributes and methods pertinent to what they describe. Also create a School 
  * object that should be able to store instances of students and teachers. Make sure to write code afterwards 
  * that creates instances of these objects to make sure that what you've written works well and you're able to 
  * store the necessary data in each object.
  */

function Person () {

};

function Teacher(argument) {
	// body...
}

  /*
   * 2.
   * Give the school the ability to hire new teachers, and take on more students. This will be done with one 
   * method of school, not two. This method will add teachers to the list of teachers, and students to the 
   * list of students.
   */