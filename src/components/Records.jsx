import { useState } from "react"

const History = ({ caseInfo, onRemove }) => {

  const dateInfo = new Date();
  const caseDate = `${dateInfo.getMonth() + 1}/${dateInfo.getDate()}/${dateInfo.getFullYear()}`;

  const [search, setSearch] = useState('');
  const [editEl, setEditEl] = useState(false);
  
  return (
    <section className="history--section">
       <div className="close--section flex justify-center items-center py-[20px]">
        <i className="pr-[24px] fa-solid fa-database text-[2rem] text-[#54B4D3]"></i>
        <p className="pl-[15px] font-bold text-[2rem]">Case History</p>
      </div>
      <form className="search--section">
        <label className="font-semibold pe-3">Search Case: </label>
        <input
          type="text"
          placeholder="Customer Name"
          className="border indent-2 py-[3px] outline-0"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <h1 className="italic text-[2rem] text-center pt-[45px]">{caseInfo.length == 0 ? "Well done! ✅" : ""}</h1>
      <section className="grid gap-[20px] md:grid-cols-3">
        {caseInfo.filter((item) => {
          return search.toLowerCase() === '' 
          ? item 
          : item.customer.toLowerCase().includes(search)
        })
        .map(item =>
        (
          <article className="border p-[18px]" key={item.id} id={item.id}>
            <div className="action--icon flex justify-between">
              <p className="italic">{caseDate}</p>
              <div className="icons">
                <button className="text-[red]" onClick={() => onRemove(item.id)}>
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>
            <div className="case--details flex">
              <div className="case--title font-bold">
                <p className="pt-[10px]">Customer:</p>
                <p className="pt-[10px]">Issue:</p>
                <p className="pt-[10px]">Account:</p>
                <p className="pt-[10px]">Status:</p>
              </div>
              <div className="case--info">
                <p className="pt-[10px] pl-[18px]">{item.customer}</p>
                <p className="pt-[10px] pl-[18px]">{item.subject}</p>
                <p className="pt-[10px] pl-[18px]">{item.account}</p>
                <p className="pt-[10px] pl-[18px]">
                  {item.details === "open" ? "open" : item.details === "pending" ? "pending" : item.details === "solved" ? "solved" : "UnKnow"}
                </p>
              </div>
            </div>
            <div className="description">
              <p className="font-bold pt-[10px]">Description:</p>
              <p className="pt-[10px]" contentEditable={editEl}>{item.info}</p>
            </div>
          </article>
        )
        )}
      </section>
    </section>
  );

};

export default History;
