import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', predictedValue: ''};
  }

  handleChange = (event) => {
    // Question: How did you get target.value
    this.setState({value: event.target.value});
    this.setState({predictedValue: this.props.onChange(this.state.value)})
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
                    <div>
                      <input id="search"
                              value={this.state.value}
                              onChange={this.handleChange}
                              autoComplete="off" 
                              type="text"/>

                      <label htmlFor="search" style={{color: "lightgray", position: "absolute", right: "15px", lineHeight: "40px"}}>
                        {this.state.predictedValue}
                      </label>
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;