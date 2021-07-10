import React, { Component } from 'react';

class DocsPage extends Component {
  render() {
    return (
      <div>
        <div className="stackedit__html">
          <h1 id="thành-viên">Thành viên</h1>
          <ol>
            <li>Nguyễn Quốc Việt - <a href="mailto:vietsaclo@gmail.com">vietsaclo@gmail.com</a></li>
            <li>Bùi Vũ Trường -</li>
          </ol>
          <ul>
            <li>Wax Docs: <a href="https://developer.wax.io/api-docs-tools/">https://developer.wax.io/api-docs-tools/</a></li>
            <li>EOSIO Docs: <a href="https://developers.eos.io/welcome/latest/index">https://developers.eos.io/welcome/latest/index</a></li>
            <li>Create test net account: <a href="https://waxsweden.org/create-testnet-account/">https://waxsweden.org/create-testnet-account/</a></li>
            <li>Demo game block chain: <a href="https://battles.eos.io/">https://battles.eos.io/</a></li>
          </ul>
          <h2 id="mục-lục">Mục lục</h2>
          <ul>
            <li>Giới thiệu Project <strong>wax_project</strong></li>
            <li><strong>Cài đặt trên môi trường Docker</strong></li>
            <li>Setup môi trường project</li>
            <li>Build project ( xuất ra file wasm và abi )</li>
            <li>Deploy lên môi trường <strong>wax test net</strong></li>
            <li>Kiểm tra smart contract</li>
            <li>font-end <strong>wax-js</strong></li>
            <li><strong>Cài đặt trên môi trường máy tính</strong></li>
            <li>Setup môi trường project</li>
            <li>Build project ( xuất ra file wasm và abi )</li>
            <li>Deploy lên môi trường <strong>wax test net</strong></li>
            <li>Kiểm tra smart contract</li>
            <li>font-end <strong>wax-js</strong></li>
          </ul>
          <h2 id="giới-thiệu-về-project">Giới thiệu về project</h2>
          <p>Đây là phần giới thiệu về project <strong>wax_project</strong></p>
          <h1 id="docker-environment">DOCKER ENVIRONMENT</h1>
          <h2 id="setup-môi-trường-cho-project">Setup môi trường cho project</h2>
          <ol>
            <li>Tạo một thư mục tên <strong>wax</strong> trên máy tính của bạn. Ở đây tôi dùng <em>Ubuntu 20.04</em></li>
          </ol>
          <ul>
            <li><code>mkdir wax</code><br />
      và đây là full path của tôi</li>
            <li><em>/media/vietsaclo/UbuntuData3/Projects/[03_BLC]</em></li>
          </ul>
          <ol start={2}>
            <li>Trỏ tới đường đẫn của thư mục <strong>wax</strong></li>
          </ol>
          <ul>
            <li><code>cd /media/vietsaclo/UbuntuData3/Projects/[03_BLC]/wax</code></li>
          </ul>
          <ol start={3}>
            <li>bắt đầu thực hiện chạy dưới quyền root. Gõ</li>
          </ol>
          <ul>
            <li><code>su</code></li>
          </ul>
          <ol start={4}>
            <li>Xóa container waxdev trên máy nếu nó đã tồn tại. <strong>Luy ý</strong> nếu đây là lần đầu tiên chạy, bạn hãy bỏ qua bước này.</li>
          </ol>
          <ul>
            <li><code>docker rm -f -v waxdev</code></li>
          </ul>
          <ol start={5}>
            <li>Bắt đầu kéo Image của waxdev từ docker hub về máy, và tiến hành cài đặt.</li>
          </ol>
          <ul>
            <li><code>docker run -it --name waxdev -v /media/vietsaclo/UbuntuData3/Projects/[03_BLC]/wax:/wax waxteam/dev bash</code><br />
      Nếu thành công cửa sổ terminal sẽ hiển thị như này:</li>
            <li><em>root@dc7ff447203d:</em></li>
          </ul>
          <ol start={6}>
            <li>Kích hoạt Nodeos
      <ul>
                <li>Gõ: <code>keosd &amp;</code></li>
                <li>Tiếp tục dán đoạn mã:
          <ul>
                    <li><code>nodeos -e -p eosio \</code></li>
                    <li><code>--plugin eosio::producer_plugin \</code></li>
                    <li><code>--plugin eosio::chain_api_plugin \</code></li>
                    <li><code>--plugin eosio::http_plugin \</code></li>
                    <li><code>--access-control-allow-origin='*' \</code></li>
                    <li><code>--contracts-console \</code></li>
                    <li><code>--http-validate-host=false \</code></li>
                    <li><code>--verbose-http-errors &gt;&gt; nodeos.log 2&gt;&amp;1 &amp;</code></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>Kiểm tra Nodeos đã kích hoạt thành công hay chưa bằng lệnh.</li>
          </ol>
          <ul>
            <li><code>tail -f nodeos.log</code>. Nếu terminal cập nhật liên tục thì thành công.</li>
          </ul>
          <ol start={8}>
            <li>Tạo mới một ví bằng lệnh:</li>
          </ol>
          <ul>
            <li><code>cleos wallet create --to-console -n wallet1</code>.</li>
            <li><strong>Lưu ý</strong> nhớ giữ lại mật khẩu ví. Ví dụ mật khẩu ví của tôi là: <em>PW5JgrZ4o8NeVTV7d3UJrQXC6XC3CrST82wkdxN9qKTf3bikTZcus</em></li>
          </ul>
          <ol start={9}>
            <li>Mở ví vừa tạo lên:</li>
          </ol>
          <ul>
            <li><code>cleos wallet open -n wallet1</code></li>
          </ul>
          <ol start={10}>
            <li>Mở khóa ví đó lên bằng lệnh:</li>
          </ol>
          <ul>
            <li><code>cleos wallet unlock --password PW5JgrZ4o8NeVTV7d3UJrQXC6XC3CrST82wkdxN9qKTf3bikTZcus -n wallet1</code>. - <strong>Lưu ý</strong> bỏ mật khẩu trùng với mật khẩu đã tạo ví trước đó.</li>
          </ul>
          <ol start={11}>
            <li>Để kiểm tra lại danh sách các ví đã tạo thực hiện:</li>
          </ol>
          <ul>
            <li><code>cleos wallet list</code></li>
          </ul>
          <ol start={12}>
            <li><em>Để thực hiện đẩy smart contract lên mạng wax test net, phục vụ cho môi trường dev. wax test net là mạng cung cấp cho chúng ta môi trường dev, mua wax coin miển phí, mua ram và cpu</em><br />
              <strong>Để tạo tài khoản wax test vào link: <a href="https://faucet.waxsweden.org/create_account?waxisawesome">https://faucet.waxsweden.org/create_account?waxisawesome</a></strong><br />
              <strong>Và để cho nhanh =&gt;</strong>. Bạn có thể dùng tài khoản này:<br />
              <code>testnet account: {'{'}"msg": "succeeded", "keys": {'{'}"active_key": {'{'}"public": "EOS8caT6mUAFaUeHzjUZtSeW3YcffEuLykexZD7B1jLnyGVTbChNC", "private": "5J61BkwayGyTPLzCdcH6ujerMRTBrvE3tQoK7EFbMB8vDVxJPnR"{'}'}, "owner_key": {'{'}"public": "EOS6RWMSuH2sotnEf2X5raTU1epUprwk6mPFpkQDuR6iFR4C5ZJRc", "private": "5KHjVJjkrhwiFDNZEmrR4gz6sUvtTpN4BDyQXrE2H6ZM6rtjiDm"{'}'}{'}'}, "account": "waxisawe4252"{'}'}</code></li>
            <li>Import private key cho ví:
      <ul>
                <li>key 1: <code>cleos wallet import --private-key 5J61BkwayGyTPLzCdcH6ujerMRTBrvE3tQoK7EFbMB8vDVxJPnR -n wallet1</code></li>
                <li>key 2: <code>cleos wallet import --private-key 5KHjVJjkrhwiFDNZEmrR4gz6sUvtTpN4BDyQXrE2H6ZM6rtjiDm -n wallet1</code></li>
              </ul>
            </li>
          </ol>
          <h2 id="build-project">Build project</h2>
          <p>Đảm bảo bạn đang đứng tại bash của docker: <em>root@dc7ff447203d:</em></p>
          <ul>
            <li><code>cd wax</code></li>
            <li><code>mkdir mycontracts</code> nếu chưa tồn tại thư mục này.</li>
            <li><code>cd mycontracts</code></li>
            <li><code>git clone -b develop https://github.com/vietnq-dgh/wax_project.git</code> || <code>git pull</code></li>
            <li><code>cd wax_project/build &amp;&amp; rm -rf * &amp;&amp; cmake .. &amp;&amp; make</code></li>
            <li>Nếu thành công build 100%. 2 File wasm và abi sẽ được tạo tại đường dẫn này:<br />
              <code>cd wax/ &amp;&amp; ls</code><br />
      Output như sau: <em>CMakeCache.txt  CMakeFiles  Makefile  cmake_install.cmake  <strong>wax.abi  wax.wasm</strong></em></li>
          </ul>
          <h2 id="deploy-lên-mạng-wax-test-net">Deploy lên mạng wax test net</h2>
          <ol>
            <li>Nếu chưa đủ ram thực hiện mua thêm ram bằng lệnh:</li>
          </ol>
          <ul>
            <li><code>cleos -u https://testnet.waxsweden.org system buyram waxisawe4252 waxisawe4252 "3.00000000 WAX"</code></li>
          </ul>
          <ol start={2}>
            <li>Nếu chưa đủ cpu thực hiện mua thêm cpu bằng lệnh:</li>
          </ol>
          <ul>
            <li><code>cleos -u https://testnet.waxsweden.org system delegatebw waxisawe4252 waxisawe4252 "4.00000000 WAX" "5.00000000 WAX"</code></li>
          </ul>
          <p><strong>Lưu ý tiền wax được chi trả bằng tài khoản waxisawe4252. đây là một tài khoản test. Đồng tiền wax ở đây là giả lập để thanh toán. trước khi đưa lên môi trường thực tế <em>Main Net</em></strong></p>
          <ol start={3}>
            <li>Tiến hành vào thư mục chứa file .wasm và abi:</li>
          </ol>
          <ul>
            <li><code>cd /wax/mycontracts/wax_project/build/wax</code></li>
          </ul>
          <ol start={4}>
            <li>Permisstion Active:</li>
          </ol>
          <ul>
            <li><code>cleos -u https://testnet.waxsweden.org set account permission waxisawe4252 active --add-code</code></li>
          </ul>
          <ol start={5}>
            <li><strong>Cuối cùng</strong> Đẩy code lên mạng test net:</li>
          </ol>
          <ul>
            <li><code>cleos -u https://testnet.waxsweden.org set contract waxisawe4252 $(pwd) wax.wasm wax.abi</code></li>
          </ul>
          <h2 id="kiểm-tra-smart-contract">Kiểm tra smart contract</h2>
          <ol>
            <li>Truy cập vào đường dẫn:</li>
          </ol>
          <ul>
            <li><code>https://wax-test.bloks.io/</code>. Đăng nhập bằng <strong>cleos/eosc</strong>. Bằng tài khoản <strong>waxisawe4252</strong> -&gt; Active.</li>
          </ul>
          <h1 id="pc-environment">PC ENVIRONMENT</h1>
          <ol>
            <li>
              <p>Trỏ tới thư mục gốc, thư mục chứa contract.<br />
                <code>cd /media/vietsaclo/UbuntuData3/Projects/[03_BLC]/wax/mycontracts</code></p>
            </li>
            <li>
              <p>root permission<br />
                <code>su</code></p>
            </li>
            <li>
              <p>Kích hoạt Nodeos</p>
              <ul>
                <li>Gõ: <code>keosd &amp;</code></li>
                <li>Tiếp tục dán đoạn mã:
          <ul>
                    <li><code>nodeos --hard-replay-blockchain -e -p eosio \</code></li>
                    <li><code>--plugin eosio::producer_plugin \</code></li>
                    <li><code>--plugin eosio::chain_api_plugin \</code></li>
                    <li><code>--plugin eosio::http_plugin \</code></li>
                    <li><code>--access-control-allow-origin='*' \</code></li>
                    <li><code>--contracts-console \</code></li>
                    <li><code>--http-validate-host=false \</code></li>
                    <li><code>--verbose-http-errors &gt;&gt; nodeos.log 2&gt;&amp;1 &amp;</code></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <p>Kiểm tra Nodeos đã kích hoạt thành công hay chưa bằng lệnh.<br />
                <code>tail -f nodeos.log</code>. <br />
        Nếu terminal cập nhật liên tục thì thành công. Nhấn <code>ctrl + c</code> để dừng.</p>
            </li>
            <li>
              <p className='text-break'>Vào trình duyệt bất kỳ nhập vào địa chỉ<br />
                <code>http://localhost:8888/v1/chain/get_info</code><br />
        sẽ hiển thị ra kết quả giống vầy:<br />
                <em>{'{'}“server_version”:“58f90b96”,“chain_id”:“8a34ec7df1b8cd06ff4a8abbaa7cc50300823350cadc59ab296cb00d104d2b8f”,“head_block_num”:70430,“last_irreversible_block_num”:70429,“last_irreversible_block_id”:“0001131d1aef4047f979c8c6cee29ae81fbd0f08c4cd46671f000305ea4ffdd7”,“head_block_id”:“0001131e5d94011ced45bdf95004de06602f4528f5228fbcf0a43003528e8a8c”,“head_block_time”:“2021-05-07T08:04:23.500”,“head_block_producer”:“eosio”,“virtual_block_cpu_limit”:200000000,“virtual_block_net_limit”:1048576000,“block_cpu_limit”:199900,“block_net_limit”:1048576,“server_version_string”:“v2.0.9”,“fork_db_head_block_num”:70430,“fork_db_head_block_id”:“0001131e5d94011ced45bdf95004de06602f4528f5228fbcf0a43003528e8a8c”,“server_full_version_string”:“v2.0.9-58f90b9666dc37cf35eac5dafb6db1c4138024e7”{'}'}</em></p>
            </li>
          </ol>
          <hr />
          <h1 id="test-localhost">Test Localhost</h1>
          <ol start={6}>
            <li>
              <p>Mở ví <strong>wallet0</strong>.<br />
                <code>cleos wallet open -n wallet0</code><br />
                <strong>Lưu ý:</strong> ví này đã tạo từ trước và import sẵn key.</p>
            </li>
            <li>
              <p>Mở khóa ví lên nếu chưa mở khóa ví <strong>wallet0</strong><br />
                <code>cleos wallet unlock -n wallet0 --password PW5JBYpKB1zFZMjR9UcuX6qGHiUMeQtzH2vPUoAGGzhBFDuZQDKJi</code><br />
                <strong>Lưu ý:</strong> mật khẩu phải chính xác.</p>
            </li>
            <li>
              <p>Xem danh sách các ví<br />
                <code>cleos wallet list</code><br />
        Ví nào có dấu <code>*</code> là đã mở và unlock.</p>
            </li>
            <li>
              <p>Xem danh sách các project trong thư mục contract.<br />
                <code>ls</code></p>
            </li>
            <li>
              <p>Truy cập vào contract <strong>addressbook</strong><br />
                <code>cd addressbook</code></p>
            </li>
            <li>
              <p>Mở project lên bằng <strong>Visual Studio Code</strong><br />
                <code>code . --user-data-dir</code></p>
            </li>
            <li>
              <p>Build project <strong>Genarate</strong> file <strong>WASM</strong> và file <strong>ABI</strong>.<br />
                <code>eosio-cpp addressbook.cpp -o addressbook.wasm --abigen</code></p>
            </li>
            <li>
              <p>Để deploy smart contract lên, cần phải xác định deploy lên tài khoản nào. Tạo mới tài khoản nếu chưa có. Để kiểm tra thông tin tài khoản gõ:<br />
                <code>cleos get account addressbook</code>\</p>
            </li>
            <li>
              <p>Deploy smart contract lên local.<br />
                <code>cleos set contract addressbook $(pwd) addressbook.wasm addressbook.abi</code></p>
            </li>
            <li>
              <p>Test smart contract.\</p>
            </li>
          </ol>
          <ul>
            <li>
              <p><code>cleos push action addressbook upsert '["alice", "alice", "liddell", 9, "123 drink me way", "wonderland", "amsterdam"]' -p alice@active</code></p>
            </li>
            <li>
              <p><code>cleos push action addressbook erase '["alice"]' -p alice@active</code></p>
            </li>
          </ul>
          <ol start={16}>
            <li>Kiểm tra dữ liệu đã vào được chưa.<br />
              <code>cleos get table addressbook addressbook people --upper 50 --key-type i64 --index 2</code></li>
          </ol>
          <h1 id="test-wax-test-net">Test Wax Test Net</h1>
          <ol start={17}>
            <li>
              <p>Mở ví <strong>wallet1</strong>.<br />
                <code>cleos wallet open -n wallet1</code><br />
                <strong>Lưu ý:</strong> ví này đã tạo từ trước và import sẵn key.</p>
            </li>
            <li>
              <p>Mở khóa ví lên nếu chưa mở khóa ví <strong>wallet1</strong><br />
                <code>cleos wallet unlock -n wallet1 --password PW5JAZTZFy12VjUw5dsHzmnFqShsSoGmQsLBiKFxmHQhbdVwkmnbr</code><br />
                <strong>Lưu ý:</strong> mật khẩu phải chính xác.</p>
            </li>
            <li>
              <p>Xem danh sách các ví<br />
                <code>cleos wallet list</code><br />
        Ví nào có dấu <code>*</code> là đã mở và unlock.</p>
            </li>
            <li>
              <p>Build project <strong>Genarate</strong> file <strong>WASM</strong> và file <strong>ABI</strong>.<br />
                <code>eosio-cpp addressbook.cpp -o addressbook.wasm --abigen</code></p>
            </li>
            <li>
              <p>Permission add code.<br />
                <code>cleos -u https://testnet.waxsweden.org set account permission waxisawe4252 active --add-code</code></p>
            </li>
            <li>
              <p>Đẩy smart contract lên tài khoản <strong>waxisawe4252</strong>.<br />
                <code>cleos -u https://testnet.waxsweden.org set contract waxisawe4252 $(pwd) addressbook.wasm addressbook.abi</code></p>
            </li>
            <li>
              <p>Test smart contract.\</p>
            </li>
          </ol>
          <ul>
            <li>
              <p><code>cleos -u https://testnet.waxsweden.org push action waxisawe4252 upsert '["waxisawe4252", "Nguyen Quoc", "Viet", 21, "03 vo duc quoc", "Quang Ngai", "Viet Nam"]' -p waxisawe4252@active</code></p>
            </li>
            <li>
              <p><code>cleos push action addressbook erase '["alice"]' -p alice@active</code></p>
            </li>
          </ul>
          <ol start={24}>
            <li>Kiểm tra dữ liệu đã vào được chưa.<br />
              <code>cleos -u https://testnet.waxsweden.org get table waxisawe4252 waxisawe4252 people -l 100</code></li>
          </ol>
        </div>
      </div>
    );
  }
}

export default DocsPage;