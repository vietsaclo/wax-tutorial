import { createStore } from "redux";
import Reducer from '../reducers';

const Store = createStore(
    Reducer,
)

export default Store;