// Inherit your contract from eosio::contract. 
// This exposes the following data types (available to your smart contract):
// eosio::name receiver - the contract that receives an action (this contract)
// eosio::name code - the contract's blockchain account
// eosio::datastream - the data that's passed to the contract. In this example, it's  your name.
#include <eosio/eosio.hpp>
using namespace eosio;

CONTRACT wax : public contract {
   public:
      using contract::contract;

      // The ACTION keyword implements the behavior of your contract. 
      // ACTION is a shortcut for [[eosio::action]]  
      ACTION hi( name nm );

      //action_wrapper: first parameter = action to call
      //second parameter = pointer to the action function
      using hi_action = action_wrapper<"hi"_n, &wax::hi>;
};