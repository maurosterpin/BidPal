import React from "react";
import { Button } from "flowbite-react";

type Props = {
  pageSize: number;
  setPageSize: (size: number) => void;
};

const pageSizeButtons = [4, 8, 12];

export default function Filters({ pageSize, setPageSize }: Props) {
  return (
    <div className="flex justify-between items-center mb-4">
      <div>
        <span className="uppercase text-sm text-gray-500 mr-2">Page size</span>
        <Button.Group>
          {pageSizeButtons.map((value, i) => (
            <Button
              key={i}
              onClick={() => setPageSize(value)}
              color={`${pageSize === value ? "red" : "gray"}`}
              className="focus:ring-0"
            ></Button>
          ))}
        </Button.Group>
      </div>
    </div>
  );
}
