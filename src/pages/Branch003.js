import { Button, Input, message } from 'antd';
import React, { Component } from 'react';
import WaxServices from '../services/WaxServices';
import { DoubleRightOutlined } from "@ant-design/icons";
import { ReadMe003 } from '../components';

class Branch003Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    }
  }

  async btnHiContractClicked() {
    const value = this.state.tbName;
    if (!value || value.trim() === '') {
      message.error('Please Input Value');
      return;
    }
    const result = await WaxServices.fun_takeAction('hi', {
      nm: value,
    });
    this.setState({
      data: result,
      tbName: '',
    });
  }

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

  onChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <Input value={this.state.tbName} name='tbName' onChange={(e) => this.onChange(e)} placeholder='Input Value' style={{ width: '140px', marginRight: '10px' }} type='text' />
        <Button onClick={() => this.btnHiContractClicked()}>
          <DoubleRightOutlined /> contract [ Hi ]
        </Button>
        <div className='mt-3 mb-5'>
          {this.getTableResult(this.state.data)}
        </div>
        <ReadMe003 />
      </div>
    );
  }
}

export default Branch003Page;