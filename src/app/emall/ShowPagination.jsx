import { ChangeNumberToPersianForPhone } from "@/tools/changeNumbersToPersian";
import { Pagination, PaginationItem, Stack } from "@mui/material";

export default function MyPagination() {
    return (
        <Stack spacing={2}>
            <Pagination
                count={10}
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
