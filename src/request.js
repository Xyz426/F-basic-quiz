const URL = "http://localhost:8080/users";

const requestUserInfo = async (id) => {
  const response = await fetch(`${URL}/${id}`, { method: "GET" });
  const data = await response.json();
  return data;
};

const requestUserEducationsInfo = async (id) => {
  const response = await fetch(`${URL}/${id}/educations`, { method: "GET" });
  const data = await response.json();
  return data;
};

export { requestUserInfo, requestUserEducationsInfo };
