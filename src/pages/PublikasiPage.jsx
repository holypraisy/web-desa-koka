import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import PublikasiCard from "../components/publikasiCard";
import publikasiImage2 from "../assets/publikasiImage2.webp";
import InstallButton from "../components/installButton";

const PublikasiPage = () => {
  const [publikasiData, setPublikasiData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://script.google.com/macros/s/AKfycbwiMjQbNy9gaDqVy61-iA9gyCoxzjRrztUsNJRNECztwExPfOIjAjP8z26sfaKAI3izCg/exec');
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setPublikasiData(Array.isArray(data.publikasi) ? data.publikasi : []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const dotVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  const dotTransition = {
    duration: 1,
    repeat: Infinity,
    repeatType: "loop",
    ease: "easeInOut",
    staggerChildren: 0.3,
  };

  return (
    <section id="publikasi" className="relative bg-light overflow-hidden bg-cover bg-center">
      <div className="fixed top-0 left-0 w-full z-50 bg-light">
        <Navbar />
      </div>

      <div className="pt-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-2 md:gap-16 px-8 md:px-24 md:py-8">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src={publikasiImage2}
            alt="Publikasi Image"
            className="w-3/4 md:w-2/5 object-cover drop-shadow-2xl"
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-center md:text-left text-dark font-bold md:w-3/5"
          >
            <h1 className="text-xl lg:text-4xl font-bold text-primary">Publikasi</h1>
            <p className="text-xs md:text-sm lg:text-lg font-light text-secondary">
              "Jangan lewatkan informasi terbaru dari Kanwil DJPb Sulut. Subscribe ke
              channel-channel YouTube kami untuk tetap update dengan acara dan
              kegiatan kami."
            </p>
          </motion.div>
        </div>

        {loading ? ( 
          <div className="flex justify-center items-center h-44">
            <div className="flex text-primary font-bold text-xl md:text-2xl">
              <span>Loading</span>
              <motion.div
                className="flex"
                initial="hidden"
                animate="visible"
                variants={dotVariants}
                transition={dotTransition}
              >
                <motion.span className="mx-1" variants={dotVariants}>.</motion.span>
                <motion.span className="mx-1" variants={dotVariants}>.</motion.span>
                <motion.span className="mx-1" variants={dotVariants}>.</motion.span>
              </motion.div>
            </div>
          </div>
        ) : (
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col px-8 md:px-16 py-12 gap-10 md:gap-20"
          >
            {publikasiData.length > 0 ? (
              publikasiData.map((item, index) => (
                <PublikasiCard
                  key={index}
                  titleSocmed={item.titleSocmed}
                  titleAccount={item.titleAccount}
                  socmedVideo={item.socmedVideo}
                  socmedLink={item.socmedLink}
                  buttonTitle={item.buttonTitle}
                />
              ))
            ) : (
              <p className="text-center">No Data Available</p>
            )}
          </motion.div>
        )}
        <InstallButton/>    
        <Footer />
      </div>
    </section>
  );
};

export default PublikasiPage;
