function Form() {
    return (
        <>
            <input type="text" placeholder="Here is the placeholder" />
            <br />
            <input type="text" placeholder="This is placeh" />
            <br />
            <button>Click me</button>
        </>
    );
}

function App() {
    let name = "John Doe";
    return (
        <>
            <h1>Hello {name}</h1>
            <Child data={name} />
        </>
    );
}

function Child(props) {
    return (
        <h1>This is child component {props.data}</h1>
    );
}

export default App;