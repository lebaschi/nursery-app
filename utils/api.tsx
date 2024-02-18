export async function fetchAllChildrenData(): Promise<any | null> {
  const groupId = "86413ecf-01a1-44da-ba73-1aeda212a196";
  const institutionId = "dc4bd858-9e9c-4df7-9386-0d91e42280eb";
  const accessToken = process.env.REACT_APP_ACCESS_TOKEN; 

  const url = `https://app.famly.co/api/daycare/tablet/group?accessToken=${accessToken}&groupId=${groupId}&institutionId=${institutionId}`;

  const response = await fetch(url);
  if (!response.ok) {
      throw new Error("Failed to fetch children data");
  }

  const data = await response.json();
  return data.children || null;
}