import { useQuery } from "@tanstack/react-query"
import { fetchNetworks } from "../services/gecko-terminal"
import { useMemo } from "react"

export default function useNetwork() {
  const networkQuery = useQuery({
    queryKey: ["network"],
    queryFn: fetchNetworks,
    staleTime: 1000 * 60 * 60 * 24
  })
  const networksSelect = useMemo(() => ((networkQuery.data?.data ?? []).map(network => {
    return { name: network.attributes.name, id: network.id }
  })),[networkQuery.data]) 

  return {networksSelect, isLoading: networkQuery?.isLoading}
}