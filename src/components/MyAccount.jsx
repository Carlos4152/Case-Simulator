
const MyAccount = () => {
  return (
    <>
      <div className="close--section flex justify-center items-center py-[20px]">
        <i className="pr-[24px] fa-solid fa-user text-[2rem] text-[#54B4D3]"></i>
        <p className="pl-[15px] font-bold text-[2rem]">My Account</p>
      </div>
      <div className="my--account w-[100%] pt-[10px] grid md:grid-cols-3 gap-[15px] ">
        <section className="profile--information border p-[30px] bg-[black] rounded-[10px]">
          <div className="text-center">
            <i className="fa-solid fa-circle-user text-[3.5rem] text-[#54B4D3]"></i>
            <p className="pt-[10px] text-[1.3rem] font-semibold text-white">Rodrigo Perez</p>
          </div>
          <div className="number flex items-center pt-[20px]">
            <i className="fa-solid fa-phone text-[#54B4D3]"></i>
            <p className="pl-[10px] text-white">+1 427 222 3654</p>
          </div>
          <div className="number flex items-center pt-[20px]">
            <i className="fa-solid fa-envelope text-[#54B4D3]"></i>
            <p className="pl-[10px] text-white">rodrigo5895@casecenter.com</p>
          </div>
        </section>

        <section className="security--info border p-[30px] bg-[black] rounded-[10px]">
          <div className="text-center">
            <p className="text-[1.3rem] font-semibold text-white">Security Info</p>
            <i className="fa-solid fa-user-pen text-[3.5rem] text-[#54B4D3] pt-[10px]"></i>
          </div>
          <div className="number flex items-center pt-[20px]">
            <p className="text-white text-center">Keep your verification methods and secruity info up to date.</p>
          </div>
          <div className="number flex items-center pt-[20px] justify-center">
            <a href="/" className="text-[#54B4D3]">
              UPDATE INFORMATION
              <i className="fa-solid fa-chevron-right pl-[15px]"></i>
            </a>
          </div>
        </section>

        <section className="password--reset border p-[30px] bg-[black] rounded-[10px]">
          <div className="text-center">
            <p className="text-[1.3rem] font-semibold text-white">Password</p>
            <i className="fa-solid fa-key text-[3.5rem] text-[#54B4D3] pt-[10px]"></i>
          </div>
          <div className="number flex items-center pt-[20px]">
            <p className="text-white text-center">Make your password stronger or change it if someone else knows it.</p>
          </div>
          <div className="number flex items-center pt-[20px] justify-center">
            <a href="/" className="text-[#54B4D3]">
              CHANGE PASSWORD
              <i className="fa-solid fa-chevron-right pl-[15px]"></i>
            </a>
          </div>
        </section>

        <section className="devices border p-[30px] bg-[black] rounded-[10px]">
          <div className="text-center">
            <p className="text-[1.3rem] font-semibold text-white">Devices</p>
            <i className="fa-solid fa-laptop text-[3.5rem] text-[#54B4D3] pt-[10px]"></i>
          </div>
          <div className="number flex items-center pt-[20px]">
            <p className="text-white text-center">Desable a lost device and review your connected devices.</p>
          </div>
          <div className="number flex items-center pt-[20px] justify-center">
            <a href="/" className="text-[#54B4D3]">
              MANAGE DEVICES
              <i className="fa-solid fa-chevron-right pl-[15px]"></i>
            </a>
          </div>
        </section>

        <section className="organization border p-[30px] bg-[black] rounded-[10px]">
          <div className="text-center">
            <p className="text-[1.3rem] font-semibold text-white">Organizations</p>
            <i className="fa-solid fa-briefcase text-[3.5rem] text-[#54B4D3] pt-[10px]"></i>
          </div>
          <div className="number flex items-center pt-[20px]">
            <p className="text-white text-center">See all the organizations that you're part of.</p>
          </div>
          <div className="number flex items-center pt-[20px] justify-center">
            <a href="/" className="text-[#54B4D3]">
              MANAGE ORGANIZATIONS
              <i className="fa-solid fa-chevron-right pl-[15px]"></i>
            </a>
          </div>
        </section>

        <section className="setting-&-privacy border p-[30px] bg-[black] rounded-[10px]">
          <div className="text-center">
            <p className="text-[1.3rem] font-semibold text-white">Settings & Privacy</p>
            <i className="fa-solid fa-gear text-[3.5rem] text-[#54B4D3] pt-[10px]"></i>
          </div>
          <div className="flex items-center pt-[20px]">
            <p className="text-white text-center">Personalize your account settings and see how your data is used.</p>
          </div>
          <div className="number flex items-center pt-[20px] justify-center">
            <a href="/" className="text-[#54B4D3]">
              VIEW SETTINGS AND PRIVACY
              <i className="fa-solid fa-chevron-right pl-[15px]"></i>
            </a>
          </div>
        </section>
      </div>
    </>
  )
}


export default MyAccount;