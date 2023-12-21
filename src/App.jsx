import { Calculator } from "component/Calculator/Calculator";
import { RandomUser } from "component/RandomUser/RandomUser";
import s from "./App.module.css";
export function App() {
  return (
      <div className={s.root}>
        {/* <Calculator defaultA={5} defaultB={5} defaultOperator={"x"} /> */}
        <RandomUser />
      </div>
  );
}