

function Notification() {
  return (
    <div className="flex ">
        <div className=" w-28 h-14 text-zinc-600  p-2 m-2 relative flex justify-center items-center rounded border-[1px] border-zinc-600 font-mono">
            TodoCount
            <div className="absolute bg-red-600 rounded-full p-[2px] flex justify-center items-center top-[-10px] left-[90px] text-sm text-white font-semibold">99+</div>

        </div>
        <div className="w-36 h-14 text-zinc-600   m-2 relative flex justify-center items-center rounded font-normal border-[1px] border-zinc-600 font-mono "><p>Subscribe</p></div>
    </div>
  )
}

export default Notification