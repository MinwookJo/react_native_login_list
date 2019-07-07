import AccountStore from "../AccountStore";
import SearchStore from "../SearchStore";
import { reaction } from "mobx";

class RootStore {
    public accountStore = new AccountStore();
    public searchStore = new SearchStore(); 
}

export default RootStore;
