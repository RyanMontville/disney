import { Link } from "react-router-dom";
const NoPage = () => {
    return <div className="page">
        <section className="post-header">
            <div>
                <img src="/assets/badges/404.png" class="badge" alt="badge" />
            </div>
            <div className="post-title">
                <h2>Page Not Found</h2>
                <hr />
            </div>
        </section>
        <p>Good afternoon. My name is Russell and I am a Wilderness Explorer in Tribe 54, Sweatlodge 12.
            The page you were looking for could not found. Can I help you find something today?</p>
        <ul>
            <li>I could help you find My Adventure Blog's <Link to="/">front page</Link></li>
            <li>I could help you find <a href="https://ryanmontville.com">RyanMontville.com</a></li>
            <li>I could help you find <a href="https://www.google.com/">Google.com</a></li>
        </ul>
        <p>Well, I gotta help you find something. See these? These are my Wilderness Explorer badges.
            You may notice one is missing. It's my finders badge. If I get it, I will become a Senior
            Wilderness Explorer!</p>
            <img src="/assets/badges/patches.png" alt="" className="full"/>
    </div>;
};

export default NoPage;