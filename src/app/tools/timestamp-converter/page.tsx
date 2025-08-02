"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import Header from "@/components/Header";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { CheckCheck, Copy } from "lucide-react";

dayjs.extend(utc);
dayjs.extend(timezone);

export default function TimestampConverter() {
  const [unix, setUnix] = useState("");
  const [readable, setReadable] = useState("");
  const [readableDate, setReadableDate] = useState<Date | null>(null);
  const [convertedUnix, setConvertedUnix] = useState("");
  const [timezoneValue, setTimezoneValue] = useState("UTC");
  const [copiedField, setCopiedField] = useState<"readable" | "unix" | null>(
    null
  );

  // Auto-detect user's timezone
  useEffect(() => {
    // Recalculate readable from UNIX timestamp
    const num = parseInt(unix);
    if (!isNaN(num)) {
      const converted = dayjs
        .unix(num)
        .tz(timezoneValue)
        .format("YYYY-MM-DD HH:mm:ss");
      setReadable(converted);
    }

    // Recalculate UNIX timestamp from readable date
    if (readableDate) {
      const ts = dayjs(readableDate).tz(timezoneValue).unix();
      setConvertedUnix(ts.toString());
    }
  }, [timezoneValue]); // Runs every time timezone changes

  const handleUnixChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const ts = e.target.value;
    setUnix(ts);

    const num = parseInt(ts);
    if (!isNaN(num)) {
      const converted = dayjs
        .unix(num)
        .tz(timezoneValue)
        .format("YYYY-MM-DD HH:mm:ss");
      setReadable(converted);
    } else {
      setReadable("");
    }
  };

  const handleDateChange = (date: Date | null) => {
    setReadableDate(date);
    if (date) {
      const ts = dayjs(date).tz(timezoneValue).unix();
      setConvertedUnix(ts.toString());
    } else {
      setConvertedUnix("");
    }
  };

  const handleReset = () => {
    setUnix("");
    setReadable("");
    setReadableDate(null);
    setConvertedUnix("");
  };

  const handleCopy = (text: string, field: "readable" | "unix") => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000); // Reset after 2 seconds
  };

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-4 py-10 bg-gray-900">
        <h1 className="text-3xl font-bold text-white mb-6">
          Timestamp Converter
        </h1>
        <p className="text-gray-400">
          Convert between UNIX timestamps and human-readable date formats.
        </p>
        <div className="max-w-4xl mx-auto mt-10 bg-white p-6 rounded-xl shadow-md text-[#0f1628]">
          <div className="mb-4">
            <label className="font-medium mr-2">Timezone:</label>
            <select
              value={timezoneValue}
              onChange={(e) => setTimezoneValue(e.target.value)}
              className="border rounded px-3 py-2"
            >
              <option value="Asia/Kolkata">Asia/Kolkata (IST)</option>
              <option value="UTC">UTC</option>
              <option value="America/New_York">America/New_York (EST)</option>
              <option value="Europe/London">Europe/London (GMT)</option>
              <option value="Asia/Tokyo">Asia/Tokyo (JST)</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="font-medium block mb-1">UNIX → Readable:</label>
            <input
              type="text"
              value={unix}
              onChange={handleUnixChange}
              placeholder="Enter UNIX timestamp"
              className="w-full border rounded px-3 py-2"
            />
            {readable && (
              <div className="bg-gray-100 mt-3 p-3 rounded flex justify-between items-center">
                <span>
                  <strong>Readable:</strong> {readable}
                </span>
                <button
                  onClick={() => handleCopy(readable, "readable")}
                  className="ml-4"
                >
                  {/* <Copy size={16} /> */}
                  {copiedField === "readable" ? (
                    <CheckCheck size={16} />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>
            )}
          </div>

          <div className="mb-6">
            <label className="font-medium block mb-1">
              Readable → UNIX (via Date Picker):
            </label>
            <div className="w-full border rounded ">
              <DatePicker
                selected={readableDate}
                onChange={handleDateChange}
                showTimeSelect
                timeFormat="HH:mm"
                timeIntervals={1}
                timeCaption="Time"
                dateFormat="yyyy-MM-dd HH:mm:ss"
                placeholderText="Select date and time"
                customInput={
                  <input className="px-3 py-2 w-full outline-none focus:border-none focus:ring-0" />
                }
              />
            </div>
            {convertedUnix && (
              <div className="bg-gray-100 mt-3 p-3 rounded flex justify-between items-center">
                <span>
                  <strong>UNIX Timestamp:</strong> {convertedUnix}
                </span>
                <button
                  onClick={() => handleCopy(convertedUnix, "unix")}
                  className="ml-4"
                >
                  {copiedField === "unix" ? (
                    <CheckCheck size={16} />
                  ) : (
                    <Copy size={16} />
                  )}
                </button>
              </div>
            )}
          </div>

          <button
            onClick={handleReset}
            className="bg-gray-300 text-[#0f1628] px-4 py-2 rounded hover:bg-gray-400"
          >
            Reset All
          </button>
        </div>
      </main>
    </>
  );
}
