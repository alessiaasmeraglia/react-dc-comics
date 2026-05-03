function ComicCard({ comic }) {
    return (
        <article className="comic-card">
            <img src={comic.thumb} alt={comic.series} />
            
            <h3>{comic.series}</h3>
        </article>
    )
}

export default ComicCard