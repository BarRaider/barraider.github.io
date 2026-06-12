# Botty McBotface — Privacy Policy

**Last updated:** June 12, 2026

## Overview

Botty McBotface ("the Bot") is a private server management bot that operates exclusively on a single Discord server ("Bar Raiders"). The Bot is self-hosted and operated by the server owner ("the Operator"). This policy describes what data the Bot collects, why, and how it is handled.

## Data We Collect

### User Identifiers

- **Discord User IDs** (numeric snowflake IDs) are stored to associate moderation history, reminders, suggestions, and activity metrics with individual users.
- We do **not** store usernames, display names, discriminators, avatars, or email addresses.

### Message Metadata

- **Per-user message count** (a single integer) and **last message timestamp** are stored to track activity levels for moderation context and giveaway eligibility.
- **Message content is never stored.** Messages are scanned in real-time in memory for automated moderation (blacklist filtering) and immediately discarded. No message text is written to any database or log file.

### Member Events

- **Join and leave timestamps** are recorded per user for moderation context.
- **Moderation actions** (bans, mutes, warnings) are logged with timestamps and the acting moderator for accountability and repeat-offender assessment.

### User-Submitted Content

- **Suggestions**, **reminders**, and **to-do items** are stored when explicitly submitted by users through bot commands. This data is stored alongside the user's Discord ID.
- **Giveaway participation** records (user ID and giveaway ID) are stored when users voluntarily enter giveaways.

## How We Use Your Data

All collected data is used exclusively for:

- **Server moderation** — tracking moderation history to inform staff decisions
- **Community features** — reminders, suggestions, to-do lists, giveaways
- **Activity tracking** — message counts for moderation context
- **Automated safety** — real-time message scanning against a configurable blacklist (no content is stored)

## Data Storage

- All data is stored in a **local SQLite database** on the same machine that hosts the Bot.
- No data is transmitted to, shared with, or accessible by any third-party service.
- No data is used for advertising, analytics, profiling, or any purpose beyond the features described above.
- No message content is used to train machine learning or AI models.

## Data Retention

- **User records** (ID, join date, message count) are retained indefinitely for moderation continuity across rejoins.
- **Moderation history** (ban/mute/warn events) is retained indefinitely for staff reference.
- **Suggestions** are retained until closed or discarded by server staff.
- **Reminders** are deleted after they fire.
- **To-do items** are retained until the user deletes them.
- **Giveaway participation** records are retained for the duration of the giveaway and kept afterward for winner verification.

## Data Deletion

Users may request deletion of their data by contacting server staff. Upon request:

- User records, history, suggestions, reminders, and to-do items associated with the requesting user's Discord ID will be permanently deleted from the database.
- Moderation history may be retained at staff discretion for server safety purposes, in accordance with Discord's Terms of Service.

## Opt-Out

- **Message scanning** (blacklist filtering) cannot be individually opted out of, as it is a server-wide safety feature that must apply uniformly to be effective.
- **Activity tracking** (message counts) cannot be individually opted out of, as it provides moderation context for all server members equally.
- Users may opt out of **voluntary features** (suggestions, reminders, giveaways, to-do) by simply not using those commands.

## Changes to This Policy

This policy may be updated as the Bot's features evolve. Significant changes will be announced in the server.

## Contact

For questions or data deletion requests, contact server staff or the server owner directly via Discord.
