import { useRef, useState } from "react";
import { Button } from "../../base-component/ui/button/button";
import pdfImage from "../../assets/pngs/pdf-img.png";

export const EditPolicyDocuments = () => {
  const fileInputRef = useRef(null); // ✅ Just null for JS
  const [fileName, setFileName] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  const triggerFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="max-w-[70%] mx-auto mt-[90px] px-[43px] py-[38px] md:border md:border-[#CFD6E9] bg-white rounded-[14px] w-full mb-10">
      <div className="flex flex-col">
        <span className="text-base font-normal text-black mb-2">
          Upload PDF
        </span>

        <div className="flex items-center border border-[#CFD6E9] rounded-md overflow-hidden w-full">
          <button
            type="button"
            className="px-4 py-2 bg-gray-100 border-r border-[#CFD6E9] text-gray-700 text-sm"
            onClick={triggerFileSelect}
          >
            Choose file
          </button>
          <span className="px-4 py-2 text-sm text-black truncate">
            {fileName || "No file selected"}
          </span>
          <input
            type="file"
            accept="application/pdf"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
          />
        </div>

        <img src={pdfImage} alt="pdf" className="h-10 w-10 mt-3" />
      </div>

      <div className="flex items-center justify-center">
        <Button text="Save Changes" className="mt-[500px] w-[309px]" />
      </div>
    </div>
  );
};
