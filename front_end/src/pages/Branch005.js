import { Button, Input, message } from 'antd';
import React, { Component } from 'react';
import ReadMe005 from '../components/Branch005/ReadMe005';
import TableResultComponent from '../components/common/TableResultComponent';

const initialState = {

}

class Branch005 extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  btnApplyClicked() {
    message.info('Comming soon!');
  }

  render() {
    return (
      <div>
        <h5 className='text-success fw-bold'>Demo Insert Table Main Net</h5>
        <div className='row'>
          <div className='col-md-6 col-12'>
            <Input type='text' name='tbKey' value={this.state.tbUserName} onChange={(e) => this.onChange(e)} className='m-2' placeholder='Key example: key.1' addonAfter='Key' />
            <Input type='text' name='tbValue' value={this.state.tbQuantity} onChange={(e) => this.onChange(e)} className='m-2' placeholder='value example: value.1' addonAfter='Value' />
            <span className='m-2'>
              <Button loading={this.state.isLoading} onClick={() => this.btnApplyClicked()} type='primary'>Apply</Button>
              <Button onClick={() => this.setState({ ...initialState })} type='primary' danger className='m-2'>Clear</Button>
            </span>
          </div>
        </div>
        <TableResultComponent data={null} />
        <ReadMe005 />
      </div>
    );
  }
}

export default Branch005;