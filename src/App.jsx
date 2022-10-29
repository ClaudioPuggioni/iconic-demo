import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Appliance from "./components/Appliance";
import OperatingMenu from "./components/OperatingMenu";

const appliances = [
  ["Blender", "assets/appliances/blender.png"],
  ["Cooker", "assets/appliances/cooker.png"],
  ["Fan", "assets/appliances/fan.png"],
  ["Laptop", "assets/appliances/laptop.png"],
  ["Microwave", "assets/appliances/microwave.png"],
  ["Oven", "assets/appliances/oven.png"],
  ["Printer", "assets/appliances/printer.png"],
  ["Radio", "assets/appliances/radio.png"],
  ["Refrigerator", "assets/appliances/refrigerator.png"],
  ["Router", "assets/appliances/router.png"],
  ["Television", "assets/appliances/television.png"],
  ["Washing Machine", "assets/appliances/washing-machine.png"],
];

export default function Sample() {
  const [selected, setSelected] = useState(null);
  const [open, setOpen] = useState(false);

  const [hour, setHour] = useState(null);
  const [minute, setMinute] = useState(null);
  const [running, setRunning] = useState(null);

  const handleClick = (idx) => {
    setSelected(() => idx);
    setOpen(() => !open);
  };

  const handleClose = (idx) => {
    setOpen(() => false);
  };

  const handleHourClick = (idx) => {
    if (hour === idx) {
      setHour(() => null);
      if (minute === null) setRunning(() => null);
      return;
    }
    setHour(() => idx);
  };
  const handleMinuteClick = (idx) => {
    if (minute === idx) {
      setMinute(() => null);
      if (hour === null) setRunning(() => null);
      return;
    }
    setMinute(() => idx);
  };
  const handleRunClick = (idx) => {
    if (running === idx) {
      setRunning(() => null);
      return;
    }
    setRunning(() => idx);
  };

  useEffect(() => {
    open ? console.log("Open!") : console.log("Closed!");
  }, [open]);

  return (
    <div className="container">
      <div className="mobile relative">
        <div className="header h-24 pl-4 pr-6 pb-3 shadow-lg flex items-end justify-between z-10">
          <img className="w-24" src="assets/logo.png" alt="Iconic RV Logo" />
          <button className="flex text-[#159fd7] font-['Saira'] font-semibold items-center pb-1 text-[21px]">
            <img className="exit-arrow w-5" src="assets/left-arrow.svg" alt="Exit Arrow" />
            &nbsp;&nbsp;Exit
          </button>
        </div>
        <div className="body flex flex-col w-full items-center">
          <div className="divider relative mt-4 h-2 w-[90%] bg-[#d9d9d9] rounded-lg">
            <div className="stage-pointer absolute h-2 w-[105px] bg-[#159fd7] rounded-lg"></div>
          </div>

          <div className="body-header-text pt-3 pb-[5px] text-black z-10 bg-[#f8f8f8] ">
            <div className="text-[22px] font-semibold font-[Jost] text-center tracking-[-0.5px]">Select your appliances</div>
            <div className="text-[16px] mt-[-3px] px-[30px] font-medium font-[Jost] text-center tracking-[-0.5px] leading-[20px]">
              Select the appliances you are most likely to use on a daily basis.
            </div>
          </div>

          <div
            className="body-appliances relative h-[614px] mt-[-5px] flex w-full flex-wrap justify-center rounded"
            style={{ overflowY: open ? "hidden" : "auto" }}
          >
            {appliances.map(([text, src], idx) => (
              <Appliance key={`${text} ${idx}`} text={text} src={src} idx={idx} handleClick={handleClick} />
            ))}
          </div>
        </div>
        <OperatingMenu
          handleClose={handleClose}
          open={open}
          handleHourClick={handleHourClick}
          handleMinuteClick={handleMinuteClick}
          handleRunClick={handleRunClick}
          hour={hour}
          minute={minute}
          running={running}
          currentItem={selected ? appliances[selected][0] : null}
        />
        <div className="footer pt-[10px] pb-[25px] bg-[#f8f8f8] flex justify-center z-50">
          <button className="h-16 w-11/12 bg-[#d2d2d2] font-[Jost] text-[#f8f8f8] text-[28px] font-medium rounded">Continue</button>
        </div>
      </div>
    </div>
  );
}
