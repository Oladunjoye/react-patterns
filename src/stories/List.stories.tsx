import { LargeListItem } from "../patterns/layout-pattern/Lists/LargeListItem";
import { List } from "../patterns/layout-pattern/Lists/List";
import {
  SmallListBookItem,
  SmallListMovieItem,
} from "../patterns/layout-pattern/Lists/SmallListItem";

const meta = {
  title: "Components/Layout/List",
  component: List,
  tags: ["autodocs"],
};
export default meta;

const itemList = [{ id: 1, author: "Joye", book: "A yellow sun" }];
const movieItemList = [
  { id: 1, director: "Spielberg Richard", movie: "Batman Trilogy" },
];

const largeItemList = [
  {
    id: 1,
    author: "J.K. Rowling",
    books: [
      { title: "Harry Potter and the Sorcerer's Stone" },
      { title: "Harry Potter and the Chamber of Secrets" },
    ],
  },
  {
    id: 2,
    author: "J.R.R. Tolkien",
    books: [{ title: "The Hobbit" }, { title: "The Lord of the Rings" }],
  },
];

export const SmallListBooks = () => (
  <List
    ItemComponent={SmallListBookItem}
    items={itemList}
    sourceName="bookData"
  />
);

export const SmallListMovies = () => (
  <List
    ItemComponent={SmallListMovieItem}
    items={movieItemList}
    sourceName="movieData"
  />
);

export const LargeListBooks = () => (
  <List
    ItemComponent={LargeListItem}
    items={largeItemList}
    sourceName="bookData"
  />
);
