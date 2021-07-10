# Chào mừng đến với "wax_project" !

Đây là file hướng dẫn setup một project **wax_project**. Nó báo gồm tất cả những công cụ, môi trường và những thây đổi cần thiết để khởi chạy project này.
- Wax Docs: https://developer.wax.io/api-docs-tools/
 - EOSIO Docs: https://developers.eos.io/welcome/latest/index
 - Create test net account: https://waxsweden.org/create-testnet-account/
 - Demo game block chain: https://battles.eos.io/

-------------


## Mục lục

 - Giới thiệu Project **wax_project**
 - **Cài đặt trên môi trường Docker**
 - Setup môi trường project
 - Build project ( xuất ra file wasm và abi )
 - Deploy lên môi trường **wax test net**
 - Kiểm tra smart contract
 - font-end **wax-js**
 - **Cài đặt trên môi trường máy tính**
 - Setup môi trường project
 - Build project ( xuất ra file wasm và abi )
 - Deploy lên môi trường **wax test net**
 - Kiểm tra smart contract
 - font-end **wax-js**

## Giới thiệu về project
Đây là phần giới thiệu về project **wax_project**

# DOCKER ENVIRONMENT

## Setup môi trường cho project
1. Tạo một thư mục tên **wax** trên máy tính của bạn. Ở đây tôi dùng *Ubuntu 20.04*
- `mkdir wax`
và đây là full path của tôi 
- */media/vietsaclo/UbuntuData3/Projects/[03_BLC]*
2.  Trỏ tới đường đẫn của thư mục **wax**
- `cd /media/vietsaclo/UbuntuData3/Projects/[03_BLC]/wax`
3. bắt đầu thực hiện chạy dưới quyền root. Gõ
- `su`
4. Xóa container waxdev trên máy nếu nó đã tồn tại. **Luy ý** nếu đây là lần đầu tiên chạy, bạn hãy bỏ qua bước này.
- `docker rm -f -v waxdev`
5. Bắt đầu kéo Image của waxdev từ docker hub về máy, và tiến hành cài đặt.
- `docker run -it --name waxdev -v /media/vietsaclo/UbuntuData3/Projects/[03_BLC]/wax:/wax waxteam/dev bash`
Nếu thành công cửa sổ terminal sẽ hiển thị như này: 
- *root@dc7ff447203d:*
6. Kích hoạt Nodeos
	- Gõ: `keosd &`
	- Tiếp tục dán đoạn mã: 
		-	`nodeos -e -p eosio \`
		- `--plugin eosio::producer_plugin \`
		-	`--plugin eosio::chain_api_plugin \`
		-	`--plugin eosio::http_plugin \`
		-	`--access-control-allow-origin='*' \`
		-	`--contracts-console \`
		-	`--http-validate-host=false \`
		-	`--verbose-http-errors >> nodeos.log 2>&1 &`
7. Kiểm tra Nodeos đã kích hoạt thành công hay chưa bằng lệnh.
- `tail -f nodeos.log`. Nếu terminal cập nhật liên tục thì thành công.
8. Tạo mới một ví bằng lệnh:
- `cleos wallet create --to-console -n wallet1`. 
- **Lưu ý** nhớ giữ lại mật khẩu ví. Ví dụ mật khẩu ví của tôi là: *PW5JgrZ4o8NeVTV7d3UJrQXC6XC3CrST82wkdxN9qKTf3bikTZcus*
9. Mở ví vừa tạo lên:
- `cleos wallet open -n wallet1`
10. Mở khóa ví đó lên bằng lệnh:
- `cleos wallet unlock --password PW5JgrZ4o8NeVTV7d3UJrQXC6XC3CrST82wkdxN9qKTf3bikTZcus -n wallet1`. - **Lưu ý** bỏ mật khẩu trùng với mật khẩu đã tạo ví trước đó.
11. Để kiểm tra lại danh sách các ví đã tạo thực hiện:
- `cleos wallet list`
12. *Để thực hiện đẩy smart contract lên mạng wax test net, phục vụ cho môi trường dev. wax test net là mạng cung cấp cho chúng ta môi trường dev, mua wax coin miển phí, mua ram và cpu*
**Để tạo tài khoản wax test vào link: https://faucet.waxsweden.org/create_account?waxisawesome**
**Và để cho nhanh =>**. Bạn có thể dùng tài khoản này:
`testnet account:
  {"msg": "succeeded", "keys": {"active_key": {"public": "EOS8caT6mUAFaUeHzjUZtSeW3YcffEuLykexZD7B1jLnyGVTbChNC", "private": "5J61BkwayGyTPLzCdcH6ujerMRTBrvE3tQoK7EFbMB8vDVxJPnR"}, "owner_key": {"public": "EOS6RWMSuH2sotnEf2X5raTU1epUprwk6mPFpkQDuR6iFR4C5ZJRc", "private": "5KHjVJjkrhwiFDNZEmrR4gz6sUvtTpN4BDyQXrE2H6ZM6rtjiDm"}}, "account": "waxisawe4252"}`
  13. Import private key cho ví:
	  -	 key 1: `cleos wallet import --private-key 5J61BkwayGyTPLzCdcH6ujerMRTBrvE3tQoK7EFbMB8vDVxJPnR -n wallet1`
	  -	key 2: `cleos wallet import --private-key 5KHjVJjkrhwiFDNZEmrR4gz6sUvtTpN4BDyQXrE2H6ZM6rtjiDm -n wallet1`

## Build project
Đảm bảo bạn đang đứng tại bash của docker: *root@dc7ff447203d:*

-  `cd wax`
- `mkdir mycontracts` nếu chưa tồn tại thư mục này.
- `cd mycontracts`
- `git clone -b develop https://github.com/vietnq-dgh/wax_project.git` || `git pull`
- `cd wax_project/build && rm -rf * && cmake .. && make`
- Nếu thành công build 100%. 2 File wasm và abi sẽ được tạo tại đường dẫn này:
`cd wax/ && ls`
Output như sau: *CMakeCache.txt  CMakeFiles  Makefile  cmake_install.cmake  **wax.abi  wax.wasm***

