You can change claude settings via ==.claude/settings.json== file:
```json
{
	"env": {
		"CLAUDE_CODE_HIDE_ACCOUNT_INFO": "1"
	},
	"permission": {
		"deny": [
			"Bash(**/.env)",
			"Read(**/.env)",
			"Write(**/.env)"
		]
	},
	"model": "opus",
	"alwaysThinkingEnabled": false
}
```

Just like AWS IAM permissions, you can alter claude's permissions via this file.
# General Information
- **@filename:** include a specific file in
- **plan mode:** Creates an execution plan before starting to change some code. 
Gathers relevant information about your prompt, asks follow up questions for clarification if needed.
- **subagents:** Claude will delegate tasks within its subagents automatically.
> [!question] How to create subagents?
> .claude/agents/agent_name.md

- **skills:** Provides ==extra, dynamically loaded context== to agents.
- **hooks:** When claude performs some action, run a:
	- prompt
	- agent
	- command
for example, run a formatter (via command) after claude finishes writing code.
# Best Practices
## SPEC.md
Contains information about ==specifications of the project== that you are building.
## CLAUDE.md
General instructions for claude. Included in every **session**.
## SKILL.md
Provides extra context to agents.
They are discovered and loaded **dynamically**.
For example:
	There is a certain way that you manage git commands in your project.
	You stash your changes first, pull the repo, and then merge the code in your local.
	 You would write a skill for that called "git-pusher".

- How to add SKILL.md file:
 .claude/skills/(skill_name)/SKILL.md

- You can also additional files for agent to use when it uses that skill (or just a part of the skill):
I have a skill called =="modern-react-best-practices"==.
In the SKILL.md file, I have a specific section for "useeffect".
I can put another md file for this task only, in this path:
- skills/modern-react-best-practices/references/useeffect-practices.md
# An Example Project

# Commands Cheat Sheet

- **/clear:** Start a new, clear session. Clear the context as well.
- **/context:** See the current session's context.
- **/resume:** Continue from an existing session.
- **claude -c:** Continue from the last session.
- **Shift + Tab:** Switch modes.
- **claude --dangerously-skip-permissions:** Accepts all permissions automatically.
- **/init:** Creates CLAUDE.MD file with codebase documentation.

![[Pasted image 20260512132517.png]]