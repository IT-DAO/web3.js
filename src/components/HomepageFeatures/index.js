import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '高度还原官方文档',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        内容完全对接官方文档，并及时更新，拒绝杜撰。样式也尽量贴合官方文档。
      </>
    ),
  },
  {
    title: '专业翻译',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        我们具有专业的翻译团队，专业的技术人员进行翻译和校准，为正确率进行保障。
      </>
    ),
  },
  {
    title: '团队专业',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        本项目依托于 IT-DAO web3通用技术研究组织，长期稳定更新。也欢迎参与本项目GitHub翻译，你将获得IT-DAO限定版NFT作为激励。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
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
