function Wuzzle(props) {
    return <h1>Hello, {props.name}</h1>;
}

const element = <Wuzzle name="Sara" />;
ReactDom.render(
    element,
    document.getElementById('root')
);