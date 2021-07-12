import { Button, Input, message } from 'antd';
import React, { Component } from 'react';
import WaxServices from '../services/WaxServices';
import { DoubleRightOutlined } from "@ant-design/icons";
import { ReadMe003 } from '../components';
import TableResultComponent from '../components/common/TableResultComponent';

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
    const result = await WaxServices.fun_takeAction({
      action: 'hi',
      dataValue: {
        nm: value,
      }
    });
    if (!result) {
      message.error('Error!');
      return;
    }
    this.setState({
      data: result,
      tbName: '',
    });
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
        <h5 className='text-success fw-bold'>Demo contract HI</h5>
        <Input value={this.state.tbName} name='tbName' onChange={(e) => this.onChange(e)} placeholder='Input Value' style={{ width: '140px', marginRight: '10px' }} type='text' />
        <Button onClick={() => this.btnHiContractClicked()}>
          <DoubleRightOutlined /> contract [ Hi ]
        </Button>
        <div className='mt-3 mb-5'>
          <TableResultComponent data={this.state.data} />
        </div>
        <ReadMe003 />
      </div>
    );
  }
}

export default Branch003Page;