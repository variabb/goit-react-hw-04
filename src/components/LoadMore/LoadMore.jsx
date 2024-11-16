import s from "./LoadMore.module.css";

function LoadMore({ setPage }) {
  const handleLoadMore = () => {
    console.log("Load More button clicked");
    setPage((prevPage) => {
      console.log("Previous page:", prevPage);
      return prevPage + 1;
    });
  };

  return <button className={s.button} onClick={handleLoadMore}>Load More</button>;
}


export default LoadMore;
