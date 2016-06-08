import React, { Component } from 'react';
import { connect } from 'react-redux';

class BankList extends Component {
  renderBanks(bankData) {
    return (
      <tr key={name}>
        <td>bankData.bank_id</td>
        <td>bankData.ifsc</td>
        <td>bankData.bank_name</td>
        <td>bankData.branch</td>
        <td>bankData.city</td>
        <td>bankData.district</td>
        <td>bankData.state</td>
        <td>bankData.address</td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>id</th>
            <th>ifsc</th>
            <th>name</th>
            <th>branch</th>
            <th>city</th>
            <th>district</th>
            <th>state</th>
            <th>address</th>
          </tr>
        </thead>
        <tbody>
          {this.props.banks.map(this.renderBanks)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ cities }) {
  return { cities };
}

export default connect(mapStateToProps)(BankList);
