import React, { useEffect, useState } from "react";
import Btn from "../UI/Btn";
import styles from "./Filter.module.css";

const Filter = (props) => {
  const [list, setList] = useState(true);

  const filterResponse = (event) => {
    props.filterValue(event.target.value);
  };
  useEffect(() => {
    props.toggle(list);
  }, [list, props]);

  return (
    <div className={styles.filterContainer}>
      <div className={styles.btnContainer} onClick={() => setList(!list)}>
        <Btn>TOGGLE VIEW</Btn>
      </div>
      <div>
        <p>Show me</p>
        <select value={props.selected} onChange={filterResponse}>
          <option value="all">all work</option>
          <option value="Culture">culture</option>
          <option value="E-Commerce">e-commerce</option>
          <option value="Banking">banking</option>
          <option value="Traveling">traveling</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
