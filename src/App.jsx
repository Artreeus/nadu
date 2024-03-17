import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import RecipeCard from "./RecipeCard";
import Footer from "./Footer";
import Cooking from "./Cooking";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";

  

  

function App() {
  const [recipes, setRecipes] = useState([]);
  const [cart, setCart] = useState([]);
  const [wantToCookCount, setWantToCookCount] = useState(0);
  const [cookingList, setCookingList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/fake.json");
        const data = await response.json();
        console.log("Fetched data:", data);
        setRecipes(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  

  useEffect(() => {
    console.log("Cart updated:", cart);
    setWantToCookCount(cart.length);
  }, [cart]);

  const handleAddToCart = (recipe) => {
    setCart([...cart, recipe]);
  };

  const handleAddToCookingList = (recipe) => {
    if (!cookingList.some((r) => r.name === recipe.name)) {
      setCookingList([...cookingList, recipe]);
      setWantToCookCount(wantToCookCount + 1);
    } else {
      toast.error("This recipe is already in the cooking list!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
      });
      
    }
  };

  return (
    <>
      <Navbar />
      <div className="container md:mx-auto text-center space-y-6 my-8 r-text">
        <h1 className="font-semibold text-4xl">
          Our <span className="text-primary-color">Recipes</span>
        </h1>
        <p className="text-base font-normal max-w-[823px] mx-auto text-[#150b2b99]">
          Indulge in a culinary adventure with our collection of nutritious and
          delicious recipes crafted to nourish your body and delight your taste
          buds.
        </p>
      </div>

      <div className="main-container grid grid-cols-12 container mx-auto gap-8">
        <div className="left-container col-span-7">
          <div className="card container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 my-9">
            {recipes.map((recipe) => (
              <RecipeCard
                key={recipe.id}
                image={recipe.image}
                name={recipe.name}
                instructions={recipe.instructions.join("\n")}
                ingredients={recipe.ingredients}
                prepTime={recipe.prepTimeMinutes + " minutes"}
                calories={recipe.caloriesPerServing}
                handleCart={handleAddToCart}
                handleAddToCookingList={handleAddToCookingList}
              />
            ))}
          </div>
        </div>
        <div className="right-container col-span-5">
        <Cooking cookingList={cookingList} setCookingList={setCookingList} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
