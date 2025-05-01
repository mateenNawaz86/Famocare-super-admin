import { useRef, useState } from "react";
import { PlusIcon } from "../../assets/svgs/components/plus-icon";
import { LinkButton } from "../../base-component/ui/button/link-icon";
import InputField from "../../base-component/ui/fields/search-fields";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { FiltersDefaultValues } from "../../utils/static";

export const ReferralManagerFilters = () => {
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const location = useLocation(0);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleInputChange = (value) => {
    setInputValue(value);

    const updatedParams = new URLSearchParams(searchParams.toString());

    if (value) {
      updatedParams.set("text", value);
      updatedParams.set("page", "1");
    } else {
      updatedParams.delete("text");
      updatedParams.delete("page");
    }

    navigate(`${location.pathname}?${updatedParams.toString()}`, {
      replace: true,
    });

    const updatedFilter = {
      ...filter,
      text: value || FiltersDefaultValues.None,
    };

    setFilter(updatedFilter);
    // handleFilterChange(updatedFilter);
  };

  return (
    <div className="flex items-center justify-between">
      <LinkButton
        text="Add Referral Manager"
        onClick={() => {}}
        icon={PlusIcon}
        containerClassName="bg-newPreimary text-white rounded-md py-2 px-3 text-sm font-semibold md:gap-x-2"
      />

      <InputField
        handleChange={handleInputChange}
        ref={inputRef}
        value={inputValue}
        iconDisplay={true}
        textClassName="w-[318px]"
      />
    </div>
  );
};
