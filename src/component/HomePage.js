import React, { Component } from 'react'
import axios from 'axios'


class HomePage extends Component {
constructor(props) {
  super(props)
  this.state = {
    result :[]     
  }
}

componentDidMount() {
  this._getData()
}


_getData = () => {
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res => {
    if(res.status === 200){
    this.setState({
      result : res.data
    })}
  })
  .catch(err => console.log("Error in Result 1",err))
}

render() {
  const { result } = this.state
    return (
      <div>
        <h1>HomePage</h1>
        
          <ul>
            {
              result.map((name) => 
              <div key={name.id}>
                <p>{name.name}</p>
              </div>
              )
            }
          </ul>
        
      </div>
    )
  }
}

export default HomePage
