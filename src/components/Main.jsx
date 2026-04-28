import comics from '../data/comics'
import ComicCard from './ComicCard'

function Main() {
    return (
        <main>
            <section className="jumbotron"></section>

            <section className="comics-section">
                <div className="container">
                    <h2 className="section-label">CURRENT SERIES</h2>

                    <div className="comics-grid">
                        {comics.map((comic) => (
                            <ComicCard key={comic.id} comic={comic} />
                        ))}
                    </div>

                    <button className="load-more">LOAD MORE</button>
                </div>
            </section>
        </main>
    )
}

export default Main