import { GenreResponseProps } from "../App";
import { Button } from "./Button";

interface SideBarProps {
  data: {
    genres: GenreResponseProps[];
    selectedGenreId: number;
  };
  handleClickButton(id: number): any;
}

export function SideBar({ data, handleClickButton }: SideBarProps) {
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {data.genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={data.selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}