// Inherit your contract from eosio::contract.
// This exposes the following data types (available to your smart contract):
// eosio::name receiver - the contract that receives an action (this contract)
// eosio::name code - the contract's blockchain account
// eosio::datastream - the data that's passed to the contract. In this example, it's  your name.
#include <eosio/eosio.hpp>
using namespace eosio;

CONTRACT wax : public contract
{
public:
  using contract::contract;

  // constructor
  wax(name receiver, name code, datastream<const char *> ds) : contract(receiver, code, ds),
                                                               _tb_keys_values(receiver, receiver.value) {}

  // The ACTION keyword implements the behavior of your contract.
  // ACTION is a shortcut for [[eosio::action]]
  ACTION hi(name nm);

  //action_wrapper: first parameter = action to call
  //second parameter = pointer to the action function
  using hi_action = action_wrapper<"hi"_n, &wax::hi>;

  //===== Action 2
  ACTION helloworld(name text);
  using helloWorld_action = action_wrapper<"helloworld"_n, &wax::helloworld>;

  //===== Action 3
  ACTION addkeyvalue(name username, name key, std::string value);
  using addkeyvalue_action = action_wrapper<"addkeyvalue"_n, &wax::addkeyvalue>;

private:
  struct [[eosio::table]] tbkeysvalues
  {
    name key;
    std::string value;
    uint64_t primary_key() const { return key.value; }
  };
  typedef eosio::multi_index<name("tbkeysvalues"), tbkeysvalues> tb_keys_values;
  tb_keys_values _tb_keys_values;
};