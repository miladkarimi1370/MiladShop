import { useMyPagination } from "@/store/useMyPagination";
import { ChangeNumberToPersianForPhone } from "@/tools/changeNumbersToPersian";
import { Pagination, PaginationItem, Stack } from "@mui/material";

export default function MyPagination({ allPages }) {

    const { currentPage, setCurrentPage } = useMyPagination()

    return (
        <Stack spacing={2}>
            <Pagination
                page={currentPage}
                count={allPages}
                onChange={(_, value) => {
                    setCurrentPage(value)
                }}
                renderItem={(item) => {
                    const page =
                        typeof item.page === "number"
                            ? ChangeNumberToPersianForPhone(item.page)
                            : item.page; // اگر صفحه نبود (مثل next/prev) دست نزن

                    return <PaginationItem {...item} page={page} />;
                }}
            />
        </Stack>
    );
}
