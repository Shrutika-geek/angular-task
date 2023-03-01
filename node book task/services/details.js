books = [
  {
    bookId: 1001,
    bookName: "think and grow rich",
    authorName: "Napoleon Hill",
  },
  { bookId: 1002, bookName: "leaves of grass", authorName: "Walt Whiteman" },
  { bookId: 1003, bookName: "The One King", authorName: "Keller and jay" },
  { bookId: 1004, bookName: "ikigai", authorName: " Hill" },
];

booksDetails = {};

//fetch book list
booksDetails.retrieveBooks = () => {
  return books;
};

//fetch book details by id
bookDetails.retrieveBooks = (id) => {
  for (let i = 0; i < books.length; i++) {
    if (books[i]["bookId"] == id) return books[i];
  }
};

//addbook details
booksDetails.addBookDetail = (Book) => {
  if (Book) {
    let bookObj = JSON.parse(book);
    books.push(bookObj);
    console.log(books);
    return true;
  } else return false;
};

//delete by id
booksDetails.deleteBookDetail = (id) => {
  let index;
  if (id) {
    for (let i = 0; i < books.length; i++) {
      if (books[i]["bookId"] == id) {
        index = i;
        break;
      }
    }
    books.splice(index, 1);
    return true;
  } else {
    return false;
  }
};

//update by id
export const updateBookdetails = (id) => {};

module.exports = bookDetails;
