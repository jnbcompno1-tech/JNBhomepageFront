export const officialUrl: string;
export function deploymentConfig(env: Record<string, string | undefined>): { isPublic: boolean; deploymentUrl: string; siteUrl: string; officialUrl: string };
export const deployment: ReturnType<typeof deploymentConfig>;
