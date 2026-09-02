import { json } from "@sveltejs/kit";

export async function GET({ url }) {

  const page = url.searchParams.get('page') ?? 0;

  let r = await fetch(`https://lospec.com/palette-list/load?colorNumberFilterType=max&colorNumber=32&page=${page}&tag=&sortingType=default`)
  let j = await r.json()
  return json(j);
}
