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
		this.currentValue = this.currentValue * x;
	}
	this.getCurrentValue = function () {
		console.log(this.currentValue);
	};
};

console.log("Problem #1:");
console.log("initialize multiplier function to multiply by 4... var myMultiplier = new Multiplier(4)")
var myMultiplier = new Multiplier(4);
console.log("get current value: myMultiplier.getCurrentValue()");
myMultiplier.getCurrentValue();
console.log("multiply (4)... myMultiplier.multiply()");
myMultiplier.multiply();
console.log("get current value: myMultiplier.getCurrentValue()");
myMultiplier.getCurrentValue();
console.log("multiply again... myMultiplier.multiply()");
myMultiplier.multiply();
console.log("multiply again... myMultiplier.multiply()");
myMultiplier.multiply();
console.log("get current value: myMultiplier.getCurrentValue()");
myMultiplier.getCurrentValue();



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
		console.log(this.photos[photo_location - 1]);
	}
}

function Photo(name, location) {
	this.name = name;
	this.location = location;
}

console.log("Problem #2:");
console.log("make three photos and one album...");
var firstPhoto = new Photo("1.jpg", "uptown");
var secondPhoto = new Photo("2.jpg", "downtown");
var thirdPhoto = new Photo("3.jpg", "midtown");
var myAlbum = new Album();
console.log("add photos to album... myAlbum.addPhoto(firstPhoto) (for three photos)");
myAlbum.addPhoto(firstPhoto);
myAlbum.addPhoto(secondPhoto);
myAlbum.addPhoto(thirdPhoto);
console.log("list all photos: myAlbum.listAllPhotos()");
myAlbum.listAllPhotos();
console.log("find the second photo: myAlbum.findPhoto(2)");
myAlbum.findPhoto(2);


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
 		console.log(book[0]);
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
 		console.log(this.books.length);
 	}
 }

console.log("Problem #3");
console.log("make three books and a library...");
 var firstBook = new Book ("Harry Potter", "J K Rowling", "Fantasy");
 var secondBook = new Book ("Stormlight Archive", "Brandon Sanderson", "Fantasy");
 var thirdBook = new Book ("The Fractal Geometry of Nature", "Benoit Mandlebrot", "Nonfiction");
 var myLibrary = new Library;
console.log("count books in library:  myLibrary.countBooks()");
 myLibrary.countBooks();
console.log("add books to library...  myLibrary.addBook(firstBook) (three times)");
 myLibrary.addBook(firstBook);
 myLibrary.addBook(secondBook);
 myLibrary.addBook(thirdBook);
console.log("count books:  myLibrary.countBooks()");
 myLibrary.countBooks();
console.log("get Stormlight Archive:  myLibrary.getBook(\"Stormlight Archive\")");
 myLibrary.getBook("Stormlight Archive");
console.log("remove Harry Potter...  myLibrary.removeBook(\"Harry Potter\")");
 myLibrary.removeBook("Harry Potter");
console.log("count books:  myLibrary.countBooks()");
 myLibrary.countBooks();



 /*
  * ADVANCED:
  *
  * 1.
  * Create a prototypical Person object. From this object, extend a Teacher object and a Student object. Each 
  * of these objects should have attributes and methods pertinent to what they describe. Also create a School 
  * object that should be able to store instances of students and teachers. Make sure to write code afterwards 
  * that creates instances of these objects to make sure that what you've written works well and you're able to 
  * store the necessary data in each object.
  *
  * 2.
  * Give the school the ability to hire new teachers, and take on more students. This will be done with one 
  * method of school, not two. This method will add teachers to the list of teachers, and students to the 
  * list of students.
  */

function Person (name, gender, age, height) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.height = height;
};

function Teacher(name, gender, age, height, years_taught, subject, nice) {
	Person.call(this, name, gender, age, height);

	this.years_taught = years_taught;
	this.subject = subject;
	this.nice = nice;
}

function Student(name, gender, age, height, grade, well_behaved) {
	Person.call(this, name, gender, age, height);

	this.grade = grade;
	this.well_behaved = well_behaved;
}

function School() {
	this.people = [];
	this.teachers = [];
	this.students = [];

	this.addPerson = function (person) {
		if (person.constructor == Teacher){
			this.people.push(person);
			this.teachers.push(person);
		} else {
			this.people.push(person);
			this.students.push(person);
		}
	}
	this.viewPerson = function (personName) {
		let person = this.people.filter(function (el) {
 			return (el.name === personName);
 		});
 		console.log(person[0]);
	}
}

console.log("Advanced Problem #1:");
console.log("make two students and two teachers and one school...");
var billy = new Student("Billy", "male", 11, "4\'8\"", 4, false);
var emily = new Student("Emily", "female", 14, "5\'5\"", 8, true);
var ron = new Teacher("Ronald", "male", 45, "6\'1\"", 20, "physics", false);
var susan = new Teacher("Susan", "female", 33, "5\'4\"", 10, "art", true);
var mySchool = new School;
console.log("add people to school:  mySchool.addPerson(billy) (for four people)");
mySchool.addPerson(billy);
mySchool.addPerson(emily);
mySchool.addPerson(ron);
mySchool.addPerson(susan);
console.log("view someone in the school: mySchool.viewPerson(\"Susan\")");
mySchool.viewPerson("Susan");
console.log("view someone else: mySchool.viewPerson(\"Billy\")");
mySchool.viewPerson("Billy");

