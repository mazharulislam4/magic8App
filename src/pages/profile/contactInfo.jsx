const inputBox = `bg-[#f8f8f8f8] rounded-2xl sm:w-[374px] w-[100%]`;
const input = `py-[20px] px-[10px] w-[100%] rounded-[10px] medium-font text-dark  focus:outline-none focus:shadow-md transition-[shadow] duration-300  `;
const label = `medium-font text-dark pb-[10px] block w-[100%]`;

export default function ContactInfo({fullName = "Example" , email = "example@gmail.com"}) {

  return (
    <form action="#" className="rounded-[8px]  md:mx-w-[629px] w-[100%] ">
      <div>
        <h3 className="large-font text-secondary font-bold my-[25px]">
          Update Password
        </h3>
        <div className="flex md:flex-row flex-col gap-4">
          <div className={inputBox}>
            <label htmlFor="fullName" className={label}>
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              className={input}
            />
          </div>
          <div className={inputBox}>
            <label htmlFor="email" className={label}>
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              className={input}
            />
          </div>
        </div>
      </div>
    </form>
  );
}
