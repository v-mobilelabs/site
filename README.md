# Marketing Website Project

This is a [Next.js](https://nextjs.org/) project built as a marketing website, integrating content from Ghost CMS and employee data from Zoho People.

## Project Overview

This website serves as the main marketing platform, featuring:

- **Blog:** Powered by a headless [Ghost CMS](https://ghost.org/).
- **Authors:** Managed within Ghost, linked to blog posts.
- **Employees:** Fetched dynamically from the [Zoho People API](https://www.zoho.com/people/api/).
- **Contact Form:** Integrated with [HubSpot CRM](https://www.hubspot.com/).
- Standard pages like Home, About, Services, Privacy, and Terms.

## Technology Stack

- **Framework:** [Next.js](https://nextjs.org/) (using App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **CMS (Blog/Authors):** [Ghost CMS](https://ghost.org/) (Headless via Content API & Admin API)
- **HRMS (Employees):** [Zoho People API](https://www.zoho.com/people/api/)
- **CRM (Contact):** [HubSpot API](https://developers.hubspot.com/docs/api/overview)
- **Deployment:** [Vercel](https://vercel.com/)
- **Package Manager:** [pnpm](https://pnpm.io/)
- **Testing:** [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

## Getting Started

### Prerequisites

- Node.js (Check `.nvmrc` or `package.json` engines field for version)
- pnpm (`npm install -g pnpm`)
- Access credentials for Ghost (Content API Key, Admin API Key), Zoho People API, and HubSpot API.
- A running Ghost instance (self-hosted on Digital Ocean or Ghost Pro).

### Installation

1.  Clone the repository:
    ```bash
    git clone <your-repository-url>
    cd <repository-directory>
    ```
2.  Install dependencies:
    ```bash
    pnpm install
    ```

### Environment Variables

This project requires several environment variables to connect to external services.

1.  Copy the example environment file:
    ```bash
    cp .env.example .env.local
    ```
2.  Fill in the required values in `.env.local`. **Never commit `.env.local` to Git.**

    ```ini
    # Ghost CMS Configuration
    GHOST_URL=https://your-ghost-instance.com
    GHOST_CONTENT_API_KEY=your_ghost_content_api_key
    GHOST_ADMIN_API_KEY=your_ghost_admin_api_key # Needed for Zoho->Ghost sync

    # Zoho People API Configuration
    ZOHO_PEOPLE_API_AUTH_TOKEN=your_zoho_auth_token # Or other auth details as needed
    ZOHO_PEOPLE_API_ENDPOINT=https://people.zoho.com/people/api # Adjust if needed

    # HubSpot API Configuration
    HUBSPOT_API_KEY=your_hubspot_api_key # Or OAuth token
    HUBSPOT_PORTAL_ID=your_hubspot_portal_id
    HUBSPOT_FORM_ID=your_contact_form_guid

    # Optional: Secret for securing Zoho Webhook endpoint
    ZOHO_WEBHOOK_SECRET=a_very_strong_secret_key
    ```

### Running the Development Server

1.  Start the development server:
    ```bash
    pnpm dev
    ```
2.  Open http://localhost:3000 with your browser to see the result.

The page auto-updates as you edit files in the `src` directory.

## Testing

This project uses Jest and React Testing Library for unit and integration tests.

1.  Run all tests:
    ```bash
    pnpm test
    ```
2.  Run tests in watch mode:
    ```bash
    pnpm test:watch
    ```
3.  Generate a coverage report (output in the `coverage/` directory):
    ```bash
    pnpm run coverage
    ```
    Open `coverage/lcov-report/index.html` to view the detailed HTML report.

## Deployment

The easiest way to deploy this Next.js app is to use the Vercel Platform.

1.  Push your code to a Git repository (GitHub, GitLab, Bitbucket).
2.  Import the project into Vercel.
3.  **Configure Environment Variables:** Add all the variables listed in `.env.example` to your Vercel project settings.
4.  Vercel will automatically build and deploy your site. Subsequent pushes to the connected branch will trigger new deployments.

Check out the Next.js deployment documentation for more details.

## Learn More About Next.js

To learn more about Next.js, take a look at the following resources:

- Next.js Documentation - learn about Next.js features and API.
- Learn Next.js - an interactive Next.js tutorial.

You can check out the Next.js GitHub repository - your feedback and contributions are welcome!
