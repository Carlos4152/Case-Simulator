import React, { useState, useEffect  } from 'react';

const Form = ( { onGetData, fullData }) => {
  const [inputs, setInputs] = useState({
    customer: "",
    subject: "",
    account: "",
    details: "",
    info: ""
  });

  const [dataList, setDataList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({...prev, [name]: value}));
  }

  const handleInputValue = (e) => {
    e.preventDefault();
    
    const newData = {
      customer: inputs.customer,
      subject: inputs.subject,
      account: inputs.account,
      details: inputs.details,
      info: inputs.info
    }
    
    onGetData(newData.details);
    fullData(newData)
    setDataList(prevDetails => [...prevDetails, newData])
    
    setInputs({
      customer: "",
      subject: "",
      account: "",
      details: "",
      info: ""
    })    
  };  

  useEffect(() => { }, [dataList]);

  return(
    <form className="shadow-lg p-4 form--section" onSubmit={handleInputValue}>
      <ul className="row m-0 p-0 list-unstyled">
        <li className="col-sm-3 p-0">
          <p className="font-semibold m-0 pb-2 fw-semibold text-info">Customer Name</p>
          <input type="text" className="border ps-1 w-75" name="customer" value={inputs.customer} onChange={handleChange} placeholder='Enter name'/>
        </li>
        <li className="col-sm-3 p-0 ">
          <p className="font-semibold m-0 pb-2 fw-semibold text-info">Subject</p>
          <input type="text" className="border ps-1 w-75" name="subject" value={inputs.subject} onChange={handleChange} placeholder='Reason of calling'/>
        </li>
        <li className="col-sm-3 p-0 ">
          <p className="font-semibold m-0 pb-2 fw-semibold text-info">Account ID</p>
          <input type="text" className="border ps-1 w-75" name="account" value={inputs.account} onChange={handleChange} placeholder='Account'/>
        </li>
        <li className="col-sm-3 p-0">
          <p className="font-semibold m-0 pb-2 fw-semibold text-info">Case Status</p>
          <select className="border w-75" name="details" value={inputs.details.value} onChange={handleChange}>
            <option value="open">Open</option>
            <option value="pending">Pending</option>
            <option value="solved">Solved</option>
          </select>
        </li>
        <li className="items-center col-span-full p-0 col-sm-12 py-3">
          <textarea name="info" cols="30" rows="5" className="border ps-1 w-100" style={{ resize: 'none' }} 
          value={inputs.info} onChange={handleChange} placeholder='Enter your comments ...'
          ></textarea>
        </li>
      </ul>
      <button className="bg-dark text-info fw-semibold px-4 py-2 border-0 rounded" type="submit">SUBMIT</button>
    </form>
  );
};

export default Form;
