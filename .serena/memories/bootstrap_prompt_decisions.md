# Bootstrap Prompt Decisions

- User decided that the normal Framework usage assumption is that the AI agent can access GitHub, read the Framework repository, and download/clone it into the target project environment.
- The Framework should not add extra fallback mechanisms for AI/GitHub access limitations at this stage. If a real AI agent later cannot access GitHub, read the repository, or download it, the user will report the concrete limitation and the Framework can then be adapted.
- The canonical bootstrap prompt already exists in `ai_development/bootstrap-prompt.md` and is intended to be copied from the Framework repository and pasted into the AI agent working in the target project.
- The prompt explicitly references the Framework repository URL and directs the AI to read `AI_BOOTSTRAP.md`, then discover the relevant AI Development instructions, Bootstrap/Installation Procedure, Blueprints, Software Standards, and versions. The user should not need to manually specify Blueprint or Standard files.
- The intended operational flow is: copy bootstrap prompt from Framework repo -> paste into AI in target project -> AI accesses Framework repo -> reads `AI_BOOTSTRAP.md` -> discovers Procedures/Blueprints/Standards/Versions -> inspects target project -> performs the appropriate onboarding/install/update flow.
- User prefers to call the overall project simply `Framework` rather than `SES Framework` in conversation.
