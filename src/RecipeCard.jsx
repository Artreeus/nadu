import React from "react";


const RecipeCard = ({
  image,
  name,
  instructions,
  ingredients,
  prepTime,
  calories,
  handleCart,
  handleAddToCookingList // Changed prop name
}) => {
  const handleAddToCart = () => {
    const recipe = {
      image,
      name,
      instructions,
      ingredients,
      prepTime,
      calories
    };
    handleCart(recipe);
  };

  const handleWantToCook = () => {
    const recipe = {
      image,
      name,
      instructions,
      ingredients,
      prepTime,
      calories
    };
    handleAddToCookingList(recipe);
  };

  return (
    <div className="card bg-base-100 p-3 md:p-6 card-shadows border border-gray-300 rounded-lg">
      <figure className="h-[200px]">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover rounded-t-lg"
        />
      </figure>
      <div className="space-y-3">
        <h2 className="card-title text-xl font-semibold mt-6">{name}</h2>
        <p className="text-base font-normal text-[#150b2b99]">{instructions}</p>
        <hr />
        <div>
          <h4 className="text-lg font-medium">
            Ingredients: {ingredients.length}
          </h4>
          <ul className="list-disc px-5 py-3 text-lg font-normal text-[#150b2b99] h-24 overflow-y-auto">
            {ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>
        <hr />
        <div className="flex items-center gap-5 text-base font-normal text-[#150b2b99]">
          <p className="flex items-center space-x-1">
            <span>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M256 456c-110.3 0-200-89.7-200-200 0-54.8 21.7-105.9 61.2-144 6.4-6.2 16.6-6 22.7.4 6.2 6.4 6 16.6-.4 22.7-33.1 32-51.3 74.9-51.3 120.9 0 92.5 75.3 167.8 167.8 167.8S423.8 348.5 423.8 256c0-87.1-66.7-159-151.8-167.1v62.6c0 8.9-7.2 16.1-16.1 16.1s-16.1-7.2-16.1-16.1V72.1c0-8.9 7.2-16.1 16.1-16.1 110.3 0 200 89.7 200 200S366.3 456 256 456z"></path>
                <path d="M175.9 161.9l99.5 71.5c13.5 9.7 16.7 28.5 7 42s-28.5 16.7-42 7c-2.8-2-5.2-4.4-7-7l-71.5-99.5c-3.2-4.5-2.2-10.8 2.3-14 3.6-2.6 8.3-2.4 11.7 0z"></path>
              </svg>
            </span>
            <span>{prepTime}</span>
          </p>
          <p className="flex items-center justify-end space-x-1">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <g clip-path="url(#clip0_34_2)">
                  <path
                    d="M12 12C14 9.04 12 5 11 4C11 7.038 9.227 8.741 8 10C6.774 11.26 6 13.24 6 15C6 16.5913 6.63214 18.1174 7.75736 19.2426C8.88258 20.3679 10.4087 21 12 21C13.5913 21 15.1174 20.3679 16.2426 19.2426C17.3679 18.1174 18 16.5913 18 15C18 13.468 16.944 11.06 16 10C14.214 13 13.209 13 12 12Z"
                    stroke="#282828"
                    stroke-opacity="0.8"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_34_2">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </span>
            <span>{calories} Calories</span>
          </p>
        </div>
        <div className="flex justify-center">
          <button onClick={handleWantToCook} className="btn rounded-[30px] mt-3 w-full bg-[#0BE58A]">
            Want to Cook
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;