import React from "react";
import { motion } from "framer-motion";
import kppnManado from "../../assets/kppnManado.webp";
import kppnBitung from "../../assets/kppnBitung.webp";
import kppnKotamobagu from "../../assets/kppnKotamobagu.webp";
import kppnTahuna from "../../assets/kppnTahuna.webp";

const ServicesData = [
  {
    id: 1,
    title: "KPPN Manado",
    link: "#",
    image: kppnManado,
    delay: 0.2,
  },
  {
    id: 2,
    title: "KPPN Bitung",
    link: "#",
    image: kppnBitung,
    delay: 0.3,
  },
  {
    id: 3,
    title: "KPPN Kotamobagu",
    link: "#",
    image: kppnKotamobagu,
    delay: 0.4,
  },
  {
    id: 4,
    title: "KPPN Tahuna",
    link: "#",
    image: kppnTahuna,
    delay: 0.5,
  },
];

const SlideLeft = (delay) => {
  return {
    initial: {
      opacity: 0,
      x: 50,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const KPPNSULUT = () => {
  return (
    <section className="bg-secondary">
      <div className="container pb-14 pt-16">
        <h1 className="text-2xl lg:text-4xl text-dark font-bold text-center border-b-2 border-primary border-opacity-25  ">
          BERITA
        </h1>
        <p className="text-base lg:text-2xl text-dark py-2 text-center ">
        Menyajikan informasi terbaru tentang peristiwa, berita terkini, dan artikel-artikel jurnalistik dari Desa Koka.
        </p>

        <div className="cursor-pointer grid grid-cols-1 lg:grid-cols-2 gap-8"> 
          {ServicesData.map((service) => (
            <motion.a
              key={service.id}
              variants={SlideLeft(service.delay)}
              initial="initial"
              whileInView={"animate"}
              viewport={{ once: true }}
              className="bg-[#f4f4f4] rounded-2xl flex flex-col gap-4 items-center justify-center p-4 py-7 hover:bg-white hover:scale-110 duration-300 hover:shadow-2xl"
              href="/kppn"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 mb-4 object-cover rounded-lg" />
              <h1 className="text-sm font-semibold text-center px-3">
                {service.title}
              </h1>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KPPNSULUT;
