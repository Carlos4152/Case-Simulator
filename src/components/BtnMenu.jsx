import React from 'react'

const BtnMenu = ({ onToggle }) => {
  return (
    <>
      <div className='menu--icon text-end pb-[18px] xl:hidden sticky top-0 pt-[15px]'>
        <i className='bx bx-menu-alt-right text-[1.5rem] text-[#54B4D3] px-[9px] py-[8px] bg-[black] rounded-full border border-[#54B4D3] cursor-pointer border-2 z-40' onClick={onToggle}></i>
      </div>
    </>
  )
}

export default BtnMenu;