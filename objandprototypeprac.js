function makeBook(title, author, pageCount, readStatus) {
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.readStatus = readStatus;
};

makeBook.prototype.infoFunc = function() {
    return (this.title + ' by ' + this.author + ', ' + this.pageCount + ' pages, ' + this.readStatus + '.');
};

const hobbitBook = new makeBook('The Hobbit', 'J.R.R Tolkien', 296, 'not read yet');

console.log(hobbitBook.infoFunc())
