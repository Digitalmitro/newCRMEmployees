import React from 'react'

function Sales() {
  return (
    <div className="p-4">
      <div className="flex justify-between px-4 border-b-2 border-gray-300 p-4">
        <div>
          <p className="text-[18px] font-medium">Sale</p>
        </div>
        <div className=" ">
          <button className=" mx-2 border border-orange-500 text-[12px] py-0.5 text-orange-500 px-6 rounded cursor-pointer">
            Edit
          </button>
          <button className="border  border-orange-500 text-[12px] py-0.5 text-orange-500 px-2 rounded cursor-pointer">
            Add Comments
          </button>
        </div>
      </div>


      <div className="pt-10 px-2 ">
        <form className="w-full">
          <div className="grid grid-cols-2 ">
            <div className="space-x-8 mb-4">
              <label htmlFor="text" className="text-[14px] font-medium">
                Created Date
              </label>
              <input
                type="text"
                className="border border-[#A6A6A6] outline-none px-2 rounded "
              />
            </div>
            <div className="space-x-19 mb-4">
              <label htmlFor="text" className="text-[14px] font-medium">
                Name
              </label>
              <input
                type="text"
                className="border border-[#A6A6A6] outline-none px-2 rounded "
              />
            </div>
            <div className="space-x-20 mb-4">
              <label htmlFor="text" className="text-[14px] font-medium">
                Email
              </label>
              <input
                type="email"
                className="border border-[#A6A6A6] outline-none px-2 rounded "
              />
            </div>
            <div className="space-x-17 mb-4">
              <label htmlFor="text" className="text-[14px] font-medium">
                Mobile
              </label>
              <input
                type="number"
                className="border border-[#A6A6A6] outline-none px-2 rounded "
              />
            </div>
            <div className="space-x-6 mb-4">
              <label htmlFor="text" className="text-[14px] font-medium">
                Domain Name
              </label>
              <input
                type="text"
                className="border border-[#A6A6A6] outline-none px-2 rounded "
              />
            </div>
            <div className="space-x-16 mb-4">
              <label htmlFor="text" className="text-[14px] font-medium">
                Address
              </label>
              <input
                type="text"
                className="border border-[#A6A6A6] outline-none px-2 rounded "
              />
            </div>
            <div className="space-x-16 mb-4">
              <label htmlFor="text" className="text-[14px] font-medium">
                Country
              </label>
              <input
                type="email"
                className="border border-[#A6A6A6] outline-none px-2 rounded "
              />
            </div>
            <div className="space-x-7 mb-4">
              <label htmlFor="text" className="text-[14px] font-medium">
                Callback Date
              </label>
              <input
                type="number"
                className="border border-[#A6A6A6] outline-none px-2 rounded "
              />
            </div>
            <div className="space-x-18 mb-4">
              <label htmlFor="text" className="text-[14px] font-medium">
                Budget
              </label>
              <input
                type="text"
                className="border border-[#A6A6A6] outline-none px-2 rounded "
              />
            </div>
            <div className="space-x-12 mb-4">
              <label htmlFor="text" className="text-[14px] font-medium">
                Created By
              </label>
              <input
                type="text"
                className="border border-[#A6A6A6] outline-none px-2 rounded "
              />
            </div>
            <div className="mb-4 flex space-x-14 ">
              <label htmlFor="comment" className="text-[14px] font-medium mb-1">
                Comment
              </label>
              <textarea
                id="comment"
                rows={3}
                className="border border-[#A6A6A6] outline-none px-2 py-1 rounded w-[44%]"
              />
            </div>
          </div>
        </form>
        <div className="flex justify-center pt-8">
        <button className="border  border-orange-500 text-[12px] py-0.5 text-orange-500 px-4 rounded cursor-pointer">Submit</button>
        </div>
        
      </div>
    </div>
  )
}

export default Sales