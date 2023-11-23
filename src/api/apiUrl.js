const BASE_URL = "https://bootcamp-api.codeit.kr/api";

async function getAccount() {
  const response = await fetch(`${BASE_URL}/users/1`);
  if (!response.ok) {
    throw new Error("계정을 불러오는데 실패하였습니다.");
  }
  const body = await response.json();
  return body;
}

async function getFolder() {
  const response = await fetch(`${BASE_URL}/sample/folder`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패하였습니다.");
  }
  const body = await response.json();
  return body;
}

async function getFolderInformations() {
  const response = await fetch(`${BASE_URL}/users/1/folders`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패하였습니다.");
  }
  const body = await response.json();
  return body;
}
async function getEachFolder(id = "") {
  const query = `/folders/${id}`;
  const response = await fetch(`${BASE_URL}/users/1${query}`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패하였습니다.");
  }
  const body = await response.json();
  return body;
}

async function getUserLinks(id = "") {
  const query = id === "" ? `/links` : `/links?folderId=${id}`;
  const response = await fetch(`${BASE_URL}/users/1${query}`);
  if (!response.ok) {
    throw new Error("데이터를 불러오는데 실패하였습니다.");
  }
  const body = await response.json();
  return body;
}

export {
  getUserLinks,
  getEachFolder,
  getFolderInformations,
  getFolder,
  getAccount,
};