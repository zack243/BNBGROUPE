import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
  const messages = (await import(`../messages/${locale}.json`)).default;
  return {
    messages,
    timeZone: 'Africa/Kinshasa',
    now: new Date(),
  };
});
