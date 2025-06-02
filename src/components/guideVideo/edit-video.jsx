import React, { useState } from "react";
import { Button } from "../../base-component/ui/button/button";

export const EditGuideVideo = () => {
  const [videoType, setVideoType] = useState("file");
  const [videoFile, setVideoFile] = useState(null);
  const [videoLink, setVideoLink] = useState("");

  const handleFileChange = (e) => {
    setVideoFile(e.target.files[0]);
  };

  const handleLinkChange = (e) => {
    setVideoLink(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (videoType === "file") {
      console.log("File to upload:", videoFile);
    } else {
      console.log("Video link:", videoLink);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-[621px] mx-auto p-[42px] bg-white rounded-[14px] shadow-md mb-10"
    >
      <h2 className="text-2xl font-medium mb-4 text-center">
        Upload Guide Video
      </h2>

      <div className="mb-6 flex items-center gap-x-[55px]">
        <label className="text-sm font-medium mb-2">Type:</label>
        <div className="flex items-center space-x-[55px]">
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="videoType"
              value="file"
              checked={videoType === "file"}
              onChange={() => setVideoType("file")}
              className="accent-teal-700"
            />
            <span>Upload video file</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="videoType"
              value="link"
              checked={videoType === "link"}
              onChange={() => setVideoType("link")}
              className="accent-teal-700"
            />
            <span>Insert video link</span>
          </label>
        </div>
      </div>

      {videoType === "file" ? (
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2">Upload video</label>
          <div className="flex flex-col gap-y-3">
            <input
              type="file"
              accept="video/*"
              onChange={handleFileChange}
              className="border border-gray-300 p-2 rounded flex-1"
            />
            {videoFile && (
              <img
                src="https://via.placeholder.com/50"
                alt="Video thumbnail"
                className="w-12 h-12 object-cover rounded"
              />
            )}
          </div>
        </div>
      ) : (
        <div className="mb-6">
          <label className="block text-sm font-medium mb-3">Video link</label>
          <input
            type="url"
            value={videoLink}
            onChange={handleLinkChange}
            placeholder="Insert video link"
            className="border border-gray-300 p-2 rounded w-full bg-[#fbfbfb]"
          />
        </div>
      )}

      <div className="flex items-center justify-center">
        <Button
          type="submit"
          text="Save And Publish"
          className="mt-[203px] w-[309px]"
        />
      </div>
    </form>
  );
};
