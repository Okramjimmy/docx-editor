import { parseAsString, useQueryState } from "nuqs";

export function useSearchParam() {
  return useQueryState(
    "search",
    parseAsString.withDefault("").withOptions({ clearOnDefault: true })
  );
}
