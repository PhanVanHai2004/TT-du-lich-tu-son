import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { MapTableProps } from "../types/indexn";
import type { MapItem } from "@/shared/types/map";


export function MapTable ({ maps } : MapTableProps) {
    return(
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Tên</TableHead>
                    <TableHead>Thứ tự</TableHead>
                    <TableHead>Icon</TableHead>
                </TableRow>
            </TableHeader>

            <TableBody>
                {maps.map((item: MapItem) => (
                    <TableRow key={item.id}>
                        <TableCell>{item.id}</TableCell>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.oder}</TableCell>
                        <TableCell>{item.icon}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}