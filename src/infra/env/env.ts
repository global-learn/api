import { z } from 'zod';

export const EnvSchema = z.object({
  PORT: z.coerce.number(),

  REDIS_IP: z.string(),
  REDIS_PORT: z.coerce.number(),
});

export type Env = z.infer<typeof EnvSchema>;