## Deploy lên mạng wax test net

 1. Nếu chưa đủ ram thực hiện mua thêm ram bằng lệnh:
-  `cleos -u https://testnet.waxsweden.org system buyram waxisawe4252 waxisawe4252 "3.00000000 WAX"`
 2. Nếu chưa đủ cpu thực hiện mua thêm cpu bằng lệnh:
-  `cleos -u https://testnet.waxsweden.org system delegatebw waxisawe4252 waxisawe4252 "4.00000000 WAX" "5.00000000 WAX"`
 
**Lưu ý tiền wax được chi trả bằng tài khoản waxisawe4252. đây là một tài khoản test. Đồng tiền wax ở đây là giả lập để thanh toán. trước khi đưa lên môi trường thực tế *Main Net***

3. Tiến hành vào thư mục chứa file .wasm và abi:
- `cd /wax/mycontracts/wax_project/build/wax`
4. Permisstion Active:
- `cleos -u https://testnet.waxsweden.org set account permission waxisawe4252 active --add-code`
5. **Cuối cùng** Đẩy code lên mạng test net:
- `cleos -u https://testnet.waxsweden.org set contract waxisawe4252 $(pwd) wax.wasm wax.abi`

## Kiểm tra smart contract

1. Truy cập vào đường dẫn: 
- `https://wax-test.bloks.io/`. Đăng nhập bằng **cleos/eosc**. Bằng tài khoản **waxisawe4252** -> Active.

# PC ENVIRONMENT

1. Trỏ tới thư mục gốc, thư mục chứa contract.\
`cd /media/vietsaclo/UbuntuData3/Projects/[03_BLC]/wax/mycontracts`

2. root permission\
`su`

3. Kích hoạt Nodeos
	- Gõ: `keosd &`
	- Tiếp tục dán đoạn mã: 
		-	`nodeos --hard-replay-blockchain -e -p eosio \`
		- `--plugin eosio::producer_plugin \`
		-	`--plugin eosio::chain_api_plugin \`
		-	`--plugin eosio::http_plugin \`
		-	`--access-control-allow-origin='*' \`
		-	`--contracts-console \`
		-	`--http-validate-host=false \`
		-	`--verbose-http-errors >> nodeos.log 2>&1 &`
4. Kiểm tra Nodeos đã kích hoạt thành công hay chưa bằng lệnh.\
`tail -f nodeos.log`. \
Nếu terminal cập nhật liên tục thì thành công. Nhấn `ctrl + c` để dừng.

5. Vào trình duyệt bất kỳ nhập vào địa chỉ\
`http://localhost:8888/v1/chain/get_info`\
sẽ hiển thị ra kết quả giống vầy:\
*{"server_version":"58f90b96","chain_id":"8a34ec7df1b8cd06ff4a8abbaa7cc50300823350cadc59ab296cb00d104d2b8f","head_block_num":70430,"last_irreversible_block_num":70429,"last_irreversible_block_id":"0001131d1aef4047f979c8c6cee29ae81fbd0f08c4cd46671f000305ea4ffdd7","head_block_id":"0001131e5d94011ced45bdf95004de06602f4528f5228fbcf0a43003528e8a8c","head_block_time":"2021-05-07T08:04:23.500","head_block_producer":"eosio","virtual_block_cpu_limit":200000000,"virtual_block_net_limit":1048576000,"block_cpu_limit":199900,"block_net_limit":1048576,"server_version_string":"v2.0.9","fork_db_head_block_num":70430,"fork_db_head_block_id":"0001131e5d94011ced45bdf95004de06602f4528f5228fbcf0a43003528e8a8c","server_full_version_string":"v2.0.9-58f90b9666dc37cf35eac5dafb6db1c4138024e7"}*

