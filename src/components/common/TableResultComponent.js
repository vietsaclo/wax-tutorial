import React, { Component } from 'react';

class TableResultComponent extends Component {
  getTableResult(data) {
    if (!data) return;
    return (
      <table className='table table-hover'>
        <tbody>
          <tr>
            <td>transaction_id</td>
            <td>{data.transaction_id}</td>
          </tr>

          <tr>
            <td>block_num</td>
            <td>{data.processed.block_num}</td>
          </tr>

          <tr>
            <td>block_time</td>
            <td>{data.processed.block_time}</td>
          </tr>

          <tr>
            <td className='fw-bold text-uppercase'>status</td>
            <td className='fw-bold text-uppercase'>{data.processed.receipt.status}</td>
          </tr>
        </tbody>
      </table>
    );
  }

  render() {
    return (
      <div>
        {this.getTableResult(this.props.data)}
      </div>
    );
  }
}

export default TableResultComponent;