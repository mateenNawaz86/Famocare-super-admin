import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useOutsideClick } from "../../../types/hooks";
import { ThreeDotsIcon } from "../../../assets/svgs/components/three-dots-icon";

export default function MoreField({
  options = [],
  handleChange = () => {},
  containerClassName = "",
  dropdownClassName = "",
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);
  const closeDropdown = () => setIsOpen(false);
  const ref = useOutsideClick(closeDropdown);

  const onSelect = (value) => {
    handleChange(value);
    setIsOpen(false);
  };

  return (
    <div className={`relative ${containerClassName}`} ref={ref}>
      <div
        onClick={toggleDropdown}
        className="cursor-pointer flex items-center gap-x-[14px]"
      >
        <span className="text-base font-medium">More</span>
        <ThreeDotsIcon />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`absolute right-2 w-[120px] bg-white rounded-md shadow-lg z-50 ${dropdownClassName}`}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            {options?.map(({ label, value }) => (
              <div
                key={value}
                onClick={() => onSelect(value)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-center"
              >
                {label}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
