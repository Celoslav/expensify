class Indecision extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Action />
                <Options />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Indecision</h1>
                <h2>Put your life in the hands of a computer</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    render() {
        return (
            <div>
                <button>What should I do?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    render() {
        return(
            <div>
                <p>Options component here</p>
                <Option />
            </div>
        );
    }
}
class AddOption extends React.Component {
    render() {
        return (
            <div>
                <p>AddOption component here, please</p>
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return(
            <p>Option component here</p>
        );
    }
}

ReactDOM.render(<Indecision />, document.getElementById('app'));