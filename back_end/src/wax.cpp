#include "../include/wax.hpp";

ACTION wax::hi(name nm)
{
  /* fill in action body */
  print_f("Name : %\n", nm);
}

ACTION wax::helloworld(name text)
{
  print_f("Text : %\n", text);
}

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
  else
  {
    print_f("key % exists! \n", key);
  }
}