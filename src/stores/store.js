import { makeAutoObservable } from "mobx";

class CounterStore{
    count = 0;
    
    constructor(){
        makeAutoObservable(this);
    }

    inc = () => {
        this.count += 1;
        console.log(this.count);
    }

    dec = () => {
        this.count -= 1;
        console.log(this.count);
    }
}

export default CounterStore;