const apiUrl = process.env.VITE_API_URL || "http://localhost:5000";

export const createTech = async (text) => {
  const resp = await fetch(`${apiUrl}/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });
  const data = await resp.json();
  return data;
};

export const getTech = async () => {
  const resp = await fetch(`${apiUrl}/get`);
  const data = await resp.json();
  return data;
};
