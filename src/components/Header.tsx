interface Header {
  genre: {
    title: string;
  };
}
export function Header(props: Header) {
  return (
    <header>
      <span className="category">
        Categoria:<span> {props.genre.title}</span>
      </span>
    </header>
  );
}