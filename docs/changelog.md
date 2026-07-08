---
editLink: false
next: false
---

# Changelog

## 1.2.1 · 2026-07-08

We are excited to announce the release of Breezell v1.2.1. This update brings a wide range of improvements across source control, background commands, terminal workflows, Skills, model support, image task handling, UI polish, and long-running AI interactions. It also includes many stability fixes for streaming output, editor state synchronization, session persistence, multi-window behavior, and authentication.

### New

- The Source Control view now supports expandable commit details and browsing of related files, making change tracking clearer and more intuitive.
- Background command and terminal collaboration has been improved, with support for multi-task status display and clearer feedback when users manually interrupt a task.
- The Skills panel now works together with the Superpowers master toggle, creating a more unified configuration path.
- The conversation home page now includes quick access shortcuts for frequently used capabilities, reducing the time needed to reach common features.
- Brand visuals and interface identifiers have been updated across startup screens and Team Mode.
- Expanded support and parameter adaptation for the latest generation of mainstream AI models.
- Image settings have been upgraded, including status tracking for asynchronous video-style tasks.
- Added the first phase of batch script execution, designed for multi-step automation scenarios.

### Fixes

- Fixed issues where AI conversation streaming could become stuck, produce abnormal formatting, or fail to recover smoothly after long-running tasks were interrupted.
- Fixed repeated application of code editing tools, abnormal navigation behavior, and editor state desynchronization after rejecting changes.
- Fixed delayed refresh issues in context usage statistics, progress rings, and hint messages.
- Fixed version update notifications getting stuck and several untranslated text strings.
- Fixed usability and display issues across Super Memory, code review, and related tool flows.
- Fixed session persistence issues and reduced lag in the history list when handling large threads or large pasted content.
- Fixed overlay panels such as MCP and Skills being blocked during conversations.
- Fixed occasional stream interruptions during long research-style outputs.
- Fixed task completion reminders not triggering when the window was out of focus.
- Fixed settings being overwritten across multiple windows and batch operation bars disappearing unexpectedly.
- Fixed authentication sessions requiring users to log in again or showing inconsistent states in certain scenarios.

### Improvements

- Upgraded the core runtime and AI dependencies to improve overall stability and compatibility.
- Optimized prompt caching and tool-calling strategies to reduce repeated overhead and improve response consistency.
- Improved streaming rendering and UI update logic, making long conversations and high-load outputs smoother.
- Optimized the LLM request timeout mechanism so long generation tasks are less likely to be interrupted incorrectly while progress is still being made.

## 1.2.0 · 2026-07-06

Breezell v1.2.0 introduces new AI tools, smarter agent workflows, interface upgrades, stability fixes, and performance improvements across long conversations, tool execution, terminal output, memory isolation, and remote development.

### AI Tools and Intelligent Capabilities

- Added the new **Agent Research** tool, with support for real-time progress tracking and result display.
- Added **batch script execution** in Code Mode as the first phase of multi-step automation support.
- Added a unified browser tool entry point, consolidating previously separate browser actions into a simpler workflow.

### Conversation and Interface

- Added a **Message Rail** to the chat area, making it easier to browse and jump between conversation messages.
- Added quick access cards for **Super Memory** and **Code Review** on the chat home page.
- Added a quick toggle panel for **MCP servers** in the input area, allowing users to enable or disable MCP without opening Settings.
- Introduced a new brand identity, with unified visual updates across the launch page, welcome page, and Teams Mode.
- Redesigned the provider management interface in Settings, now supporting list-based browsing and detailed drill-down views.
- Added custom theme accent colors, available in both light and dark mode.
- Upgraded image settings to v2, with support for polling and tracking asynchronous video tasks.
- Added health check reports for OpenAI-compatible providers, making it easier to diagnose connection and configuration issues.

### Stability

- Fixed lag when loading long conversation histories and slow responses when pasting large blocks of content.
- Fixed occasional UI freezes during AI streaming output, especially when the terminal produced large amounts of output.
- Fixed cases where the **Keep All / Undo All** action bar could disappear unexpectedly.
- Fixed settings being overwritten when multiple windows were open at the same time.
- Fixed issues where **Super Memory** could not be used properly in certain modes.
- Fixed incorrect timeout interruptions during AI generation, so slow but healthy generations are no longer stopped too early.
- Fixed refresh token failures that could cause users to log in repeatedly.
- Fixed tool execution results losing their correct pairing when users interrupted with a new message.
- Fixed silent compression of tool results causing the AI to rerun the same task repeatedly.
- Fixed inaccurate terminal exit code display and cases where terminal output could not be fully restored.
- Fixed Remote SSH connections losing hostname casing and port information.

