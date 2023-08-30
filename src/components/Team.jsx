import TeamsData from "./TeamsData"

const Team = () => {

  const members = TeamsData.map(member =>
  (<article className="p-[15px] rounded-[5px] border hover:bg-[black] hover:text-white cursor-pointer" key={member.id}>
    <span>
      <i className={`fa-solid fa-circle-check ${member.status ? "text-[green]" : "text-[gray]"}  text-[1.3rem]`}></i>
    </span>
    <img src={member.photo} alt="" className="w-[100px] h-[100px] rounded-full object-cover border-[3px] border-[#54B4D3] mx-auto" />
    <p className="font-semibold pt-[8px] text-center">{member.name}</p>
    <div className="button--section pt-[25px] text-center flex justify-center gap-[15px]">
      <i className="fa-brands fa-github text-[1.3rem] cursor-pointer text-[gray] hover:text-[#54B4D3]"></i>
      <i className="fa-brands fa-facebook text-[1.3rem] cursor-pointer text-[gray] hover:text-[#54B4D3]"></i>
      <i className="fa-brands fa-linkedin text-[1.3rem] cursor-pointer text-[gray] hover:text-[#54B4D3]"></i>
    </div>
  </article>)
  )

  return (
    <>
      <div className="close--section flex justify-center items-center py-[20px]">
        <i className="pr-[24px] fa-solid fa-people-group text-[2rem] text-[#54B4D3]"></i>
        <p className="pl-[15px] font-bold text-[2rem]">Team Members</p>
      </div>
      <div className="my--account grid md:grid-cols-4 gap-[10px]">
        {members}
      </div>
    </>
  )
}


export default Team;