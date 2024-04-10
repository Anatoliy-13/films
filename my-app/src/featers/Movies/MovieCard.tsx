import { Link } from "react-router-dom";
import styles from "./MovieCard.module.scss";


interface MovieCardProps {
    id: number;
    title: string;
    overviwe: string;
    popularity: number;
}

export function MovieCard({ id, title, overviwe, popularity }: MovieCardProps) {
    return (
        <div className={styles.card}>
            <img className={styles.thumbnail} src="/movie-thumb.png" alt="Movie thumbmail" />
            <div className={styles.content}>
                <div>
                    <Link to={`/movies/${id}`}>{title}</Link>
                </div>
                <div className="movies-card-overviwe">{overviwe}</div>
                <div className="movies-card-popularity">{popularity}</div>
            </div>
        </div>
    )
}