### Performance and Experience Improvements

- Improved overall response speed by streamlining the AI tool surface and reducing system overhead for each conversation turn.
- Optimized search and reading strategies with a “locate first, then read in windows” approach, reducing unnecessary full-document reads.
- Added workspace-level memory isolation, preventing memory recall from different projects from interfering with each other.

## 1.1.9 · 2026-06-26

### New Models

- Added support for multiple new large language models, as well as AI image and video generation models, giving you more model options.

### New Features

- Agents now support Deep Research, making complex questions easier to explore in greater depth.
- The chat sidebar now supports one-click jump to the latest message and one-click message copying.
- Service provider management now supports a list layout, and the MCP Market interface has been refreshed.

### Experience Improvements

- Refined light/dark themes, terminal UI, and multiple interface details for a cleaner visual experience.

### Performance & Stability

- Upgraded the underlying runtime engine for smoother startup and operation.
- Agents are now smarter and more stable, reducing repetitive and ineffective actions.
- Fixed issues related to login, terminal, remote connections, and multiple interface areas.

## 1.1.8 · Bugfix · 2026-06-09

- Added new validation for intensity adjustment
- Optimized repeated dialogues and automatic intelligent context
- Fixed scrolling issues on the conversation page
- Fixed unstable compression

## 1.1.7 · 2026-06-07

- Fixed the optimization model being overly verbose
- Fixed an abnormal issue with file tagging in the optimization review
- Fixed several bugs

## 1.1.6 · 2026-06-06

### Added

- **Code Review Panel**: Standalone review view, line-number diff, large-file Myers diff, rollback/revert, select reference/copy, send to chat
- **Appearance Settings**: Activity Bar width/location, Side Bar position, editor tab style
- **Breezell Browser**: Redesigned panel UI, address/search bar, incognito mode, auto-close browser when the last tab is closed
- **Database Panel**: Workspace SQLite discovery; full CRUD for MongoDB/Oracle; connection renaming
- **Chat Enhancements**: Reference recent 3 rounds of history, chat attachments, rich-text quote/copy, manual context compression, condensing progress
- **New Providers**: GitHub Copilot, Kimi Code (device OAuth); Codex usage/icon optimization
- **Super Memory**: Time-aware UI (FreshBadge, recall cards)
- **Models/Providers**: MiniMax M3, Opus 4.8, glm-5.1; OpenAI-Compatible config page redesign
- **Notification Center**: Left sidebar tabs + larger split layout
- **Error Display**: Structured error cards, expandable raw error details, permanent errors skip retry
- **Others**: Russian translation, context usage ring/tray

### Fixes

- **Agent/Tools**: Always fresh file reading, file tools synchronized with disk
- **Code Review/Rendition**: GFM tables, Explore spacing, streaming markdown/mermaid long-session OOM
- **Remote/Terminal**: Full toolchain for SSH, Windows terminal reflow, terminal ID confusion, tab close deadlock
- **UI Tweaks**: Activity Bar width adjustment reduces panel jitter, notification panel height, Super Memory retention days wording, etc.

### Optimizations

- **Performance**: Significantly improved cache hit rate, startup/splash LCP, long-conversation memory management
- **Dependencies/Base**: Electron 39.8 → 42.3.3

## 1.1.5 · 2026-05-24

### New Features

- **Chat quoting and copying**: After selecting text in a chat, quickly convert it into a Markdown quote or copy it directly, while preserving lists, code blocks, and file name tags
- **Automatic notification for background commands**: Notifications are automatically sent when long-running terminal tasks complete, eliminating the need to repeatedly check progress
- **Mathematical formula rendering**: LaTeX math rendering is now properly supported in chats, including $x^2$ and $...$
- **Error display redesign**: Error messages are shown in expandable cards, with one-click copy of the full error content
- **Full SSH remote development support**: All tool invocations on remote SSH hosts are now fully supported
- **Streaming stutter diagnosis**: When a streaming response stalls, detailed diagnostics indicate whether it's upstream latency, network buffering, etc.
- **Model context usage bar**: In the model selector, clearly see the token usage for the current session, displayed by category
- **"Default Model" label**: The model selector now clearly identifies the default model
- **Long-term memory panel upgrade**: New time tags such as "Just Now," "Today," and "This Week," frosted-glass style, plus memory recall cards
- **Display plan title during streaming**: When the model generates a plan, the plan title appears during streaming output
- **Permanent errors automatically skip retries**: For permanent errors such as authentication failures, no more meaningless automatic retries
- **New model support**: Added support for models such as Gemini 3.5 and Qwen 3.7
- **Russian language interface support**
- **Chat tool cards can be expanded**: Tool outputs such as search results and file readings support collapsing/expanding

