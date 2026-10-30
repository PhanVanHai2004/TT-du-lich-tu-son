import type { MapItem } from "@/shared/types/map";
import { api } from "./index";

export const mapsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getMaps: builder.query<MapItem[],void>({
            query: () => "/map",
            providesTags: ["Maps"],
        })
    })
})

export const { useGetMapsQuery } = mapsApi