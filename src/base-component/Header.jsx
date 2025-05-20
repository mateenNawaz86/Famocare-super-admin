export const Header = ({ pageTitle }) => {
  return (
    <div
      className={`flex items-center justify-between mb-[33px] px-[30px] pt-[31px]`}
    >
      <div className="flex items-center gap-x-5 maxSize:gap-x-0">
        <span className="text-6 font-semibold">{pageTitle}</span>
      </div>
    </div>
  );
};
