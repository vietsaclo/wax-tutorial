#include "../include/wax.hpp";

ACTION wax::hi(name nm)
{
  /* fill in action body */
  print_f("Name : %\n", nm);
}

//===== Action 2: Hello world
ACTION wax::helloworld(name text)
{
  print_f("Text : %\n", text);
}

//===== Action 3: Add row to main net
ACTION wax::addkeyvalue(name username, name key, std::string value)
{
  require_auth(username);
  // insert record
  auto key_find = _tb_keys_values.find(key.value);
  if (key_find == _tb_keys_values.end())
  {
    _tb_keys_values.emplace(username, [&](auto &row)
                            {
                              row.key = key;
                              row.value = value;
                            });
  }
  // update recored
  else
  {
    _tb_keys_values.modify(key_find, username, [&](auto &row)
                           {
                             row.key = key;
                             row.value = value;
                           });
  }
}

//===== Action 4: Remove row to main net
ACTION wax::rmkeyvalue(name username, name key)
{
  require_auth(username);
  auto &kv_find = _tb_keys_values.get(key.value, "Key does't exits");
  // remove
  _tb_keys_values.erase(kv_find);
}