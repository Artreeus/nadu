import React, { useState } from "react";

const Cooking = ({ cookingList, setCookingList }) => {
  const [currentlyCooking, setCurrentlyCooking] = useState([]);
  const [preparingIndices, setPreparingIndices] = useState([]);

  const handlePreparing = (index) => {
    const recipeToCook = cookingList[index];
    const updatedCookingList = cookingList.filter((_, i) => i !== index);
    setCurrentlyCooking([...currentlyCooking, recipeToCook]);
    setCookingList(updatedCookingList);
  };

  return (
    <div className="cook lg:w-full card-shadows h-full py-5 space-y-4 flex flex-col ">
      <h1 className="px-5 text-center text-2xl font-semibold">
        Want to cook: {cookingList.length}
      </h1>
      <hr />
      <table className="text-center">
        <thead className="px-5">
          <tr className="text-sm md:text-base md:font-medium text-[#878787] my-10">
            <th>Index</th>
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cookingList.map(
            (recipe, index) =>
              !preparingIndices.includes(index) && (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{recipe.name}</td>
                  <td>{recipe.prepTime}</td>
                  <td>{recipe.calories}</td>
                  <td>
                    <button
                      onClick={() => handlePreparing(index)}
                      className="btn rounded-xl bg-[#0BE58A]"
                    >
                      Preparing
                    </button>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
      <h1 className="px-5 text-center text-2xl font-semibold">
        Currently cooking: {currentlyCooking.length}
      </h1>
      <hr />
      <table className="text-center">
        <thead className="px-5">
          <tr className="text-sm md:text-base md:font-medium text-[#878787]">
            <th>Index</th>
            <th>Name</th>
            <th>Time</th>
            <th>Calories</th>
          </tr>
        </thead>
        <tbody>
          {currentlyCooking.map((recipe, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{recipe.name}</td>
              <td>{recipe.prepTime}</td>
              <td>{recipe.calories}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cooking;
