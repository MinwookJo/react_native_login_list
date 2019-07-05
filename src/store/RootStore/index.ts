import AccountStore from "../AccountStore";
import SearchStore from "../SearchStore";

class RootStore {
    public accountStore = new AccountStore();
    public searchStore = new SearchStore(); 
}

export default RootStore;
