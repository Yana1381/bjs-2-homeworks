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
		if (value < 0) {
			this._state === 0;        
		}
		if (value > 100) {
			this._state === 100; 
		} 
		else {
			this._state = value;
		}
	}
		
	get state() {
			return this._state;    
	}
  
	fix() {
		this.state = this.state * 1.5;
    }
}


class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount, state, type) {
    super(name, releaseDate, pagesCount, state, type);
    this.type = "magazine";
  }  
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(name, releaseDate, pagesCount, state, type);
    this.type = "book";
    this.author = author;
  }  
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, state, type);
    this.type = "novel";
  }  
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, state, type);
    this.type = "fantastic";
  }  
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount, state, type) {
    super(author, name, releaseDate, pagesCount, state, type);
    this.type = "detective";
  }  
}

const picknick = new FantasticBook(
  "Аркадий и Борис Стругацкие",
  "Пикник на обочине",
  1972,
  168
);

console.log(picknick.author); //"Аркадий и Борис Стругацкие"
picknick.state = 10;
console.log(picknick.state); //10
picknick.fix();
console.log(picknick.state); //15


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
		book[type] === this.type;
		book[name] === this.name;
		book[releaseDate] === this.releaseDate;
		book[pagesCount] === this.pagesCount;
		book[author] === this.author;
		book[state] === this.state;
	}
	
	giveBookByName(bookName) {
    
    }
}
	

