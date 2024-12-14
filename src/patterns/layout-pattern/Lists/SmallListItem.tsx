type SmallListBookItemProps = {
  bookData: BookData;
};
type SmallListMovieItemProps = {
  movieData: MovieData;
};

type BookData = {
  author: string;
  book: string;
};

type MovieData = {
  director: string;
  movie: string;
};

export const SmallListBookItem = ({ bookData }: SmallListBookItemProps) => {
  const { author, book } = bookData;
  return (
    <div>
      Author: {author} Book: {book}
    </div>
  );
};

export const SmallListMovieItem = ({ movieData }: SmallListMovieItemProps) => {
  const { director, movie } = movieData;
  return (
    <div>
      Author: {director} Movie: {movie}
    </div>
  );
};
