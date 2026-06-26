---
title: Dialog Box Overview
description: Overview of the Breezell dialog box, including mentions, context usage, mode selection, model controls, and quick actions.
---

# Dialog Box Overview

The Breezell dialog box is the main place where you write prompts, choose a working mode, select a model, attach context, and control how the agent handles the current request.

This page explains the visible controls shown in the dialog box screenshots.

## Default Input State

The default input state is the normal starting point for a new message. It keeps the prompt field and essential controls visible.

![Default input state](/dialog-box/input-default.png)

Type your request, choose the mode and model if needed, then send the message to Breezell.

## Mention Menu

The pointer highlights the quick context area used to open the mention menu. The mention menu lets you add files, folders, MCP tools, and skills to the current message.

![Mention menu in the Breezell dialog box](/dialog-box/mention-menu.png)

Use this when your request depends on specific workspace content or an external capability. Adding the right context helps Breezell understand what it should inspect or use before answering.

## Context Manual Compression

The pointer highlights the **Manual compress** control in the context panel. This action summarizes earlier conversation content so the session can keep useful information while reducing context usage.

![Context panel with manual compression](/dialog-box/context-manual-compress.png)

Manual compression is useful during long conversations, especially when the context window is becoming large but you still want to continue in the same session.

## Context Usage Breakdown

The pointer highlights the context usage indicator. Opening it shows a detailed breakdown of how the current context window is being used.

![Context usage breakdown](/dialog-box/context-usage-breakdown.png)

The breakdown separates usage into categories such as system prompt, tools, rules, memories, skills, MCP, subagents, and conversation content. Use it to understand which parts of the session are consuming the most tokens.

## Slash Command Shortcut

The pointer highlights the slash shortcut near the input area. This shortcut is used to open command-style actions from the dialog box.

![Slash command shortcut](/dialog-box/input-agent-basic.png)

Use it when you want to quickly access available input commands without leaving the current message box.

## Mention Shortcut

The pointer highlights the `@` shortcut. This shortcut opens the mention workflow for adding files, folders, or other supported context sources.

![Mention shortcut](/dialog-box/input-tools-expanded.png)

Use it when you need to attach a specific project file, folder, tool, or skill to the next request.

## Mode Control

The pointer highlights the current working mode control. In this example, the selected mode is **Agent**.

![Mode control](/dialog-box/input-model-controls.png)

Click this control to change how Breezell should handle the next request. The selected mode determines whether Breezell answers directly, plans first, analyzes without editing, or works autonomously with tools.

## Model Selector

The pointer highlights the model selector. The selector shows the current model and lets you switch to another available model before sending the message.

![Model selector](/dialog-box/input-compact-controls.png)

Use this when you want to choose a model with different speed, reasoning, or capability characteristics.

## Mode Selector Menu

The pointer highlights the mode selector menu. This menu lists the available working modes.

![Mode selector menu](/dialog-box/mode-selector.png)

Available modes include:

- **Chat** for quick questions and answers
- **Plan** for implementation planning before editing
- **Analyze** for read-only investigation
- **Entanglement** for deeper causal reasoning
- **Agent** for autonomous file edits and tool usage
- **Teams** for parallel AI teammates on complex tasks

Choose the mode that matches the amount of autonomy and depth you need.

## Usage Tips

- Add file or folder context when the request depends on specific project content.
- Check context usage during long conversations.
- Use manual compression when the context window becomes large.
- Select the mode before sending the message so Breezell handles the task with the right workflow.
- Review the selected model when accuracy, speed, or reasoning depth matters.