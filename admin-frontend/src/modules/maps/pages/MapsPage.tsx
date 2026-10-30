import { useGetMapsQuery } from "@/shared/api/maps";
import { MapTable } from "../components/MapTable";

export function MapsPage() {
  const {
    data: maps = [],
    isLoading,
    isError,
    refetch,
  } = useGetMapsQuery();

  if(isLoading) {
    return <p className="p-6">Đang tải dữ liệu...</p>;

  }

  if(isError){
    return (
        <div className="space-y-3 p-6">
            <p>Không thể tải mục bản đồ.</p>
            <button onClick={() => refetch()}>
                thử lại
            </button>
        </div>
    )
  }
  return (
    <div className="space-y-6 p-6">
        <h1 className="text-2x1 font-bold">
            Quản lý mục bản đồ
        </h1>

        <MapTable maps={maps}/>
    </div>
  )
}