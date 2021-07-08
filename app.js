const desc = 'I just learned how to create a React node and render it to the DOM.';
const myTitleID = 'main-title';
const name = 'Max';

const header = (
    <header>
    {/* This is a JSX comment.  Must use this format */}
        <h1 id={myTitleID}>{name}'s First React Element</h1>
        <p>{desc}</p>
    </header>
);

ReactDOM.render(
    header,
    document.getElementById('root')
);