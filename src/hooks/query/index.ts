import { usePathname, useRouter, useSearchParams } from "next/navigation";

export default function useQueryParams() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();
  const queryParams = Object.fromEntries(searchParams.entries());

  function setQueryParams(queryObj: any, squash?: boolean) {
    if (squash) {
      if (
        Object.keys(queryObj).length === 0 &&
        queryObj.constructor === Object
      ) {
        router.push(pathname);
        return;
      }
      router.push(createQueryString(queryObj));
      return;
    }
    router.push(createQueryString({ ...queryParams, ...queryObj }));
  }

  return { queryParams, setQueryParams };
}

function createQueryString(queryObject: { [key: string]: string } = {}) {
  const queryString = Object.keys(queryObject)
    .filter(
      (key) =>
        queryObject[key] &&
        !(Array.isArray(queryObject[key]) && !queryObject[key].length)
    )
    .map((key) => {
      return `${encodeURIComponent(key)}=${encodeURIComponent(
        queryObject[key]
      )}`;
    })
    .join("&");

  return queryString ? `?${queryString}` : "";
}
