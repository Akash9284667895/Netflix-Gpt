import React, { useEffect, useRef } from "react";
import lang from "../utilis/languageConstant";
import { useSelector } from "react-redux";
import openai from "../utilis/openai";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const langKey = useSelector((store) => store.config.lang);

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);

    const gptQuery =
      "Act as a movie Recommendation system and support some movies for the query :" +
      searchText.current.value +
      ". only give me names of 5 movies ,comes seperated like example result given ahead, example result : Gadar, sholay,don,golmaal,koi mil gya";

    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    console.log(gptResult.choices);
  };

useEffect(()=>{
handleGptSearchClick();
},[])

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 mx-4 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
