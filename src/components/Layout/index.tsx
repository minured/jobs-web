import styles from "./index.scss";

const PageLayout = ({ children }) => {
  return (
    <div className={styles.pageLayout}>
        {children}
    </div>
  );
}

export default PageLayout;