const app = document.querySelector('.app');

function getHome() {
    const markup = `
    <section class="home">
    <article class="intro">
        <h1>Welcome to DesignBoost!</h1>
        <p>This web app generates a random quote from a designer to give you a DesignBoost.</p>
    </article>
    <button>Start</button>
    </section>
    `
    app.innerHTML = markup;
}

export default getHome;