### Fixes

- Streaming response timeout increased from 120s to 180s, with an intermediate UI prompt for slower-inference models
- Fixed dropdown menu layering issue on the settings page (third-party provider dropdowns no longer obscured)
- Fixed the "[object Object]" error display issue
- Fixed the non-working error drawer copy button
- Fixed the file path prompt box freezing (no longer remains after scrolling away)
- Optimized chat text selection color scheme, fixing previously broken style variables
- Fixed model selector wheel penetration (scrolling the model menu no longer scrolls the chat area below)
- Schema compatibility fix for thinking mode (improved inference parameter compatibility under the Claude protocol)
- Optimized multi-file streaming preview (real-time "N changes" indicators no longer lag)
- Numerous UI detail fixes (scrolling, spacing, alignment, animations, tooltips)

### Optimizations

- **Underlying technology stack upgrade**: Electron upgraded to 42.2.0, including Chromium 148, Node.js 24, V8 14.8
- **Memory management optimization**: Large chat-history data is automatically written to disk and inference records organized as needed, keeping long conversations lightweight
- **Enhanced Mermaid chart rendering**: Improved cache management with proactive SVG cleanup on unloading, preventing memory accumulation during long chats

## 1.1.4 · 2026-04-26

### New Features

- **DeepSeek V4 series models**: Added DeepSeek V4 items in the model list/configuration, selectable directly
- **OpenAI-Compatible "Slot" card interface**: Redesigned the card-style UI for OpenAI-Compatible configuration areas

### Fixes

- Sidebars and settings no longer "hang": After model switching and rule/memory operations, they refresh promptly without needing a restart
- Fixed file links in chat being unopenable or incorrectly parsed
- More reliable terminal tools: Commands now run through the system terminal service
- Fixed chat-area jumping and erratic height when "Thinking / Streaming Content / Terminal Tool Cards" appeared or switched states, and fixed a crash caused by a variable reference error
- Updated PDF preview and related tool usage/display behaviors
- Corrected persistence and handling of large-volume tool results to reduce anomalies or state loss
- Updated LLM error reporting and chat-area interface resources

### Optimizations

- Selection of model panels in the input box
- Increased stability of terminal tools

## 1.1.3-v2 · 2026-04-23

### New Features

- Support for GPT-5.5 model, added to all provider lists
- Added Kimi K2.6 model, available on all major providers (OpenRouter, Together AI, Fireworks, DeepInfra, etc.)
- Math formulas can now be displayed in chat (KaTeX rendering)
- Flowcharts can now be displayed in chat (chart rendering)
- Added web search tool with control over search depth and topic parameters
- Terminal tool upgraded to PTY mode for a more realistic experience
- Added code symbol index with jump-to-definition support
- Added dependency analysis tool (cycle detection, dependency tracking: which files are affected by a change, the dependency chain between file A and B, whether circular dependencies exist)
- Skills now support dragging and compressing files/folders
- Added an IDE update status indicator to the title bar
- Major revamp of the multi-Slot panel: search, sorting, health checks, and batch cleaning of invalid APIs

### Fixes

- Long chats no longer freeze: Fixed the interface freezing with too many messages
- Scrolling no longer snaps back to the bottom when viewing chat history
- Fixed terminal subprocess leakage (no more memory spikes or crashes from residual processes)
- Fixed file path display (links no longer corrupted into false paths by ellipsis)
- Fixed super memory blanking (AI thinking tags no longer leak, causing blank memory display)
- Fixed terminal command folding (failed commands no longer swallowed by subsequent successful ones)
- Fixed the style of the plan to-do floating reminder (double-layer background issue)
- Fixed chat jumping when expanding the file list
- AI no longer repeatedly asks "continue?" and instead executes autonomously (self-testing required)
- Aligned the scroll bar in the Skills content box
- Fixed cases where command execution recognized exit 0 but the actual build failed

### Performance Optimization

