import React from "react";

export default function OperatingMenu({ handleClose, open, handleHourClick, handleMinuteClick, handleRunClick, hour, minute, running, currentItem }) {
  return (
    <div className="set-operating-hours-menu absolute h-[720px] top-[96px] w-full z-20 backdrop-blur-sm" style={{ display: open ? "flex" : "none" }}>
      <div className="set-operating-hours-menu absolute top-[16px] left-[16px] h-[95.3%] w-[380px] bg-white z-20 rounded shadow-md">
        <div className="menu-header w-full p-3 flex flex-col items-center">
          <button
            className="x-btn h-[45px] w-[44px] pb-0.5 flex justify-center items-center text-black bg-[#ececec] text-[14px] font-semibold rounded-md self-end"
            onClick={handleClose}
          >
            ╳
          </button>
          <div className="mt-4 text-[#292929] text-[21px] font-[Jost] font-semibold">Select usage hours</div>
          <div className="mb-3.5 text-[#292929] text-[13px] font-[Jost] font-semibold text-[12px] leading-none">(if applicable)</div>
          <div className="hours h-full w-full flex flex-wrap justify-center gap-[12px]">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24].map((hours, idx) => (
              <>
                <button
                  className="h-[47px] w-[47px] pb-0.5 flex justify-center items-center text-black bg-[#f5f5f5] text-[17px] font-semibold rounded"
                  onClick={() => {
                    handleHourClick(idx);
                    console.log("hour:", hour);
                    console.log(hour === idx);
                  }}
                  style={{
                    backgroundColor: hour === idx ? "#159fd7" : "#f5f5f5",
                    color: hour === idx ? "#f5f5f5" : "#292929",
                  }}
                >
                  {hours}
                </button>
              </>
            ))}
          </div>
          <div className="mt-[19px] text-[#292929] text-[21px] font-[Jost] font-semibold">Select usage minutes</div>
          <div className="mb-5 text-[#292929] text-[13px] font-[Jost] font-semibold text-[11px] leading-none">(if applicable)</div>
          <div className="hours px-2 h-full w-full flex flex-wrap justify-between items-center">
            {[15, 30, 45].map((minutes, idx) => (
              <>
                <button
                  className="h-[35px] w-[67px] text-[17px] font-[Jost] pb-0.5 flex justify-center items-center text-black bg-[#f5f5f5] text-[17px] font-semibold rounded"
                  onClick={() => handleMinuteClick(idx)}
                  style={{
                    backgroundColor: minute === idx ? "#159fd7" : "#f5f5f5",
                    color: minute === idx ? "#f5f5f5" : "#292929",
                  }}
                >
                  {minutes}
                </button>
              </>
            ))}

            <div
              className="mt-[22px] px-7 text-[#292929] text-[21px] font-[Jost] text-center font-semibold leading-[27px]"
              style={{ color: hour === null && minute === null ? "#949494" : "#292929" }}
            >
              Will you run this while {currentItem} is running?
            </div>
            <div className="mt-[14px] w-full flex justify-between">
              <button
                className="h-[34px] w-[154px] text-base pb-0.5 flex justify-center items-center text-black text-[14px] font-semibold rounded"
                disabled={hour === null && minute === null ? true : false}
                onClick={() => handleRunClick(true)}
                style={{
                  backgroundColor: running === true ? "#159fd7" : "#f5f5f5",
                  color: hour === null && minute === null ? "#949494" : running === true ? "#f5f5f5" : "#292929",
                }}
              >
                Yes
              </button>
              <button
                className="h-[34px] w-[154px] text-base pb-0.5 flex justify-center items-center text-black text-[14px] font-semibold rounded"
                disabled={hour === null && minute === null ? true : false}
                onClick={() => handleRunClick(false)}
                style={{
                  backgroundColor: running === false ? "#159fd7" : "#f5f5f5",
                  color: hour === null && minute === null ? "#949494" : running === false ? "#f5f5f5" : "#292929",
                }}
              >
                No
              </button>
            </div>

            <button className="mt-4 h-[57px] w-full pb-0.5 flex justify-center items-center text-black bg-[#f5f5f5] text-[19px] font-semibold rounded  hover:bg-sky-500 hover:text-slate-100">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
