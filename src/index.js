import React from 'react'
import ReactDOM from 'react-dom' 

var articles = [];
const country = "us";
const sources = "engadget";
const apiKey = "e21c4f6ce8354ea2905f5506002f3cba";
var url = 'https://newsapi.org/v2/top-headlines?'
    + 'country=' + country + '&'
    + 'apiKey=' + apiKey;


class Welcome extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <h5>This is {this.props.name}</h5>
            </div>
        )
    }
}
    
class Footer extends React.Component {
    render() {
        return (
            <footer>
                <p>Powered by <a href='https://newsapi.org'>News API</a></p>
            </footer>
        )
    }
}

class Article extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Article">
                <div className="image">
                    <img src={this.props.data.urlToImage} width="90px"/>
                </div>
                <h3 className="title">{this.props.data.title}</h3>
                <div className="description">{this.props.data.description}
                </div>
                <div className="source">{this.props.data.source.name}</div>
                <div className="date"></div>
            </div>
        )
    };
}

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           articles: []
        };
    }

    componentDidMount() {
        var req = new Request(url);
        fetch(req)
        .then(function(res) {
            res.json().then(function(data) {
                let articles = data.articles.map((article) => {
                    console.log(article);
                    return <Article data={article}/>
                });
                this.setState({articles: articles});
            }.bind(this));
        }.bind(this));
        
    }
    render() {
        return (
            <div className="Content">
                {this.state.articles}
            </div>
        );
    }
}

function App() {
    return (
        <div>
            <Welcome name="Vison"/>
            <Content/>
            <div id="console"></div>
            <Footer/>
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)





// JavaScript function
var req = new Request(url);




