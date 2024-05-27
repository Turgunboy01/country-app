import React, { useContext } from "react";
import { numberWithCommas } from "../pages/Countries";
import { useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeProvider";
import { motion } from "framer-motion";
import notFound from "../../public/page.png";

const CountryBottomComponents = ({ filteredCountries, loading }) => {
  const navigate = useNavigate();
  const { dark } = useContext(ThemeContext);

  if (loading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div class="spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-10">
      {filteredCountries.length ? (
        filteredCountries.map((item) => (
          <div
            key={item.cca3}
            className={`${
              dark ? "bg-[#2b3743]" : "bg-white"
            }  cursor-pointer shadow-lg hover:scale-105 transition duration-500 rounded-lg overflow-hidden`}
            onClick={() => navigate(`/country/${item.name.common}`)}
          >
            <motion.img
              whileInView={{ scale: [0.9, 1], opacity: [0.3, 1] }}
              transition={{ duration: 0.7 }}
              src={item.flags.png}
              className="w-full  h-[200px]"
              alt=""
            />
            <div className={`p-5 ${dark ? "text-[#fff]" : "text-[#000]"}`}>
              <motion.h2
                whileInView={{ translateX: ["20px", 0], opacity: [0, 1] }}
                transition={{ duration: 0.7 }}
                className="font-bold mb-3"
              >
                {item.name.common}
              </motion.h2>
              <motion.p
                whileInView={{ translateX: ["10px", 0], opacity: [0, 1] }}
                transition={{ duration: 0.7 }}
              >
                <span className="font-semibold">Population:</span>{" "}
                {numberWithCommas(item.population)}
              </motion.p>
              <motion.p
                whileInView={{ translateX: ["10px", 0], opacity: [0, 1] }}
                transition={{ duration: 0.7 }}
              >
                <span className="font-semibold">Region:</span> {item.region}
              </motion.p>{" "}
              <motion.p
                whileInView={{ translateX: ["10px", 0], opacity: [0, 1] }}
                transition={{ duration: 0.7 }}
              >
                <span className="font-semibold">Capital:</span> {item.capital}
              </motion.p>
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-full text-center flex items-center justify-center text-lg">
          <img src={notFound} alt="" />
        </div>
      )}
    </div>
  );
};

export default CountryBottomComponents;
