const title = React.createElement(
    'h1',
    {id: 'main-title', title: 'This is a title'},
    'My First React Element!'
);

const desc = React.createElement(
    'p',
    {},
    'I just learned how to create a React node and render it into the DOM.'
);

const header = React.createElement(
    'header',
    {},
    title,
    desc
);

ReactDOM.render(
    header,
    document.getElementById('root')
);