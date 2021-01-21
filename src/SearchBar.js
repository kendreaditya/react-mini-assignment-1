import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
  }

  handleChange = (event) => {
    // Question: How did you get target.value
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    // Question: How did you find this?
    event.preventDefault()
    this.props.onSubmit(this.state.value)
  }

    render () {
        return(
            <div className="ui segment">
                {/*Review all html/JSX tags*/}
                <form onSubmit={this.handleSubmit} className="ui form">
                    {/*CSS classname where?*/}
                    {/*why reload*/}
                    <label>Enter your NBA Team</label>
                    <input value={this.state.value} onChange={this.handleChange} type="text"/>
                </form>
            </div>
        );
    }
}

export default SearchBar;