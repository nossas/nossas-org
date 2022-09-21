import { init as initApm } from "@elastic/apm-rum";
import pkgInfo from "../package.json";

const apm = initApm({
  // Set required service name (allowed characters: a-z, A-Z, 0-9, -, _, and space)
  serviceName: `Nossas Webpage`,
  // Set custom APM Server URL (default: http://localhost:8200)
  serverUrl: "https://bonde-22.apm.us-east-1.aws.found.io",
  // Set the service version (required for source map feature)
  serviceVersion: pkgInfo.version,
  // Set the service environment
  environment: "production",
});

export default apm;
