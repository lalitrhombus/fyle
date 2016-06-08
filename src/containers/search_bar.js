import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchBanks,searchBanks } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onCityChange = this.onCityChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
    this.props.searchBanks(event.target.value);
  }

  onCityChange(event) {
    event.preventDefault();
    // We need to go and fetch bank data
    this.props.fetchBanks(event.target.textContent);
  }

  onFormSubmit(event) {
    event.preventDefault();
  }

  renderOptions = (city)=>{
    return <a onClick={this.onCityChange} className="dropdown-item" href="#" key={city.id}>{city.name}</a>
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <div className="input-group">
              <div className="input-group-btn">
                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Select A City
                </button>
                <div className="dropdown-menu">
                  {this.props.cities.map(this.renderOptions)}
                </div>
              </div>
              <input
                placeholder="Filter through the name of branch....."
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange} />
        </div>
      </form>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchBanks,searchBanks }, dispatch);
}

function mapStateToProps({cities}){
  return {cities};
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);