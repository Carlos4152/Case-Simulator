const History = ({caseInfo}) => {
  const dateInfo = new Date();
  const caseDate = `${dateInfo.getMonth() + 1}/${dateInfo.getDate()}/${dateInfo.getFullYear()}`;

  return (
    <section className="history--section py-4 ">
      <form className="search--section pb-4">
        <label className="fw-semibold pe-3">Search Case: </label>
        <input
          type="text"
          placeholder="Enter Account or Name"
          className="border ps-1"
          style={{outline: "none"}}
        />
      </form>
      <section className="row row-cols-4 m-0 gx-3">
        {caseInfo.map(item => 
          (
            <article className="col border p-3 border" key={item.length}>
          <div className="action--icon d-flex justify-content-between pb-3">
            <p className="m-0 fst-italic">{caseDate}</p>
            <div className="icons">
            <button className="border-0 bg-transparent pe-3">
              <i className="fa-solid fa-trash-can text-danger"></i>
            </button>
            <button className="border-0 bg-transparent">
              <i className="fa-solid fa-pen-to-square text-secondary"></i>
            </button>
            </div>
          </div>
          <div className="case--details d-flex">
            <div className="case--title">
              <p className="fw-bold">Customer:</p>
              <p className="fw-bold">Issue:</p>
              <p className="fw-bold">Account:</p>
              <p className="fw-bold">Status:</p>
            </div>
            <div className="case--info">
              <p className="fw-semibold ps-3">{item.name}</p>
              <p className="fw-semibold ps-3">{item.subject}</p>
              <p className="fw-semibold ps-3">{item.account}</p>
              <p className="fw-semibold ps-3 text-success">
              {item.status ? "solved" : "pending"}
              </p>
            </div>
          </div>
          <div className="description">
          <p className="fw-bold m-0">Description:</p>
          {item.description}
          </div>
     </article>
          )
        )}
      </section>
    </section>
  );
};

export default History;
