//Задание 1

class PrintEditionItem {    
	constructor(name, releaseDate, pagesCount, state, type) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount; 
		this.state = 100;
		this.type = null;	
		
	}

  	set state(value) {
		this._state = value;
		if (value < 100) {
			value === 0;        
			}
		if (value > 100) {
			value === 100;        
			}
		}
		
	get state() {
		return this._state;    
			}
  
	fix() {
		return this.state * 1.5;
    }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type) {
    super(name, releaseDate, pagesCount, state, type);
    this.type = "magazine";
  }  
}

class Book extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type, author) {
    super(name, releaseDate, pagesCount, state, type);
    this.type = "book";
    this.author = author;
  }  
}

class NovelBook extends Book {
  constructor(name, releaseDate, pagesCount, state, type, author) {
    super(name, releaseDate, pagesCount, state, type, author);
    this.type = "novel";
  }  
}

class FantasticBook extends Book {
  constructor(name, releaseDate, pagesCount, state, type, author) {
    super(name, releaseDate, pagesCount, state, type, author);
    this.type = "fantastic";
  }  
}

class DetectiveBook extends Book {
  constructor(name, releaseDate, pagesCount, state, type, author) {
    super(name, releaseDate, pagesCount, state, type, author);
    this.type = "detective";
  }  
}


//Задание 2

class Library {
	constructor(name, books) {
		this.name = 'name';
		this.books = [];
	}
	
	addBook(book) {
		if (this.state > 30) {
			this.books.push(book);
		}
	}
	
	findBookBy(type, value) {
		
	}
}
	