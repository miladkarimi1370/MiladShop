import { z } from "zod";

export const loginSchema = z.object({
    email: z.email({ pattern: /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_+-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i, error: "ایمیل شما معتبر نیست !" }),
    password: z.string().min(3, "رمز عبور باید حداقل شامل 3 کاراکتر باشد").max(20, "رموز عبور نباید از 20 کاراکتر بیشتر باشد"),
    remember_me: z.boolean().optional()
})