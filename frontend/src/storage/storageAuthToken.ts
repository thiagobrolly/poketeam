import { AUTH_TOKEN_STORAGE } from './storageConfig';

type StorageAuthTokenProps = {
  token: string;
  refreshToken: string;
};

export async function storageAuthTokenSave({
  token,
  refreshToken,
}: StorageAuthTokenProps) {
  await localStorage.setItem(
    AUTH_TOKEN_STORAGE,
    JSON.stringify({ token, refreshToken }),
  );
}

export async function storageAuthTokenGet() {
  const response = await localStorage.getItem(AUTH_TOKEN_STORAGE);

  const { token, refreshToken }: StorageAuthTokenProps = response
    ? JSON.parse(response)
    : {};

  return { token, refreshToken };
}

export async function storageAuthTokenRemove() {
  await localStorage.removeItem(AUTH_TOKEN_STORAGE);
}
