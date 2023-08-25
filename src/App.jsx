import { useState } from 'react'
import './App.css'

import SideBar from './components/SideBar'
import Form from './components/From'
import Cases from './components/Cases'
import History from './components/Records'

function App() {
  // start Getting Case Details from Form Component
  const [caseData, setCaseData] = useState([]);
  const [caseCounts, setCaseCounts] = useState({ open: 0, pending: 0, solved: 0 });
  
  const upDateCase = (data) => {
    setCaseData((prevData) => [...prevData, data]);
    setCaseCounts((prevCounts) => ({
      ...prevCounts,
      [data]: prevCounts[data] + 1
    }));
  }
  
  const [caseDetails, setCaseDetails] = useState([
    {
      id: 0,
      name: "Carlos Ramirez",
      subject: "report credit card",
      account: 430336584,
      status: false,
      description: "account was closed due to late payments"
    },
    {
      id: 1,
      name: "Armando Torrez",
      subject: "report credit card",
      account: 430336584,
      status: false,
      description: "account was closed due to late payments"
    },
    {
      id: 2,
      name: "Rodrigo Perez",
      subject: "report credit card",
      account: 430336584,
      status: false,
      description: "account was closed due to late payments"
    },
    {
      id: 3,
      name: "Guillermo Prada",
      subject: "report credit card",
      account: 430336584,
      status: false,
      description: "account was closed due to late payments"
    }
  ])

  const getFullFormData = (event) => {
    console.log(event)
  };

  return (
    <>
      <div className="row m-0">
        <SideBar />
        <section className="content--section col-sm-10 p-5">
          <Form onGetData={upDateCase} fullData={getFullFormData} />
          <Cases caseCounts={caseCounts}/>
          <History caseInfo={caseDetails}/>
        </section>
      </div>
    </>
  )
}

export default App
