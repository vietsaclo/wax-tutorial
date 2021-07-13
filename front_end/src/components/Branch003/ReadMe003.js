import { Collapse } from 'antd';
import React, { Component } from 'react';

const { Panel } = Collapse;

class ReadMe003 extends Component {
  render() {
    return (
      <Collapse>
        <Panel header="Branch 003 Document" key="1">
          <p className='h4'>
            Giới thiệu tổng quan.
          </p>
          <p className='text-break'>
            Mục tiêu ở phần 003 này mình sẽ thực hiện cấu hình khung sường cho project.
            và gọi thực thi một action contract trên mạng wax main net. Dưới đây là Dapp account
            và api endpoint để thực hiện gọi contract, 2 cái này rất quan trọng.
          </p>
          <p>
            <img className='img-fluid' src='/image/003/dappNameEnv.png' alt='dappNameEnv.png' />
          </p>
          <p>
            Dapp name là tài khoản chứa contract, ở đây nó là [ eipbm.wam ]. Và mạng main net là url
            [ <a href='https://wax.greymass.com' target='_blank'>https://wax.greymass.com</a> ]
          </p>
          <p className='h3'>
            Tài nguyên contract
          </p>
          <p className='fw-bold'>
            Mình sẽ gọi vào contract nào vậy ?
          </p>
          <p>
            OK. hãy truy cập vào đường dẫn [ <a href='https://wax.bloks.io/' target='_blank'>https://wax.bloks.io/</a> ]
            ở mục more &gt; table + action serach với tên là: [ eipbm.wam ] sẽ có kết quả như này.
          </p>
          <p>
            <img className='img-fluid' src='/image/003/searchContract.png' alt='searchContract.png' />
          </p>
          <p>
            Như đã thấy thì tại mục Action mình có contract là [ hi ]. Bắt đầu quay trở lại bên code. mình sẽ cần chuẩn bị một số thứ.
          </p>
          <p className='h3'>
            Phụ thuộc khi thực hiện trên node.
          </p>
          <p className='fw-bold'>1. waxjs</p>
          <ul>
            <li>Cài đặt: yarn add @waxio/waxjs</li>
            <li>import: import * as waxjs from "@waxio/waxjs/dist";</li>
          </ul>
          <p className='h3'>CODE</p>
          <p className='fw-bold'>1. Khởi tạo môi trường</p>
          <ul>
            <li>instance default: const wax = new waxjs.WaxJS('https://wax.greymass.com', null, null, false);</li>
            <li>instance với public key: const wax = new waxjs.WaxJS('https://wax.greymass.com', 'user1', ['EOS7rC8jFvFrPYDqp3Nh3HdRfL79h11B1JhPEXy85enF5wwYzF3Hk']);</li>
            <li>LOGIN: const userAccount = await wax.login();</li>
          </ul>
          <p className='fw-bold'>2. Thực hiện gọi contract.</p>
          <p>Hãy nhìn vào đoạn code dưới đây sau đó hãy đọc mô tả cho mỗi dòng code ở phía dưới.</p>
          <p>
            <img className='img-fluid' src='/image/003/sendTransact.png' alt='sendTransact.png' />
          </p>
          <p className='fw-bold text-danger'>Lưu ý: phải login trước khi thực hiện đoạn code này.</p>
          <p className='fw-bold'>3. Mô tả code.</p>
          <ul>
            <li>1. Dòng 46: account: chính là tài khoản mà đã chứa contract này khi đó process.env... bản chất nó chính là: [ eipbm.wam ] chủ sở hữu Dapp</li>
            <li>2. Dòng 46: name: chính là tên của contract, quay ngược lên phía trên, bản chất thực sự mình truyền vào đó chính là [ hi ]</li>
            <li>3. Dòng 49: actor: chính là tên tài khoản người dùng đã login vào hệ thống. khi login sẽ truyền userName vào đây</li>
            <li>4. Dòng 50: permission: đây chính là lý thuyết về block chain. mình có 2 loại permission là owner và active. (owner quyền cao hơn active thường dùng để transact trên internet)...</li>
            <li>5. Dòng 52: data: nó là một khối dạng json. bản chất là body khi mình gọi API thôi nn: 'abc'</li>
          </ul>
          <p className='h3'>Gọi contract thành công ?</p>
          <p className='fw-bold'>1. Kiểm tra trên ứng dụng.</p>
          <p>Khi thựu hiện gọi thành công thì api sẽ trả về một khối json, các ý chính được lấy ra như sau. hãy xem hình. còn nếu không thành công kết qua sẽ trả về null</p>
          <p>
            <img className='img-fluid' src='/image/003/success.png' alt='success.png' />
          </p>
          <p className='fw-bold'>2. Kiểm tra trên bloks.io</p>
          <p>
            <img className='img-fluid' src='/image/003/success-bloks.io.png' alt='success-bloks.io.png' />
          </p>
        </Panel>
      </Collapse>
    );
  }
}

export default ReadMe003;