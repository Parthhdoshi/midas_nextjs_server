"use client";
import React, { FC, useEffect, useState } from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";
import Hero from "./components/Route/Hero";
import Courses from "./components/Route/Courses";
import Reviews from "./components/Route/Reviews";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer";
import Maintenance from "./components/Maintance/Maintance";
import { useGetMaintenanceStatusQuery } from "@/redux/features/maintenance/maintenance";

interface Props {}

const Page: FC<Props> = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login");

  const { data } = useGetMaintenanceStatusQuery(undefined,{
    refetchOnMountOrArgChange: true,
  })
  const status = data && data.MaintenanceStatus[0].status

  return (
    <div>
      {status ? (
        <Maintenance />
      ) : (
        <>
          <Heading
            title="ELearning"
            description="ELearning is a platform for students to learn and get help from teachers"
            keywords="Prograaming,MERN,Redux,Machine Learning"
          />
          <Header
            open={open}
            setOpen={setOpen}
            activeItem={activeItem}
            setRoute={setRoute}
            route={route}
          />
          <Hero />
          <Courses />
          <Reviews />
          <FAQ />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Page;
