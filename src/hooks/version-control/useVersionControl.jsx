import { useState, useEffect } from "react";
import { getPageFromURL } from "../../utils/utility";
import { useDispatch, useSelector } from "react-redux";
import { readFreeUserListing } from "../../api/slices/freeUserSlice/freeUser";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { FiltersDefaultValues } from "../../utils/static";

export const useVersionControl = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const { user, loading: authLoading } = useSelector((state) => state.auth);
  const [currentPageRows, setCurrentPageRows] = useState([]);
  const [currentPage, setCurrentPage] = useState(getPageFromURL());
  const { freeUser } = useSelector((state) => state.freeUser);
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
    { label: "Version", value: "Version" },
    { label: "Description", value: "Description" },
    { label: "Release Date", value: "Release Date" },
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
    navigate("/add-version-control", { replace: true });
  };

  const dummyRecords = [
    {
      id: 1,
      Version: 1.08,
      description: "Enter Description",
      releaseDate: "2023-10-01",
      text: "Latest",
    },
    {
      id: 2,
      Version: 1.12,
      description: "Initial feature rollout",
      releaseDate: "2023-11-15",
      text: "Latest",
    },
    {
      id: 3,
      Version: 1.25,
      description: "Minor bug fixes and improvements",
      releaseDate: "2024-01-03",
      text: "Latest",
    },
    {
      id: 4,
      Version: 1.33,
      description: "Performance optimization update",
      releaseDate: "2024-02-21",
      text: "Beta",
    },
    {
      id: 5,
      Version: 1.45,
      description: "New UI components added",
      releaseDate: "2024-04-10",
      text: "Beta",
    },
    {
      id: 6,
      Version: 1.51,
      description: "Security patch release",
      releaseDate: "2024-06-06",
      text: "Beta",
    },
    {
      id: 7,
      Version: 1.63,
      description: "Database schema changes",
      releaseDate: "2024-07-18",
      text: "Latest",
    },
    {
      id: 8,
      Version: 1.7,
      description: "User feedback implementation",
      releaseDate: "2024-09-12",
      text: "Beta",
    },
    {
      id: 9,
      Version: 1.82,
      description: "Improved logging and monitoring",
      releaseDate: "2024-11-03",
      text: "Latest",
    },
    {
      id: 10,
      Version: 1.91,
      description: "Final stable release for the year",
      releaseDate: "2024-12-22",
      text: "Beta",
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
