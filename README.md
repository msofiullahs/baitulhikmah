<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## Deploy Baitul Hikmah from GitHub to Plesk

Plesk serves the compiled Vue assets committed under `public/build`. Node 16.20.2 on Plesk can stay as-is. Build assets on a workstation with Node 22.12 or newer in the Node 22 release line and PHP 8.3 or 8.4.

### Prepare each release

From the repository root, with the application's Composer dependencies installed:

```sh
composer install
npm ci --include=dev
VITE_APP_NAME="Baitul Hikmah" npm run build:plesk
git add -A public/build
```

Commit the source changes and all changes under `public/build` together, including removed hashed files, then push to the GitHub branch configured in Plesk. Composer is needed before the build because the frontend imports Ziggy from `vendor`. Build with the production display name if it differs from the example.

### Configure Plesk once

1. Connect the GitHub repository in Laravel Toolkit and select the deployment branch. Set the domain document root to the application's `public` directory and select PHP 8.3 or 8.4.
2. Set up the server-side `.env` with `APP_ENV=production`, `APP_DEBUG=false`, the HTTPS `APP_URL`, database credentials, and `INERTIA_SSR_ENABLED=false`. Keep the existing `APP_KEY` when updating an installation. For a fresh installation, generate the key once after Composer installs the dependencies and before running the deployment script. Give the site user write access to `storage` and `bootstrap/cache`.
3. In **Laravel → Deployment**, keep **Install composer.json dependencies** enabled, turn **Install package.json dependencies** off, and turn **Run deployment script** on. In **Edit script**, paste the following. On Plesk for Linux, editing the script requires SSH access for the domain.

   ```sh
   PHP_BIN=/opt/plesk/php/8.3/bin/php sh deploy/plesk.sh
   ```

   For PHP 8.4, use the corresponding `8.4` path. If the domain shell uses a different path, set `PHP_BIN` to its PHP CLI executable or omit it if `php -v` already shows the domain's PHP version. The script runs from the application directory, clears stale config, applies pending migrations and rebuilds Laravel's caches.

4. Keep **Manual** selected for the first deployment. Back up an existing production database before applying pending migrations. Click **Deploy**, then confirm the homepage, login page, and a public upload load over HTTPS. For push-to-deploy, add the webhook URL from the Plesk Deployment tab to GitHub for **push events**, then switch Plesk to **Automatic**.

[Plesk Laravel Toolkit documentation](https://docs.plesk.com/en-US/obsidian/administrator-guide/website-management/laravel-toolkit.80010/)

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

In addition, [Laracasts](https://laracasts.com) contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

You can also watch bite-sized lessons with real-world projects on [Laravel Learn](https://laravel.com/learn), where you will be guided through building a Laravel application from scratch while learning PHP fundamentals.

## Agentic Development

Laravel's predictable structure and conventions make it ideal for AI coding agents like Claude Code, Cursor, and GitHub Copilot. Install [Laravel Boost](https://laravel.com/docs/ai) to supercharge your AI workflow:

```bash
composer require laravel/boost --dev

php artisan boost:install
```

Boost provides your agent 15+ tools and skills that help agents build Laravel applications while following best practices.

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
