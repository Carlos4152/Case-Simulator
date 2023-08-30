
import { Link } from 'react-router-dom';

const SideBar = ({ onToggle, afterClick }) => {

  const toggleMenu = onToggle == true ? "side--bar--mobile" : "active";
  return (
    <>
      <section className={`bg-[black] text-white py-[40px] pl-[20px] col-span-2 hidden xl:block `}>
        <div className="close--section flex items-center">
          <i className="fa-solid fa-layer-group text-[1.3rem] text-[#54B4D3]"></i>
          <p className="fw-bold pl-[8px] font-bold text-[1.3rem]">Case Center</p>
        </div>

        <div className="img--photo pt-[30px] pl-[30px]">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            className="rounded-full w-[100px] h-[100px] object-cover border-[3px] border-[#54B4D3]"
          />
          <p className='text-white pt-[10px]'>Rodrigo Perez</p>
        </div>

        <ul className="pt-[30px]">
          <li className="icon">
            <i className="pr-[24px] fa-solid fa-bars-progress"></i>
            <Link to="/form" className="font-semibold">
              Case Form
            </Link>
          </li>
          <li className="icon pt-[30px]">
            <i className="pr-[24px] fa-brands fa-sourcetree"></i>
            <Link to="/product" className="font-semibold">
              Product Resources
            </Link>
          </li>
          <li className="icon pt-[30px]">
            <i className="pr-[24px] fa-solid fa-database"></i>
            <Link
              to="/case-history"
              className="font-semibold"
            >
              Case History
            </Link>
          </li>
          <li className="icon pt-[30px]">
            <i className="pr-[24px] fa-solid fa-user"></i>
            <Link
              to="/my-account"
              className="font-semibold"
            >
              My Account
            </Link>
          </li>
          <li className="icon pt-[30px]">
          <i className="pr-[24px] fa-solid fa-people-group"></i>
            <Link
              to="/issue"
              className="font-semibold"
            >
              Team
            </Link>
          </li>
        </ul>

        <div className="sign--out pt-[50px]">
          <a href="#" className="font-semibold">
            <i className="fa-solid fa-arrow-right-from-bracket pr-[20px] text-[red]"></i>
            Sign out
          </a>
        </div>
      </section>
      
      {/* Responsive mobile Side--bar */}
      <section className={`${toggleMenu} bg-[black] text-white py-[30px] pl-[15px] fixed top-0 w-[240px] xl:hidden bottom-0`}>
        <div className="close--section flex items-center">
          <i className="fa-solid fa-layer-group text-[1.3rem] text-[#54B4D3]"></i>
          <p className="fw-bold pl-[8px] font-bold text-[1.3rem]">Case Center</p>
        </div>

        <div className="img--photo pt-[30px] pl-[30px]">
          <img
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
            className="rounded-full w-[100px] h-[100px] object-cover border-[3px] border-[#54B4D3]"
          />
          <p className='text-white pt-[10px]'>Rodrigo Perez</p>
        </div>

        <ul className="pt-[30px]">
          <li className="icon">
            <i className="pr-[24px] fa-solid fa-bars-progress"></i>
            <Link to="/form" className="font-semibold" onClick={afterClick}>
              Case Form
            </Link>
          </li>
          <li className="icon pt-[30px]">
            <i className="pr-[24px] fa-brands fa-sourcetree"></i>
            <Link to="/product" className="font-semibold" onClick={afterClick}>
              Product Resources
            </Link>
          </li>
          <li className="icon pt-[30px]">
            <i className="pr-[24px] fa-solid fa-database"></i>
            <Link
              to="/case-history"
              className="font-semibold" onClick={afterClick}
            >
              Case History
            </Link>
          </li>
          <li className="icon pt-[30px]">
            <i className="pr-[24px] fa-solid fa-user"></i>
            <Link
              to="/my-account"
              className="font-semibold" onClick={afterClick}
            >
              My Account
            </Link>
          </li>
          <li className="icon pt-[30px]">
            <i className="pr-[24px] fa-solid fa-people-group"></i>
            <Link
              to="/issue"
              className="font-semibold" onClick={afterClick}
            >
              Team
            </Link>
          </li>
        </ul>

        <div className="sign--out pt-[50px] ">
          <a href="#" className="font-semibold">
            <i className="fa-solid fa-arrow-right-from-bracket pr-[20px] text-[red]"></i>
            Sign out
          </a>
        </div>
      </section>
    </>
  )
}
export default SideBar;