import { useState, useEffect } from "react";
import { getPageFromURL } from "../../utils/utility";
import { useDispatch, useSelector } from "react-redux";
import { readFreeUserListing } from "../../api/slices/freeUserSlice/freeUser";
import { useLocation, useSearchParams } from "react-router-dom";
import { FiltersDefaultValues } from "../../utils/static";
import profile from "../../assets/pngs/profile.jpg";

export const useReferralManagers = () => {
  const dispatch = useDispatch();
  const location = useLocation();
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
    { label: "Users", value: "users" },
    { label: "User Id", value: "userId" },
    { label: "Email", value: "email" },
    { label: "Status", value: "status" },
    { label: "Action", value: "action" },
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

  const dummyRecords = [
    {
      img: profile,
      name: "John Doe",
      userId: "@john.doe",
      email: "john.doe@example.com",
      status: "Active",
    },
    {
      img: profile,
      name: "Jane Smith",
      userId: "@jane.smith",
      email: "jane.smith@example.com",
      status: "Active",
    },
    {
      img: profile,
      name: "Michael Johnson",
      userId: "@michael.j",
      email: "michael.johnson@example.com",
      status: "Block",
    },
    {
      img: profile,
      name: "Emily Davis",
      userId: "@emily.d",
      email: "emily.davis@example.com",
      status: "Active",
    },
    {
      img: profile,
      name: "Chris Lee",
      userId: "@chris.lee",
      email: "chris.lee@example.com",
      status: "Block",
    },
    {
      img: profile,
      name: "Sarah Brown",
      userId: "@sarah.brown",
      email: "sarah.brown@example.com",
      status: "Active",
    },
    {
      img: profile,
      name: "David Wilson",
      userId: "@david.wilson",
      email: "david.wilson@example.com",
      status: "Block",
    },
    {
      img: profile,
      name: "Laura Martinez",
      userId: "@laura.m",
      email: "laura.martinez@example.com",
      status: "Active",
    },
    {
      img: profile,
      name: "James Anderson",
      userId: "@james.a",
      email: "james.anderson@example.com",
      status: "Block",
    },
    {
      img: profile,
      name: "Olivia Thomas",
      userId: "@olivia.t",
      email: "olivia.thomas@example.com",
      status: "Block",
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
  };
};
