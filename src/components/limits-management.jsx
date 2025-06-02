import React, { useState } from "react";
import { Button } from "../base-component/ui/button/button";

const SettingsForm = () => {
  const [settings, setSettings] = useState({
    pictureMaxSize: 10,
    videoMaxSize: 500,
    freeStorage: 1,
    premiumStorage: 20,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Settings saved:", settings);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[601px] mx-auto pt-[78px] px-[43px] pb-10 bg-white rounded[14px] shadow-md mb-10"
    >
      <div className="space-y-[42px]">
        <div>
          <label className="block text-sm font-medium mb-2">
            Picture upload max size
          </label>
          <div className="flex items-center">
            <input
              type="number"
              name="pictureMaxSize"
              value={settings.pictureMaxSize}
              onChange={handleChange}
              className="flex-1 border border-gray-300 rounded-md p-2 bg-[#FBFBFB]"
            />
            <span className="ml-3 text-sm text-black">Mbs</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Video upload max size
          </label>
          <div className="flex items-center">
            <input
              type="number"
              name="videoMaxSize"
              value={settings.videoMaxSize}
              onChange={handleChange}
              className="flex-1 border border-gray-300 rounded-md p-2 bg-[#FBFBFB]"
            />
            <span className="ml-3 text-sm text-black">Mbs</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Cloud storage for free users
          </label>
          <div className="flex items-center">
            <input
              type="number"
              name="freeStorage"
              value={settings.freeStorage}
              onChange={handleChange}
              className="flex-1 border border-gray-300 rounded-md p-2 bg-[#FBFBFB]"
            />
            <span className="ml-3 text-sm text-black">Gb</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Cloud storage for premium users
          </label>
          <div className="flex items-center">
            <input
              type="number"
              name="premiumStorage"
              value={settings.premiumStorage}
              onChange={handleChange}
              className="flex-1 border border-gray-300 rounded-md p-2 bg-[#FBFBFB]"
            />
            <span className="ml-3 text-sm text-black">Gb</span>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <Button text="Save Changes" className="mt-[203px] w-[309px]" />
        </div>
      </div>
    </form>
  );
};

export default SettingsForm;
