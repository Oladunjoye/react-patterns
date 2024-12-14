type Book = {
  title: string;
};

type BookData = {
  author: string;
  books: Book[];
};
type LargeListItemProps = {
  bookData: BookData;
};
export const LargeListItem = ({ bookData }: LargeListItemProps) => {
  const { author, books } = bookData;
  return (
    <div>
      <p>Author: {author} </p>

      <ul>
        {books.map((book) => {
          return <li>{book.title}</li>;
        })}
      </ul>
    </div>
  );
};
