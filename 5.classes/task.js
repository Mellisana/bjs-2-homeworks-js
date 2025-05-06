class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this._name = name;
        this._releaseDate = releaseDate;
        this._pagesCount = pagesCount;
        this._state = 100;
        this._type = null;
    }

    get name() { return this._name; }
    get releaseDate() { return this._releaseDate; }
    get pagesCount() { return this._pagesCount; }
    get state() { return this._state; }
    get type() { return this._type; }

    set state(newState) {
        if (newState < 0) {
            this._state = 0;
        } else if (newState > 100) {
            this._state = 100;
        } else {
            this._state = newState;
        }
    }

    fix() {
        let newState = Math.min(this.state * 1.5, 100); // Увеличиваем состояние, но ограничиваем максимумом 100%
        this.state = newState;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this._type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);   
        this._author = author;                  
        this._type = "book";
    }

    get author() { return this._author; }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this._type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this._type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this._type = "detective";
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (book.state >= 30) {
            this.books.push(book);
        }
    }

    findBookBy(field, value) {
        const foundBook = this.books.find((book) => book[field] === value);
        return foundBook || null; // Если книга не найдена, возвращаем null
    }

    giveBookByName(bookName) {
        const index = this.books.findIndex((book) => book.name === bookName);
        if (index !== -1) {
            return this.books.splice(index, 1)[0]; // Возвращаем удалённую книгу
        }
        return null;
    }
}