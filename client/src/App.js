import React, { Component } from 'react';
import './App.css';
import {Inventory, CodeModal} from './components/components';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();

    this.state = {
      inventory: [
        {department: 'Sporting Goods',
        products:[
          {item: 'Football',
          price: 49.99,
          inStock: true
          },
          {item: 'Baseball',
          price: 9.99,
          inStock: true
          },
          {item: 'Basketball',
          price: 29.99,
          inStock: false
          },
          {item: 'Boxing Gloves',
          price: 75.69,
          inStock: false
          },
        ]
        },
        {department: 'Electronics',
        products:[
          {item: 'iPod Touch',
          price: 99.99,
          inStock: true
          },
          {item: 'iPhone X',
          price: 999.99,
          inStock: false
          },
          {item: 'Google Pixel 2',
          price: 199.99,
          inStock: true
          },          
          {item: '4k LG TV',
          price: 1999.49,
          inStock: true
          },
        ]
        }
      ],
      searchInput: '',
      componentName: '',
      componentCode: [],
    }
  }

  renderComponent = (fileName)=>{
    axios.get(`/component/${fileName}`)
    .then((result)=>{
      console.log(result)
      this.setState({
        componentName: fileName,
        componentCode: result.data.split('\n')
      })

    })
    .catch((err)=>{
      console.log(err)
    })
  }

  handleOnChange = (e)=>{
    this.setState({
      searchInput: e.target.value
    })
  }

  render() {
    const {inventory, componentName, componentCode, searchInput} = this.state;
    return (
      <div className="App">
        <div className="container">
          <div className='inventory--container'>
            <ul className="collapsible popout" data-collapsible="accordion">
              <Inventory inventory={inventory} renderComponent={this.renderComponent} onChange={this.handleOnChange} searchInput={searchInput}/>
            </ul>
          </div>
        </div>
        <CodeModal componentName={componentName} code={componentCode}/>
      </div>
    );
  }
}

export default App;
