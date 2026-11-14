import { initLog, log } from "evlog/client";

if (typeof window !== "undefined") {
  initLog({ service: "client" });
}

function createTaggedLogger(tag: string) {
  return {
    debug: (message: string) => log.debug(tag, message),
    error: (message: string) => log.error(tag, message),
    info: (message: string) => log.info(tag, message),
    warn: (message: string) => log.warn(tag, message),
  };
}

export const clientLogger = {
  auth: createTaggedLogger("client:auth"),
  users: createTaggedLogger("client:users"),
};
