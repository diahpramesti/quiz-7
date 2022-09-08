import React from "react"

class App extends React.Component {
        
    constructor() {
        super()
        this.state ={
            date: new Date()
        }
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000)
    }
    
    render() {
        return (
            <div className="App" style={{ marginBottom: '10px', width: '500px', margin: '0 auto', textAlign: 'center'}}>
                <h1>Realtime CLOCK Pakai Class</h1>
                <hr />
                <h1>{this.state.date.toLocaleTimeString()}</h1>
                <br></br>
				<br></br>
            </div>
        )
    }
}

    


export default App