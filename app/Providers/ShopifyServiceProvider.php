<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Shopify\Auth\FileSessionStorage;
use Shopify\Context;

class ShopifyServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $apiKey = env('SHOPIFY_API_KEY');
        $apiSecretKey = env('SHOPIFY_API_SECRET'); 
        Context::initialize(
            apiKey: $apiKey,
            apiSecretKey: $apiSecretKey,
            scopes: env('SCOPES'), 
            hostName: env('SHOPIFY_APP_HOST_NAME'), 
            sessionStorage: new FileSessionStorage(storage_path('framework/sessions')),
            apiVersion: '2024-07',
            isEmbeddedApp: true,
            isPrivateApp: false,
        );
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
