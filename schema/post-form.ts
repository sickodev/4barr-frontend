import { z } from "zod";

const MAX_FILE_SIZE = 5000000; // 5MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
const ACCEPTED_AUDIO_TYPES = ["audio/mpeg", "audio/mp3"];
const ACCEPTED_VIDEO_TYPES = ["video/mp4", "video/webm"];

export const postFormSchema = z.object({
  username: z.string(),
  userid: z.string(),
  content: z.string().optional(),
  file: z
    .any()
    .refine((file) => file?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (file) =>
        ACCEPTED_IMAGE_TYPES.includes(file?.type) ||
        ACCEPTED_AUDIO_TYPES.includes(file?.type) ||
        ACCEPTED_VIDEO_TYPES.includes(file?.type),
      "Only .jpg, .jpeg, .png, .webp, .mp3, and .mp4 files are accepted."
    )
    .optional(),
});

export type PostFormSchema = z.infer<typeof postFormSchema>