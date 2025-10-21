import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    users: defineTable({
        name: v.string(),
        email: v.string(),
        username: v.optional(v.string()),
        tokenIdentifier: v.string(),
        imageUrl: v.optional(v.string()),
        // store unix ms timestamps; make them optional so old inserts validate
        createdAt: v.optional(v.number()),
        updatedAt: v.optional(v.number()),

    }).index("by_token", ["tokenIdentifier"])
    .index("by_email", ["email"])
    .index("by_username", ["username"]),
})