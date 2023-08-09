import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "공부",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        근거를 바탕으로 코딩을 하기 위해 공부하고 노력합니다 <br />
        코드 한 줄에 많은 고민과 이유를 담습니다
      </>
    ),
  },
  {
    title: "기록",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>공부한 내용들을 정리하고 기록으로 남겨 언제든지 볼 수 있게 합니다</>
    ),
  },
  {
    title: "새로운 기술",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        새로운 기술을 도입할 때는 왜 이런 기술이 탄생했고, <br />
        어떻게 하면 잘 사용할 수 있을지 고민합니다
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
