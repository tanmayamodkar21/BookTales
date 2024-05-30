import React from "react";
import { services_data } from "../data";
import collect_data from "../assets/collect_data.svg";
import done_checking from "../assets/done_checking.svg";
import show_data from "../assets/show_data.svg";

const OurServices = () => {
  return (
    <div className="mx-auto bg-orange-800 py-20 md:py-40" id="services">
      <section>
        <h1 className="text-center text-white font-bold text-3xl md:text-5xl py-4 underline underline-offset-8 pt-2">
          {services_data.title}
        </h1>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-28 px-4 sm:px-10 pt-5">
        <div className="flex flex-col items-center bg-white rounded-md md:col-span-1 p-8">
          <img
            src={collect_data}
            alt=""
            className="services-cols-img h-40 mb-6"
          />
          <p className="text-lg font-normal text-center text-black tracking-wide">
            <b>Monthly Cost Analysis</b>
            <br />
            Gain insights into hotel pricing trends with our detailed monthly
            cost analysis. Our platform provides comprehensive data on hotel
            rates across different months, helping you understand seasonal
            fluctuations and identify the best times to book. Make informed
            decisions and save money on your hotel stays with our expert
            analysis.
          </p>
        </div>
        <div className="flex flex-col items-center bg-white rounded-md md:col-span-1 p-8">
          <img
            src={done_checking}
            alt=""
            className="services-cols-img h-40 mb-6"
          />
          <p className="text-lg font-normal text-center text-black tracking-wide">
            <b>Budget Forecasting</b>
            <br />
            Plan your travel budget effectively with our budget forecasting
            service. We analyze historical data and current trends to predict
            hotel costs for future months. Whether you're planning a vacation or
            a business trip, our forecasting tools help you allocate your budget
            wisely and avoid unexpected expenses.
          </p>
        </div>
        <div className="flex flex-col items-center bg-white rounded-md md:col-span-1 p-8">
          <img src={show_data} alt="" className="services-cols-img h-40 mb-6" />
          <p className="text-lg font-normal text-center text-black tracking-wide">
            <b>Customized Reports</b>
            <br />
            Receive personalized reports tailored to your specific needs. Our
            customized reports offer in-depth analysis of hotel prices for your
            chosen destinations and timeframes. With easy-to-read charts and
            graphs, you can quickly grasp the cost patterns and make strategic
            booking decisions. Optimize your travel plans with our tailored
            insights.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
