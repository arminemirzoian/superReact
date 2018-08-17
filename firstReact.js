function Welcome(props) {
    return <h1>Hello, {props.name}! Today you should do the following activities.</h1>;
}

const element = <Welcome name="Tom" />;
ReactDOM.render(
    element,
    document.getElementById('tom')
);



function tick() {
    const element = (
        <p>It is {new Date().toLocaleTimeString()}.</p>
    );
    ReactDOM.render(element, document.getElementById('time'));
}

setInterval(tick, 1000);

