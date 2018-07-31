import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Forms from './components/Forms';
import Listings from './components/Listings';
import Footer from './components/Footer';



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      jobs: []
    }
  }

  componentDidMount() {
    fetch('./listings.json')
      .then(data => data.json())
      .then(dataJSON => {
        this.setState({ jobs: dataJSON })
      })
      .then(() => {
        console.log(...this.state.jobs)
      })

  }

  addListing = (event) => {
    event.preventDefault()
    const data = new FormData(event.target);
    let listing = {
      title: data.get("title"),
      pay: data.get("pay"),
      description: data.get("description"),
      interested: []
    }
    this.setState({ jobs: [...this.state.jobs, listing] })
    event.target.reset();
  }




  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <Listings jobs={this.state.jobs} />
          <Forms addListing={this.addListing} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
