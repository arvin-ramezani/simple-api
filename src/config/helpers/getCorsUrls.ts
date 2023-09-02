export const getCorsUrls = (envPaths: string): string[] | undefined => {
  const envPathsList: string[] | undefined = envPaths.split(',');

  return envPathsList;
};
