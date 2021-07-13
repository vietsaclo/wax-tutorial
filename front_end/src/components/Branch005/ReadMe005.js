import { Collapse } from 'antd';
import React, { Component } from 'react';

const { Panel } = Collapse;

class ReadMe005 extends Component {
  render() {
    return (
      <Collapse className='mt-4 mb-4'>
        <Panel header='Branch 005 Document'>
          Comming soon!
        </Panel>
      </Collapse>
    );
  }
}

export default ReadMe005;