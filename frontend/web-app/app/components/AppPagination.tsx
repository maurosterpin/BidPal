"use client";

import React from "react";
import { Pagination } from "flowbite-react";

type Props = {
  currentPage: number;
  pageCount: number;
};

export default function AppPagination({ currentPage, pageCount }: Props) {
  const [pageNumber, setPageNumber] = React.useState(currentPage);
  return (
    <Pagination
      currentPage={currentPage}
      onChangePage={(page: React.SetStateAction<number>) => setPageNumber(page)}
      totalPages={pageCount}
      layout="pagination"
      showIcons={true}
      className="text-blue-500 mb-5"
    />
  );
}
