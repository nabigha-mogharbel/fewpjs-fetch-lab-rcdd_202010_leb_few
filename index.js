function getPost(dd){
  for (let i=0; i<dd.length; i++){
    let bookname=[];
    bookname.push(json[i].name);
  }
  renderBooks(bookname);
}

function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
  .then(resp => resp.json())
  .then(json => getPost(json));
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})

