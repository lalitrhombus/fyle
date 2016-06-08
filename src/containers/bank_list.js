import React, { Component } from 'react';
import { connect } from 'react-redux';

class BankList extends Component {
  renderBanks=(bankData)=>{
    if(this.props.search=='' || this.props.search==null || this.props.search==undefined){
      return (
        <tr key={bankData.ifsc}>
          <td>{bankData.bank_id}</td>
          <td>{bankData.ifsc}</td>
          <td>{bankData.bank_name}</td>
          <td>{bankData.branch}</td>
          <td>{bankData.city}</td>
          <td>{bankData.district}</td>
          <td>{bankData.state}</td>
          <td>{bankData.address}</td>
        </tr>
      );      
    }
    else{
      if(bankData.bank_name.toLowerCase().indexOf(this.props.search.toLowerCase())>0){
        return (
          <tr key={bankData.ifsc}>
            <td>{bankData.bank_id}</td>
            <td>{bankData.ifsc}</td>
            <td>{bankData.bank_name}</td>
            <td>{bankData.branch}</td>
            <td>{bankData.city}</td>
            <td>{bankData.district}</td>
            <td>{bankData.state}</td>
            <td>{bankData.address}</td>
          </tr>
        );   
      }else{
        return false;
      }
    }
  }

  render() {
    if(!this.props.banks.length){
      return <div><p>Please Select a City to start.....</p></div>
    }
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Id</th>
            <th>IFSC</th>
            <th>Name</th>
            <th>Branch</th>
            <th>City</th>
            <th>District</th>
            <th>State</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {this.props.banks.map(this.renderBanks)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ banks,search }) {
  return { banks,search };
}

export default connect(mapStateToProps)(BankList);
