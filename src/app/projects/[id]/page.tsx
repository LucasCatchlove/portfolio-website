export default async function Test({ params }: { params: { id: number } }) {
  const res = await fetch(`http://md5.jsontest.com/?text=${params.id}`, {next: { revalidate: 5}});
  if (!res.ok) {
    throw new Error(`Failed to fetch data: ${res.status}`);
  }
  const data = await res.json();

  return <div>{data.md5}</div>;
}
