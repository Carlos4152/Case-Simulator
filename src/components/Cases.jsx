const Cases = ({ caseCounts }) => {
  const { open, pending, solved } = caseCounts;

  return (
    <section className="cases--container row row-col-3  m-0 text-center py-4 my-4 shadow-lg rounded">
      <div className="col-4 d-flex flex-column aling-items-center justify-content-center">
        <h2 className="text-info">OPEN</h2>
        <h2 className="">{open}</h2>
      </div>
      <div className="col-4 d-flex flex-column aling-items-center justify-content-center border-end border-start border-4 border-info">
        <h2 className="text-warning">PENDING</h2>
        <h2 className="">{pending}</h2>
      </div>
      <div className="col-4 d-flex flex-column aling-items-center justify-content-center">
        <h2 className="text-success">SOLVED</h2>
        <h2 className="">{solved}</h2>
      </div>
    </section>
  )
}

export default Cases;