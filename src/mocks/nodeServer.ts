import { createServer } from "@mswjs/http-middleware";

import { PORT, getMockBaseUrl, handlers } from "./handlers";

const mockServer = createServer(...handlers);

mockServer.listen(PORT, () =>
  console.log("Mock server ready at " + getMockBaseUrl())
);
