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

    posts: defineTable({
        title: v.string(),
        content: v.string(),
        status: v.union(v.literal("draft"), v.literal("published")),
        authorId: v.id("users"),

        tags: v.array(v.string()),
        categories: v.optional(v.string()),
        featuredImage: v.optional(v.string()),

        createdAt: v.optional(v.number()),
        updatedAt: v.optional(v.number()),
        publishedAt: v.optional(v.number()),
        scheduleFor: v.optional(v.number()),

        views: v.number(),
        likes: v.number(),

    }).index("by_author", ["authorId"])
        .index("by_status", ["status"])
        .index("by_published", ["status", "publishedAt"])
        .index("by_author_status", ["authorId", "status"])
        .searchIndex("search_content", { searchField: "content" }),

    comments: defineTable({
        postId: v.id("posts"),
        authorId: v.optional(v.id("users")),
        authorName: v.optional(v.string()),
        authorEmail: v.optional(v.string()),

        content: v.string(),
        status: v.union(v.literal("approved"), v.literal("pending"), v.literal("rejected")),
        createdAt: v.number(),
    }).index("by_post", ["postId"])
        .index("by_post_status", ["postId", "status"])
        .index("by_author", ["authorId"]),

    likes: defineTable({
        postId: v.id("posts"),
        userId: v.optional(v.id("users")),
        createdAt: v.number(),
    }).index("by_post", ["postId"])
        .index("by_user", ["userId"])
        .index("by_post_user", ["postId", "userId"]),

    follows: defineTable({
        followerId: v.id("users"),
        followingId: v.id("users"),
        createdAt: v.number(),
    }).index("by_follower", ["followerId"])
        .index("by_following", ["followingId"])
        .index("by_relationship", ["followerId", "followingId"]),

    dailyStats: defineTable({
        postId: v.id("posts"),
        views: v.number(),
        date: v.string(),
        createdAt: v.number(),
        updatedAt: v.number(),
    }).index("by_post", ["postId"])
        .index("by_date", ["date"])
        .index("by_post_date", ["postId", "date"]),
})