(function initWebMCP() {
  if (
    typeof navigator === 'undefined' ||
    !navigator.modelContext ||
    typeof navigator.modelContext.provideContext !== 'function'
  ) {
    return;
  }

  const BASE_API = 'https://manaret-ezz.dramcode.top/api';

  navigator.modelContext.provideContext({
    name: 'Manarat Al-Ezz Educational Platform',
    description:
      'Tools for interacting with the Manarat Al-Ezz Islamic educational platform — browse courses, check schedules, and access student resources.',
    tools: [
      {
        name: 'list_courses',
        description:
          'List all available courses on the platform including Quran, Arabic language, and Islamic Studies.',
        inputSchema: {
          type: 'object',
          properties: {
            category: {
              type: 'string',
              enum: ['quran', 'arabic', 'islamic_studies', 'all'],
              description: 'Filter courses by category',
            },
          },
          required: [],
        },
        execute: async ({ category = 'all' }) => {
          const url = new URL(`${BASE_API}/courses`);
          if (category !== 'all') {
            url.searchParams.set('category', category);
          }
          const response = await fetch(url.toString(), {
            headers: { Accept: 'application/json' },
          });
          if (!response.ok) {
            throw new Error(`Failed to fetch courses: ${response.status}`);
          }
          return response.json();
        },
      },
      {
        name: 'get_platform_info',
        description:
          'Get general information about the Manarat Al-Ezz platform, its mission, and contact details.',
        inputSchema: {
          type: 'object',
          properties: {},
          required: [],
        },
        execute: async () => ({
          name: 'منارة العز | Manarat Al-Ezz',
          description:
            'Integrated educational management platform for Quran recitation, Arabic language, and Islamic studies.',
          website: 'https://manarat-al-ezz.com/',
          apiBase: BASE_API,
          authDocs: 'https://manarat-al-ezz.com/auth.md',
          apiCatalog: 'https://manarat-al-ezz.com/.well-known/api-catalog',
          agentSkills: 'https://manarat-al-ezz.com/.well-known/agent-skills/index.json',
          mcpCard: 'https://manarat-al-ezz.com/.well-known/mcp/server-card.json',
          contact: 'info@manaratezz.edu.sa',
          languages: ['ar', 'en'],
        }),
      },
      {
        name: 'navigate_to_section',
        description:
          'Navigate the browser to a specific section of the platform.',
        inputSchema: {
          type: 'object',
          properties: {
            section: {
              type: 'string',
              enum: ['home', 'login', 'dashboard', 'courses', 'schedule'],
              description: 'The section to navigate to',
            },
          },
          required: ['section'],
        },
        execute: ({ section }) => {
          const routes = {
            home: '/',
            login: '/login',
            dashboard: '/dashboard',
            courses: '/courses',
            schedule: '/schedule',
          };
          const path = routes[section] ?? '/';
          window.location.href = path;
          return { navigated: true, section, path };
        },
      },
    ],
  });
})();
