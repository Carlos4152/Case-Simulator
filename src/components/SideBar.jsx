
const SideBar = () => {

  return (
    <section className="side--bar bg-dark col-sm-2 py-4 px-4">
      <div className="close--section d-flex aling-items-center">
        <i className="fa-solid fa-layer-group pe-4 fs-4 text-info"></i>
        <p className="text-white fw-bold h5">Case Center</p>
      </div>

      <div className="img--photo w-[100%] d-flex justify-content-center pt-3">
        <img
          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
          className="rounded-circle object-fit-cover border border-3 border-info"
          width="120"
          height="120"
        />
      </div>

      <ul className="p-0 py-5">
        <li className="font-semibold pt-[20px] icon">
          <i className="pe-3 fa-solid fa-bars-progress text-white text-[1.2rem] pr-[12px]"></i>
          <a href="#" className="text-decoration-none fw-semibold text-white">
            Case Manangement
          </a>
        </li>
        <li className="pt-4 icon">
          <i className="pe-3 fa-brands fa-sourcetree text-[1.2rem] text-white pr-[12px]"></i>
          <a href="#" className="text-decoration-none fw-semibold text-white">
            Product Resources
          </a>
        </li>
        <li className="pt-4 icon">
          <i className="pe-3 fa-solid fa-database text-white text-[1.2rem] pr-[12px]"></i>
          <a
            href="#"
            className="text-decoration-none fw-semibold text-white"
          >
            Case History
          </a>
        </li>
        <li className="pt-4 icon">
          <i className="pe-3 fa-solid fa-user text-white text-[1.2rem] pr-[12px]"></i>
          <a
            href="#"
            className="text-decoration-none fw-semibold text-white"
          >
            My Account
          </a>
        </li>
        <li className="pt-4 icon">
          <i className="pe-3 fa-solid fa-gear text-white text-[1.2rem] pr-[12px]"></i>
          <a
            href="#"
            className="text-decoration-none fw-semibold text-white"
          >
            Report Issue
          </a>
        </li>
        <li className="pt-4 icon">
          <i className="pe-3 fa-solid fa-inbox text-white"></i>
          <a
            href="#"
            className="text-decoration-none fw-semibold text-white"
          >
            Follow up Email
          </a>
        </li>
      </ul>

      <div className="sign--out">
        <a href="#" className="text-decoration-none fw-semibold text-white">
          <i className="fa-solid fa-arrow-right-from-bracket pe-3"></i>
          Sign out
        </a>
      </div>
    </section>
  )
}

export default SideBar;