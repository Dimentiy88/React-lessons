import React from 'react';
import { Book } from 'components/Book/Book';
import { Heading } from './components/Heading/Heading';

import css from './App.module.css';
import booksJson from './books';

const books = booksJson.books;

export const App = props => {
  return (
    <div>
      <Heading>React lesson 2,CSS</Heading>
      <ul className={css.booksList}>
        {books.map((book, index) => {
          return (
            <Book
              key={`${book.cover}_${book.title}`}
              title={book.title}
              author={book.author}
              year={book.year}
              genre={book.genre}
              favourite={book.favourite}
              cover={book.cover}
            />
          );
        })}
      </ul>
    </div>
  );
};
