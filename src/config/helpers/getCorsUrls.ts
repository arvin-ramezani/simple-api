export const getCorsUrls = (
  envPaths: string | undefined,
): string[] | undefined => {
  const envPathsList: string[] | undefined = envPaths?.split(',');

  return envPathsList;
};
