import { log } from "evlog";

function createTaggedLogger(tag: string) {
  return {
    debug: (message: string) => log.debug(tag, message),
    error: (message: string) => log.error(tag, message),
    info: (message: string) => log.info(tag, message),
    warn: (message: string) => log.warn(tag, message),
  };
}

export const serverLogger = {
  db: createTaggedLogger("server:db"),
};
