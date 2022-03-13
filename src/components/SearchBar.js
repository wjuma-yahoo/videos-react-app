import React from 'react'

export class SearchBar extends React.Component {

  state = { query: '' }

  handleOnInputChange = e => {
    this.setState({ query: e.target.value });
  }

  handleOnFormSubmit = e => {
    e.preventDefault();
    this.props.onCatchFormSubmited(this.state.query);
  }

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.handleOnFormSubmit} className='ui form'>
          <div className='fiel'>
            <label className=''>Video Search</label>
            <input 
              onChange={this.handleOnInputChange}
              value={this.state.query}
              type="text"/>
          </div>
        </form>
      </div>
    )
  }

}