- Significantly optimized chat rendering
- Added memo to Markdown rendering to avoid re-parsing the same content
- Memory optimization: tightened the persistence threshold for tool results to prevent spikes in long conversations
- Token counter upgrade
- Added an LRU upper limit to message cache
- New splash screen and onboarding flow design

## 1.1.1 · 2026-04-11

### New Features

- The chat history panel now has a "New Conversation" button for more convenient operation
- Database functionality significantly enhanced: support for Redis and MariaDB, new cell editing confirmation, table-count badges, and the ability to open the database panel directly from chat
- AI conversation supports switching between Plan/Agent modes for a smoother workflow

### Fixes and Optimizations

- Fixed repeated code completion (Tab completion)
- Fixed page jumping when focusing on the file browser window
- Fixed false disconnection reports when minimizing the window
- Fixed multiple bugs such as image indexing, IPC memory leakage, and LLM timeouts in chat
- Fixed the white screen caused by React packaging, and optimized package size
- Fixed several issues such as empty panels and undo in the CSS checker
- Upgraded to TypeScript 6.0 and Electron 41.2.0 for more stable overall performance
- Comprehensive UI polishing: unified tool card backgrounds and borders, aligned editor tab icons, fixed diff code block scrolling, etc.

## 1.1.0 · 2026-04-09

### New Features

- **Free code completion**: All users can now use AI code completion for free without additional configuration
- **Significantly upgraded built-in browser**: Supports device simulation (mobile/tablet preview), dynamic tab titles and icons, zoom control, optimized CSS inspector, and real-time recording of animation/transition events
- **Smarter conversation memory**: New automatic de-duplication and merging mechanism so the AI recalls previous content more accurately and avoids duplicate storage
- **Sidebar toggle button**: A quick sidebar toggle button added to the title bar
- **Task list optimization**: Supports task merging, priority sorting, and new transition animations
- **Redesigned team dashboard**: Brand-new dark theme design and faster page loading
- **Lazy loading of conversation messages**: Long histories are no longer loaded all at once, resulting in faster opening
- **API cache mechanism**: Added Responses API cache to reduce duplicate requests and save tokens

### Improvements

- Editor backend upgrade: Electron upgraded to 41.2.0, TypeScript to 6.0, for more stable and smooth operation
- Redesigned AI tool invocation interface: unified card styles for file operations, MCP tools, etc.
- Code diff optimization: fixed scrolling in collapsed state, horizontal scrollbars, and background color display
- System notification optimization: avoid duplicate pushes, no disconnection reports when minimizing
- Terminal command detection optimization: more accurately identify whether commands have run
- Improved startup performance: optimized startup flow and conversation list rendering
- Prevent background memory overflow: automatically clean up accumulated memory during long-term operation

### Fixes

- Fixed queued messages possibly being sent to the wrong thread when switching conversation threads
- Fixed deleting an image attachment possibly deleting other file attachments
- Fixed the background process continuing to run after an AI response timeout
- Fixed the TrustedHTML compatibility issue causing blank pages
- Fixed clicking links in the built-in browser failing to open new pages correctly
- Fixed option buttons occasionally not appearing when asking AI questions
- Fixed misaligned editor tab icons

## 1.0.9 · 2026-04-03

### New Features

- **Built-in browser automation**: Integrated CDP browser tools (screenshot, click, input, navigation, DOM snapshot, console log); the AI Agent can directly operate browser pages
- **Device viewport simulation**: The built-in browser supports simulating different device resolutions (mobile/tablet/desktop), with a scrollable device list
- **Browser tab management**: Dynamic tab title/icon, zoom control, multi-tab switching, quick open of the input-box browser panel
- **Multi-tool parallel invocation**: Supports the AI returning multiple tool invocations for parallel execution at once
- **Title bar sidebar toggle button**
- **Entanglement panel switching**: Supports independent panel switching with automatic alignment when adjusting the sidebar

### Fixes

- Terminal command completion detection: Enabled OSC 633;D protocol, fixed ANSI cleaning, accelerated heuristic judgment
- Teammate system notification suppression: Sub-threads no longer send irrelevant notifications to the OS
- Entanglement mode override: User-selected entanglement mode is no longer silently overridden by schedule mode
- Intent leakage: Intent labels in entanglement causal mode no longer leak to displayed text

### Optimizations

- Startup performance: Chat O(n) optimization, diff statistics persistence
- Terminal tool UI: Title bar/bottom bar inner-margin optimization, "Open in Browser" button corner-radius correction
- Browser panel positioning: Use floating-ui to eliminate jitter/offset when opening
