import {Component, OnDestroy} from '@angular/core';
import {Book} from '@pottery-ui/core';

import {books} from 'src/app/constants/books';
import {LibraryService} from '../../library.service';
import {Subscription} from 'rxjs';

export function bookFilter(filter: string) {
  const lowerCaseFilter = filter?.toLowerCase();

  return (book: Book) => !filter
    || book.title.toLowerCase().includes(lowerCaseFilter)
    || book.synopsis.join().toLowerCase().includes(lowerCaseFilter);
}

@Component({
  selector: 'app-books',
  template: `
    <ui-book-list [books]="books" [search]="search"></ui-book-list>
  `,
})
export class BooksComponent implements OnDestroy {
  books: Book[] = books;
  search: string;

  private subscription = new Subscription();

  constructor(
    private libraryService: LibraryService
  ) {
    this.subscription.add(
      libraryService.search$.subscribe(this.onSearchChanged.bind(this))
    );
  }

  onSearchChanged(search: string) {
    this.search = search;
    this.books = books.filter(bookFilter(this.search));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
