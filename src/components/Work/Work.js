import React, { useState, useEffect } from "react";
import Case from "../Case/Case";
import Filter from "../Filter/Filter";
import styles from "./Work.module.css";

const Work = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [articles, setArticles] = useState([]);
  const [toggle, setToggle] = useState(true);

  const getToggle = (d) => setToggle(d);

  const getFilterValue = (d) => {
    setSelectedFilter(d);
  };

  useEffect(() => {
    fetch("https://60180618971d850017a3f68a.mockapi.io/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, []);

  const toggleClass = [
    styles.wrapper,
    toggle === false ? styles.wrapperRow : null,
  ];

  const cases = articles.map((d) => {
    return (
      <Case
        key={d.id}
        imgSrc={d.imgSrc}
        imgAlt={d.imgAlt}
        title={d.title}
        content={d.content}
        type={d.type}
        link={d.link}
      />
    );
  });
  const selectedCases = cases.filter((d) =>
    selectedFilter === "all" ? d : d.props.type === selectedFilter
  );
  return (
    <section className={styles.Work}>
      <Filter
        selected={selectedFilter}
        filterValue={getFilterValue}
        toggle={getToggle}
      />
      <div className={toggleClass.join(" ")}>{selectedCases}</div>
    </section>
  );
};

export default Work;
