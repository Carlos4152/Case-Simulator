import React, { useState, useEffect } from 'react';

const Form = ({ onGetData }) => {

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
    setInputs((prev) => ({ ...prev, [name]: value }));
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

    onGetData(newData)

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

  return (
    <>
      <div className="close--section flex justify-center items-center py-[20px]">
        <i className="pr-[24px] fa-solid fa-bars-progress text-[2rem] text-[#54B4D3]"></i>
        <p className="pl-[15px] font-bold text-[2rem]">Case Form</p>
      </div>
      <form className="shadow-2xl form--section p-[20px]" onSubmit={handleInputValue}>
        <ul className="grid lg:grid-cols-4 lg:gap-[8px] lg:items-center">
          <li className="pt-[10px]">
            <p className="font-semibold pb-[4px]">Customer Name</p>
            <input type="text" className="border w-[100%] py-[3px]" name="customer" value={inputs.customer} onChange={handleChange} placeholder='Enter name' required />
          </li>
          <li className="pt-[10px]">
            <p className="font-semibold pb-[4px]">Subject</p>
            <input type="text" className="border w-[100%] py-[3px]" name="subject" value={inputs.subject} onChange={handleChange} placeholder='Reason of calling' required />
          </li>
          <li className="pt-[10px]">
            <p className="font-semibold pb-[4px]">Account ID</p>
            <input type="number" className="border w-[100%] py-[3px]" name="account" value={inputs.account} onChange={handleChange} placeholder='Account' required />
          </li>
          <li className="pt-[10px]">
            <p className="font-semibold pb-[4px]">Case Status</p>
            <select className="border w-[100%] outline-0 py-[3px]" name="details" value={inputs.details.value} onChange={handleChange} >
              <option value="open">Open</option>
              <option value="pending">Pending</option>
              <option value="solved">Solved</option>
            </select>
          </li>
          <li className=" pt-[10px] lg:col-span-full">
            <textarea name="info" cols="30" rows="7" className="border w-[100%]" style={{ resize: 'none' }}
              value={inputs.info} onChange={handleChange} placeholder='Enter your comments ...' required
            ></textarea>
          </li>
        </ul>
        <button className="font-semibold text-[#54B4D3] bg-[black] px-[20px] py-[6px] my-[15px] rounded" type="submit">SUBMIT</button>
      </form>
      <div className="note--section pt-[35px]">
        <h3 className='font-bold'>NOTE:</h3>
        <p className='italic'>you can keep track of your interactions and follow them up, talk to your team lead or co-workers, search for questions related to the customer questions or scenario you can come across, complete some changes on your profile. In case you have any technical issue call us at 800-546-9868</p>
      </div>

    </>
  );
};

export default Form;
