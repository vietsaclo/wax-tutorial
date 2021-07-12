import { Button, Input, message } from 'antd';
import React, { Component } from 'react';
import { PublicModules } from '../common';
import ReadMe004 from '../components/Branch004/ReadMe004';
import TableResultComponent from '../components/common/TableResultComponent';
import { WaxServices } from '../services';

const initialState = {
  tbUserName: '',
  tbQuantity: '',
  tbQuantityRead: '',
  tbMemo: '',
  isLoading: false,
  data: null,
}

class Branch004 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    }
  }

  onChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    if (name === 'tbQuantity') {
      const number = PublicModules.fun_parseNumberOrZero(value);
      let read = 0;
      if (number >= 1)
        read = number.toPrecision(9);
      else
        read = PublicModules.fun_getPercision({ number: number, percision: 9 });
      this.setState({
        [name]: value,
        tbQuantityRead: read,
      });
    }
    this.setState({
      [name]: value,
    });
  }

  async btnApplyClicked() {
    const userLoged = PublicModules.fun_getUserLoginLocalStorage();
    if (!userLoged) {
      message.error('Login Require!');
      return;
    }
    const userName = this.state.tbUserName.trim(),
      quantity = this.state.tbQuantity.trim(),
      memo = this.state.tbMemo.trim();
    if (userName === ''
      || quantity === ''
      || memo === '') {
      message.error('Input non valid!');
      return;
    }
    this.setState({ isLoading: true });
    const result = await WaxServices.fun_takeAction({
      account: 'eosio.token',
      action: 'transfer',
      dataValue: {
        from: userLoged.userName,
        to: userName,
        quantity: `${this.state.tbQuantityRead} WAX`,
        memo: memo,
      }
    });
    if (!result) {
      message.error('Transfer error!');
      this.setState({ isLoading: false });
      return;
    }
    this.setState({ isLoading: false, data: result });
  }

  render() {
    return (
      <div>
        <h5 className='text-success fw-bold'>Demo transfer crypto WAX</h5>
        <div className='row'>
          <div className='col-md-6 col-12'>
            <Input name='tbUserName' value={this.state.tbUserName} onChange={(e) => this.onChange(e)} className='m-2' placeholder='To UserName example: eibpm.warm' addonAfter='User Name' />
            <Input type='number' name='tbQuantity' value={this.state.tbQuantity} onChange={(e) => this.onChange(e)} className='m-2' placeholder='quantity example: 0.001' addonAfter='WAX' />
            <Input readOnly type='number' name='tbQuantity_read' value={this.state.tbQuantityRead} className='m-2' placeholder='quantity example: 0.001' addonAfter='WAX' />
            <Input name='tbMemo' value={this.state.tbMemo} onChange={(e) => this.onChange(e)} className='m-2' placeholder='memo example: a hi hi' addonAfter='Description' />
            <span className='m-2'>
              <Button loading={this.state.isLoading} onClick={() => this.btnApplyClicked()} type='primary'>Apply</Button>
              <Button onClick={() => this.setState({ ...initialState })} type='primary' danger className='m-2'>Clear</Button>
            </span>
          </div>
        </div>
        <TableResultComponent data={this.state.data} />
        <ReadMe004 />
      </div>
    );
  }
}

export default Branch004;