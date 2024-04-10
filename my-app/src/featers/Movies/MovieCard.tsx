import { Link } from "react-router-dom";


interface MovieCardProps {
    id: number;
    title: string;
    overviwe: string;
    popularity: number;
}

export function MovieCard({ id, title, overviwe, popularity }: MovieCardProps) {
    return (
        <div className="movies-card">
            <Link to={`/movies/${id}`}>{title}</Link>
            <div className="movies-card-overviwe">{overviwe}</div>
            <div className="movies-card-popularity">{popularity}</div>
        </div>
    )
}