--------------

# Test Localhost

6. Mở ví **wallet0**.\
`cleos wallet open -n wallet0`\
**Lưu ý:** ví này đã tạo từ trước và import sẵn key.

7. Mở khóa ví lên nếu chưa mở khóa ví **wallet0**\
`cleos wallet unlock -n wallet0 --password PW5JBYpKB1zFZMjR9UcuX6qGHiUMeQtzH2vPUoAGGzhBFDuZQDKJi`\
**Lưu ý:** mật khẩu phải chính xác.

8. Xem danh sách các ví\
`cleos wallet list`\
Ví nào có dấu `*` là đã mở và unlock.

9. Xem danh sách các project trong thư mục contract.\
`ls`

10. Truy cập vào contract **addressbook**\
 `cd addressbook`

11. Mở project lên bằng **Visual Studio Code**\
`code . --user-data-dir`

12. Build project **Genarate** file **WASM** và file **ABI**.\
`eosio-cpp addressbook.cpp -o addressbook.wasm --abigen`

13. Để deploy smart contract lên, cần phải xác định deploy lên tài khoản nào. Tạo mới tài khoản nếu chưa có. Để kiểm tra thông tin tài khoản gõ:\
`cleos get account addressbook`\

14. Deploy smart contract lên local.\
`cleos set contract addressbook $(pwd) addressbook.wasm addressbook.abi`

15. Test smart contract.\
- `cleos push action addressbook upsert '["alice", "alice", "liddell", 9, "123 drink me way", "wonderland", "amsterdam"]' -p alice@active`

- `cleos push action addressbook erase '["alice"]' -p alice@active`

16. Kiểm tra dữ liệu đã vào được chưa.\
`cleos get table addressbook addressbook people --upper 50 --key-type i64 --index 2`

# Test Wax Test Net

17. Mở ví **wallet1**.\
`cleos wallet open -n wallet1`\
**Lưu ý:** ví này đã tạo từ trước và import sẵn key.

18. Mở khóa ví lên nếu chưa mở khóa ví **wallet1**\
`cleos wallet unlock -n wallet1 --password PW5JAZTZFy12VjUw5dsHzmnFqShsSoGmQsLBiKFxmHQhbdVwkmnbr`\
**Lưu ý:** mật khẩu phải chính xác.

19. Xem danh sách các ví\
`cleos wallet list`\
Ví nào có dấu `*` là đã mở và unlock.

20. Build project **Genarate** file **WASM** và file **ABI**.\
`eosio-cpp addressbook.cpp -o addressbook.wasm --abigen`

21. Permission add code.\
`cleos -u https://testnet.waxsweden.org set account permission waxisawe4252 active --add-code`

22. Đẩy smart contract lên tài khoản **waxisawe4252**.\
`cleos -u https://testnet.waxsweden.org set contract waxisawe4252 $(pwd) addressbook.wasm addressbook.abi`

23. Test smart contract.\
- `cleos -u https://testnet.waxsweden.org push action waxisawe4252 upsert '["waxisawe4252", "Nguyen Quoc", "Viet", 21, "03 vo duc quoc", "Quang Ngai", "Viet Nam"]' -p waxisawe4252@active`

- `cleos push action addressbook erase '["alice"]' -p alice@active`

24. Kiểm tra dữ liệu đã vào được chưa.\
`cleos -u https://testnet.waxsweden.org get table waxisawe4252 waxisawe4252 people -l 100`