import React, { useState } from "react";

const Home = () => {
  const [gLink, setGLink] = useState("");

  const handleLink = (e) => {
    e.preventDefault();
    const link = e.target.link.value;
    const subLink = link.split("/")[5];

    const mainLink = `https://drive.google.com/uc?export=view&id=${subLink}`;
    setGLink(mainLink);
  };
  console.log(gLink);
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 h-80 bg-purple-300 flex justify-center items-center flex-col rounded-2xl shadow-xl">
        <h1 className=" mt-5 mb-10 text-2xl uppercase">
          Make your link perfect
        </h1>
        <form className="" action="" onSubmit={handleLink}>
          <input
            name="link"
            type="text"
            placeholder="Type here"
            class="input"
          />

          <button className="btn btn-primary ml-2" type="submit">
            Create Link
          </button>
        </form>

        <textarea
          className="mt-4 p-5 rounded-2xl mb-5"
          name=""
          id=""
          cols="37"
          rows="5"
          value={gLink}
        ></textarea>
      </div>
    </div>
  );
};

export default Home;
