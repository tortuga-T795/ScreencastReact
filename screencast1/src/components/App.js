import React, {Component, PureComponent} from 'react'
import articles from './fixtures'
import Articlelist from './Articlelist'
import 'bootstrap/dist/css/bootstrap.css'

class App extends PureComponent {
    state = {
        reverted: false
    }
    articles = articles.slice()

    render() {
        console.log('---', 1)
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">
                        Trying React

                            <button className="btn" onClick={this.revert}>Revert</button>

                    </h1>
                </div>
                <Articlelist articles={this.state.reverted ? articles.slice().reverse() : articles}/>
            </div>
        )
    }

    revert = () => {
        this.setState({
            reverted: !this.state.reverted
        })
    }
}


export default App
