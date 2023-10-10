import { observer } from "mobx-react-lite";
import store from './stores/store'
const store1 = new store;

const App = observer(() => {
  return (
    <div className="countercont">
      <span>{store1.count}</span>
      <div className="btncont">
        <button onClick={()=>store1.dec()}>-</button>
        <button onClick={()=>store1.inc()}>+</button>
      </div>
    </div>
  );
});

export default App;
