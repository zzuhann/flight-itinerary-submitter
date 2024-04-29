import { z } from 'zod';

export const formSchema = z.object({
  IATA: z.string(),
  /** 航班編號 */
  flight: z.string().regex(/^[a-zA-Z0-9]+$/),
  name: z.string().regex(/^[a-zA-Z\s]+$/),
  phone: z.string().regex(/^[0-9]+$/),
  /** 身分證字號/護照編號 */
  id: z.string().regex(/^[a-zA-Z0-9]+$/),
  note: z.string(),
});
