import { useState, useEffect } from "react";
import { getPageFromURL } from "../../utils/utility";
import { useDispatch, useSelector } from "react-redux";
import { readFreeUserListing } from "../../api/slices/freeUserSlice/freeUser";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { FiltersDefaultValues } from "../../utils/static";

export const useGuideText = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { user, loading: authLoading } = useSelector((state) => state.auth);
  const [currentPageRows, setCurrentPageRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(getPageFromURL());
  const { freeUser, loading } = useSelector((state) => state.freeUser);
  const [searchParams, setSearchParams] = useSearchParams(location.search);
  const [filter, setFilter] = useState({
    sort: FiltersDefaultValues.None,
  });

  const page = searchParams.get("page");
  const sort = searchParams.get("sort");
  const status = currentPageRows?.data?.stats;

  const dummyData = [
    { title: "Total Users", points: status?.totalUsers },
    {
      title: "This Month",
      points: status?.thisMonthUsers,
    },
    { title: "This Week", points: status?.thisWeekUsers },
    { title: "Revenue", points: status?.revenue },
  ];

  const headings = [
    { label: "#", value: "id" },
    { label: "Text Title", value: "Text Title" },
    { label: "Text", value: "Text" },
    { label: "Action", value: "Action" },
  ];

  const totalCount = currentPageRows?.pagination?.totalRecords;
  const itemsPerPage = 10;
  const totalItems = totalCount;

  useEffect(() => {
    if (authLoading) return;
    const parsedPage = parseInt(page, 10);

    let resetPage = null;
    if (!isNaN(parsedPage)) {
      setCurrentPage(parsedPage);
    } else {
      resetPage = 1;
      setCurrentPage(1);
    }

    const redeemHistoryRecords = async () => {
      const uid = user?.user?.id;
      if (!uid) return;

      if (sort !== undefined) {
        const filteredData = {
          uid: uid,
          page: (Number(parsedPage) || resetPage) ?? currentPage,
          size: 10,
        };

        if (sort) {
          filteredData.sort = sort;
        }

        try {
          const response = await dispatch(
            readFreeUserListing({ params: filteredData })
          );
          if (response?.payload) {
            const data = response?.payload;
            setCurrentPageRows(data);
          }
        } catch (err) {
          console.error("Error fetching monthly premium users:", err);
        }
      }
    };

    redeemHistoryRecords();
  }, [location.search, location.key, user, authLoading, sort]);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPage(getPageFromURL());
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);

    const params = new URLSearchParams(window.location.search);
    params.set("page", page.toString());
    setSearchParams(params);
  };

  const hanldeSortChange = (value) => {
    const params = new URLSearchParams(window.location.search);

    if (value === "None") {
      params.delete("sort");
    } else {
      params.set("sort", value);
    }

    params.set("page", "1");
    setSearchParams(params);
    setCurrentPage(1);

    setFilter((prev) => {
      const updatedFilter = { ...prev, sort: value };
      return updatedFilter;
    });
  };

  const handleAddVersionControl = () => {
    navigate("/edit-guide-text", { replace: true });
  };

  const dummyRecords = [
    {
      id: 1,
      textTitle: "Text Title 1",
      text: "Initial release of the application",
    },
    {
      id: 2,
      textTitle: "Text Title 2",
      text: "Added user authentication and login functionality",
    },
    {
      id: 3,
      textTitle: "Text Title 3",
      text: "Improved dashboard layout for better usability",
    },
    {
      id: 4,
      textTitle: "Text Title 4",
      text: "Fixed bug causing crash on profile update",
    },
    {
      id: 5,
      textTitle: "Text Title 5",
      text: "Implemented dark mode toggle",
    },
    {
      id: 6,
      textTitle: "Text Title 6",
      text: "Optimized loading performance on mobile devices",
    },
    {
      id: 7,
      textTitle: "Text Title 7",
      text: "Introduced multi-language support",
    },
    {
      id: 8,
      textTitle: "Text Title 8",
      text: "Updated settings page with new preferences",
    },
    {
      id: 9,
      textTitle: "Text Title 9",
      text: "Launched email notification system",
    },
    {
      id: 10,
      textTitle: "Text Title 10",
      text: "Refactored codebase for better maintainability",
    },
  ];

  return {
    dummyData,
    currentPageRows,
    totalItems,
    totalCount,
    loading: false,
    itemsPerPage,
    handlePageChange,
    currentPage,
    headings,
    freeUser,
    hanldeSortChange,
    sort,
    filter,
    dummyRecords,
    handleAddVersionControl,
  };
};
