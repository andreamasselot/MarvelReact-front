import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pagination = (page) => {
  return (
    <>
      {page.counter !== 1 ? (
        <p
          onClick={() => {
            if (page.counter !== 1) {
              page.setCounter(page.counter - 1);
            }
          }}
        >
          <FontAwesomeIcon icon="arrow-left" />
        </p>
      ) : (
        <div className="empty-div"></div>
      )}

      <p>{page.counter}</p>
      <p
        onClick={() => {
          page.setCounter(page.counter + 1);
        }}
      >
        <FontAwesomeIcon icon="arrow-right" />
      </p>
    </>
  );
};

export default Pagination;
