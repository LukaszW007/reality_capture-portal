// global dependencies
import React from 'react';
import { graphql, Link, StaticQuery } from 'gatsby';

// local dependencies
import styles from './ListOfArticles.module.scss';
import BannerWithCaption from '../BannerWithCaption';

interface PropsArticlesList {
  detailsData: Record<string, any>;
  articlesData: any;
}

const ListOfArticles: React.FC<PropsArticlesList> = props => {
  const { detailsData, articlesData } = props;

  const singleLink = (uidPost: string) => {
    const articlesDataByUid = articlesData.map((edge: any) => {
      console.log(`edge.node.uid ${edge.node.uid}`);
      console.log(`uidPost ${uidPost}`);
      if (uidPost === edge.node.uid) {
        const { text } = edge.node.data.title[0];
        const mainImage = edge.node.data.main_image;
        return { mainImage, text };
      }
      return null;
    });
    console.log(`articlesDataByUid ${JSON.stringify(articlesDataByUid)}`);
    const filteredArticlesDataByUid = articlesDataByUid.filter(Boolean);
    console.log(
      `filteredArticlesDataByUid ${JSON.stringify(filteredArticlesDataByUid)}`
    );

    if (
      filteredArticlesDataByUid[0] !== null &&
      filteredArticlesDataByUid[0] !== undefined
    ) {
      const { mainImage, text } = filteredArticlesDataByUid[0];

      return (
        <li className={styles.singleArticleOnTheList} key={uidPost}>
          <Link to={`/posts/${uidPost}`} className={styles.linkInList}>
            <img
              className={styles.articleImage}
              src={mainImage.url}
              alt={mainImage.alt}
            />
            <p className={styles.linkToArticle}>{text}</p>
          </Link>
        </li>
      );
    }
    return null;
  };

  return (
    <div className={styles.listArticlesContainer}>
      <div className={styles.header}>
        {detailsData.primary.list_of_articles[0].text}
      </div>
      <ul className={styles.listOfArticles}>
        {detailsData.items.map(
          (item: { articles_to_link: { uid: string } }) => {
            const { uid: articleUID } = item.articles_to_link;
            return singleLink(articleUID);
          }
        )}
      </ul>
    </div>
  );
};

export default ListOfArticles;
