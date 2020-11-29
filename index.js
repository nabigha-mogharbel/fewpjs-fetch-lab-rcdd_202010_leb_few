

let books=[];

function getPost(dd){
  for (let i=0; i<dd.length; i++){
   let book={name };
   book.name=dd[i].name
   books.push(book);
  }
  renderBooks(books);
}

function fetchBooks(url) {
  fetch(url)
  .then(resp => resp.json())
  .then(json => getPost(json));
}


function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerText = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks('https://anapioficeandfire.com/api/books')
});