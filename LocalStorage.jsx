import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import './Local.css'
import View from './View';

function LocalStorage() {
  const [title, settitle] = useState("");
  const [author, setauthor] = useState("");
  const [bookNo, setBookno] = useState("");
  const getData = () => {
    const data = localStorage.getItem("books");
    if (data) {
      return JSON.parse(data);
    }
    else {
      return []
    }
  }
  const [books, setBooks] = useState(getData());
  const addDataHandler = (e) => {
    e.preventDefault();
    let book = {
      title,
      author,
      bookNo
    }
    setBooks([...books, book]);
    settitle("");
    setauthor("");
    setBookno("");
    }
  useEffect(() => {
    localStorage.setItem('books', JSON.stringify(books))
  }, [books])
  return (
    <div className='Wrapper'>
      <div className='nav-head'>
        <h1>BookList</h1>
        <p>Add and view your books using local storage</p>
      </div>
      <div className="main">
        <div className="form-container">
          <form autoComplete='off' className='form-group' onSubmit={addDataHandler}>
            <label>TITLE</label><br /><br />
            <input type="text" value={title} required className='form-control' onChange={(e) => settitle(e.target.value)} />
            <br /><br />
            <label>AUTHOR</label><br /><br />
            <input type="text" value={author} required className='form-control' onChange={(e) => setauthor(e.target.value)} />
            <br /><br />
            <label>ISBN</label><br /><br />
            <input type="text" value={bookNo} required className='form-control' onChange={(e) => setBookno(e.target.value)} />
            <br /><br />
            <button type='submit' className='btn'>AddBook</button>
          </form>
          </div>
        <div className="view-container">
          {books.length > 0 && <div className="table-responsive">
            <table className='table'>
              <thead>
                <tr className='head'>
                  <th>TITLE</th>
                  <th>AUTHOR</th>
                  <th>ISBN</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                <View books={books} setBooks={setBooks} />
                </tbody>
            </table>
            <button onClick={() => { setBooks([]) }} className='btn'>Remove All</button>
            </div>}
          {books.length < 1 && <div className='book'>No books are added yet</div>}
          </div>
      </div>
      </div>
      )
    }
    export default LocalStorage