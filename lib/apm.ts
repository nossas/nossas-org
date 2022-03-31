import { init as initApm } from "@elastic/apm-rum";
import pkgInfo from "../package.json";

const apm = initApm({
  // Set required service name (allowed characters: a-z, A-Z, 0-9, -, _, and space)
  serviceName: `Nossas Webpage`,
  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: process.env.ELASTIC_APM_SERVER_URL,
  // Set the service version (required for source map feature)
  serviceVersion: pkgInfo.version,
  // Set the service environment
  environment: process.env.ELASTIC_APM_ENVIRONMENT || "development",
  active: Boolean(process.env.ELASTIC_APM_ACTIVE) || false,
});

export default apm;
