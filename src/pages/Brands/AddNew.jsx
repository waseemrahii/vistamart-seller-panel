// import React from "react";
// import Categories from "../Categoreis/Categories";

// const AddNewBrand = () => {
//   return (
//     <>
//       <div className="bg-[#F9F9FB]  px-5 py-5 w-[100%]">
//         <div className="font-bold text-[1.3rem] flex gap-2 items-center">
//           <img
//             src="https://6valley.6amtech.com/public/assets/back-end/img/brand.png"
//             alt=""
//             className="h-8 w-8"
//           />
//           <h1>Brand Setup</h1>
//         </div>
//         <div className="h-[70vh] w-full bg-white grid grid-cols-2 rounded-lg mt-3 px-10 py-8">
//           <div className=" ">
//             <div className=" flex gap-8 border-b-2 border-gray-300 pb-5 items-center ">
//               <h1 className="text-blue-500 text-[1rem] font-semibold">
//                 English(EN)
//               </h1>
//               <h1 className="text-[1rem] font-semibold">Arabic(SA)</h1>
//               <h1 className="text-[1rem] font-semibold">Bangla(BD)</h1>
//               <h1 className="text-[1rem] font-semibold">Hindi(IN)</h1>
//             </div>
//             <form action="/" className="flex flex-col gap-5">
//               <div className="flex flex-col gap-3 pt-5">
//                 <label htmlFor="category-name">Category Name* (EN)</label>
//                 <input
//                   type="text"
//                   id="category-name"
//                   placeholder="Category Name*"
//                   className="px-5 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
//                 />
//               </div>
//               <div className="flex flex-col gap-3  ">
//                 <label htmlFor="priority">Priority</label>
//                 <select
//                   name="priority"
//                   id="priority"
//                   className="px-5 py-3 border pe-5 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
//                 >
//                   <option value="" disabled selected>
//                     Set Priority
//                   </option>
//                   <option value="1">1</option>
//                   <option value="2">2</option>
//                   <option value="3">3</option>
//                   <option value="4">4</option>
//                   <option value="5">5</option>
//                   <option value="6">6</option>
//                   <option value="7">7</option>
//                   <option value="8">8</option>
//                   <option value="9">9</option>
//                   <option value="10">10</option>
//                 </select>
//                 <div className="flex flex-col gap-3 mt-3">
//                   <label htmlFor="">
//                     Category Logo *{" "}
//                     <span className="text-[#03B0C0]">
//                       Ratio 1:1 (500 x 500 px)
//                     </span>
//                   </label>
//                   <div className="border rounded-md border-blue-300">
//                     <input
//                       type="file"
//                       id="image-upload"
//                       className="px-5 py-2 border   outline-none border-e border-blue-300"
//                     />
//                     <button className=" px-2 py-3  ">Browser</button>
//                   </div>
//                 </div>
//               </div>
//             </form>
//           </div>
//           <div className="flex flex-col gap-5 ">
//             <div className="flex justify-center items-center p-16 ">
//               <img
//                 src="https://6valley.6amtech.com/public/assets/back-end/img/image-place-holder.png"
//                 alt=""
//                 className="h-48 w-48 border rounded-sm border-gray-900"
//               />
//             </div>
//             <div className="flex justify-end items-end gap-3 ">
//               <button className="bg-[#EDEDED] rounded-md px-4 py-1 border border-gray-300">
//                 Rest{" "}
//               </button>
//               <button className="rounded-md px-4 bg-blue-500 text-white py-1 border border-gray-300">
//                 Submit
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddNewBrand;





import React, { useState } from "react";
// import Categories from "../Categories/Categories";

const AddNewBrand = () => {
  // State to keep track of the selected language
  const [selectedLanguage, setSelectedLanguage] = useState("EN");

  // Function to handle language change
  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  // Function to get the language label
  const getLanguageLabel = () => {
    switch (selectedLanguage) {
      case "EN":
        return "English(EN)";
      case "SA":
        return "Arabic(SA)";
      case "BD":
        return "Bangla(BD)";
      case "IN":
        return "Hindi(IN)";
      default:
        return "Language";
    }
  };

  return (
    <>
      <div className="bg-[#F9F9FB] px-5 py-5 w-[100%] p-13">
        <div className="font-bold text-[1.3rem] flex gap-2 items-center">
          <img
            src="https://6valley.6amtech.com/public/assets/back-end/img/brand.png"
            alt=""
            className="h-8 w-8"
          />
          <h1>Brand Setup</h1>
        </div>
        <div className="h-[70vh] w-full bg-white grid grid-cols-2 rounded-lg mt-3 px-10 py-8">
          <div>
            <div className="flex gap-8 border-b-2 border-gray-300 pb-5 items-center">
              <button
                className={`text-[1rem] font-semibold ${selectedLanguage === "EN" ? "text-green-500" : ""}`}
                onClick={() => handleLanguageChange("EN")}
              >
                English(EN)
              </button>
              <button
                className={`text-[1rem] font-semibold ${selectedLanguage === "SA" ? "text-green-500" : ""}`}
                onClick={() => handleLanguageChange("SA")}
              >
                Arabic(SA)
              </button>
              <button
                className={`text-[1rem] font-semibold ${selectedLanguage === "BD" ? "text-green-500" : ""}`}
                onClick={() => handleLanguageChange("BD")}
              >
                Bangla(BD)
              </button>
              <button
                className={`text-[1rem] font-semibold ${selectedLanguage === "IN" ? "text-green-500" : ""}`}
                onClick={() => handleLanguageChange("IN")}
              >
                Hindi(IN)
              </button>
            </div>
            <form action="/" className="flex flex-col gap-5">
              <div className="flex flex-col gap-3 pt-5">
                <label htmlFor="category-name">
                  Category Name* ({getLanguageLabel()})
                </label>
                <input
                  type="text"
                  id="category-name"
                  placeholder={`Category Name* (${getLanguageLabel()})`}
                  className="px-5 py-2 border border-green-200 rounded-md focus:outline-none focus:border-green-500"
                />
              </div>
              <div className="flex flex-col gap-3">
                <label htmlFor="priority">Priority</label>
                <select
                  name="priority"
                  id="priority"
                  className="px-5 py-3 border border-green-200 rounded-md focus:outline-none focus:border-green-500"
                >
                  <option value="" disabled selected>
                    Set Priority
                  </option>
                  {[...Array(10)].map((_, index) => (
                    <option key={index + 1} value={index + 1}>
                      {index + 1}
                    </option>
                  ))}
                </select>
                <div className="flex flex-col gap-3 mt-3">
                  <label htmlFor="image-upload">
                    Category Logo *{" "}
                    <span className="text-[#03B0C0]">
                      Ratio 1:1 (500 x 500 px)
                    </span>
                  </label>
                  <div className="border rounded-md border-green-300">
                    <input
                      type="file"
                      id="image-upload"
                      className="px-5 py-2 border outline-none border-green-300"
                    />
                    <button className="px-2 py-3">Browse</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex justify-center items-center p-16">
              <img
                src="https://6valley.6amtech.com/public/assets/back-end/img/image-place-holder.png"
                alt=""
                className="h-48 w-48 border rounded-sm border-gray-900"
              />
            </div>
            <div className="flex justify-end items-end gap-3">
              <button className="bg-[#EDEDED] rounded-md px-4 py-1 border border-gray-300">
                Reset
              </button>
              <button className="rounded-md px-4 bg-green-500 text-white py-1 border border-gray-300">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewBrand;