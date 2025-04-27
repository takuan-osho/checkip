import { Hono, Context } from "hono";

const app = new Hono<{ Bindings: CloudflareBindings }>();

/**
 * IPアドレスを受け取り、プレーンテキストのレスポンスを返す共通関数
 * @param c - HonoのContextオブジェクト
 * @param ip
 * @returns
 */
const createIpResponse = (c: Context, ip: string | undefined | null): Response => {
  if (!ip) {
    // IPが取得できなかったときの共通エラーレスポンス
    return c.text("Could not determine IP address", 500);
  }
  return c.text(ip);
};

app.get("/", (c) => {
  const ip = c.req.header("CF-Connecting-IP");
  return createIpResponse(c, ip);
});

app.get("/test", (c) => {
  const testIp = c.req.header("X-Test-Ip");

  if (!testIp) {
    return c.text("Required element is missing", 400);
  }
  return createIpResponse(c, testIp);
});

export default app;
