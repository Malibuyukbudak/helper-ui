import { cookies } from "next/headers";

type FetchProps = {
  url: string;
  host?: string;
  version?: number;
  params?: object;
  contentType?: any;
  auth?: boolean;
};

export const hosts: any = {
  api: process.env.API_HOST,
};

export default async function FetchServer({
  url,
  host = "api",
  params,
  contentType = "application/json",
  auth = false,
}: FetchProps) {
  try {
    const response = await fetch(`${hosts[host]}/${url}`, {
      ...params,
      headers: {
        ...(contentType && { "Content-Type": contentType }),
        ...(auth && {
          Authorization: `Bearer ${cookies().get("access_token")?.value}`,
        }),
      },
    });

    var result = await response.json();

    return result;
  } catch (error: any) {
    console.error(error);
    return error;
  }
}
