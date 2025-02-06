import { RootState } from "@redux/store";
import { createSelector } from "@reduxjs/toolkit";

const PaginationCount = createSelector(
    (state: RootState) => state.Products.PaginationCount,
    (PaginationCount) => {
        location.reload()
        return PaginationCount
    }
)
const PaginationCountList = createSelector(
    (state: RootState) => state.Products.PaginationCountList,
    (PaginationCountList) => PaginationCountList
)

export { PaginationCount, PaginationCountList }
