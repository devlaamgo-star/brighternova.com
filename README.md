# BrighterNova.com - Backup Guardian

A comprehensive backup management platform built with modern web technologies.

## Project info

**URL**: https://github.com/devlaamgo-star/brighternova.com

## Features

- **Forgot Password Functionality**: Enhanced with 30-second cooldown timer and popup notifications
- **Comprehensive Backup Management**: Full-featured backup solution interface
- **Modern UI/UX**: Built with shadcn-ui and Tailwind CSS
- **Responsive Design**: Works seamlessly across all devices

## Recent Updates

- ✅ Implemented forgot password resend functionality with cooldown timer
- ✅ Added popup notification when email is resent
- ✅ Button disable state during 30-second cooldown
- ✅ Auto-hide popup after 5 seconds
- ✅ Comprehensive testing and validation

## How can I edit this code?

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone https://github.com/devlaamgo-star/brighternova.com.git

# Step 2: Navigate to the project directory.
cd brighternova.com

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React** - Modern UI library
- **shadcn-ui** - Beautiful and accessible component library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

## Project Structure

```
src/
├── components/          # Reusable UI components
├── pages/              # Page components
│   ├── auth/          # Authentication pages
│   ├── jhelp/         # Help and documentation
│   ├── legal/         # Legal pages
│   └── setup-guides/  # Setup and configuration guides
├── hooks/             # Custom React hooks
└── lib/              # Utility functions
```

## How can I deploy this project?

You can deploy this project to various platforms:

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the build folder or connect via Git
- **GitHub Pages**: Use GitHub Actions for automated deployment

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin feature/new-feature`)
6. Create a new Pull Request

## License

This project is private and proprietary.
