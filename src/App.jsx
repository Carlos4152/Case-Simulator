import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'

import SideBar from './components/SideBar'
import Form from './components/Form'
import History from './components/Records'
import BtnMenu from './components/BtnMenu'
import Product from './components/Product'
import MyAccount from './components/MyAccount'
import Team from './components/Team'

function App() {
  // pushing new objects coming from From Component
  const [caseDetails, setCaseDetails] = useState([
    {
      id: 0,
      customer: "Carlos Ramirez",
      subject: "report credit card",
      account: 430336584,
      details: "solved",
      info: "account was closed due to late payments"
    },
    {
      id: 1,
      customer: "Armando Torrez",
      subject: "report credit card",
      account: 430336584,
      details: "pending",
      info: "account was closed due to late payments"
    }
  ]);

  const getFullFormData = (event) => {
    const num = Math.floor(Math.random() * 1000) + 1;
    const receivedData = { id: num, ...event };

    setCaseDetails([...caseDetails, receivedData])
  };

  // Removing case from  Records Component
  const removeCase = (objectId) => {
    const updatedArray = caseDetails.filter(element => element.id != objectId);
    setCaseDetails(updatedArray)
  }

  //Toggle bar menu
  const [toggleMenu, setToggleMenu] = useState(false)
  const toggleBarMenu = () => {
    setToggleMenu(!toggleMenu);
  }

  return (
    <Router>
      <div className="grid grid-cols-12 h-[100vh]">
        <SideBar onToggle={toggleMenu} afterClick={toggleBarMenu}/>
        <section className="content--section col-span-12 xl:col-span-10 px-[25px] py-[20px]">
          <BtnMenu onToggle={toggleBarMenu}/>
          <Routes>
            <Route path='/form' element={<Form onGetData={getFullFormData} />} />
            <Route path='/product' element={<Product />} />
            <Route path='/case-history' element={<History caseInfo={caseDetails} onRemove={removeCase}/>} />
            <Route path='/my-account' element={<MyAccount />} />
            <Route path='/issue' element={<Team />} />
            <Route path='*' element={<Form onGetData={getFullFormData} />} />
          </Routes>
        </section>
      </div>
    </Router>
  )
}

export default App
