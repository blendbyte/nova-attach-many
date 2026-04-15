# Nova Attach Many

[![Latest Version on Packagist](https://img.shields.io/packagist/v/blendbyte/nova-attach-many.svg?style=flat-square)](https://packagist.org/packages/blendbyte/nova-attach-many)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)

BelongsToMany create & edit form UI for Laravel Nova. Enables attaching relationships easily and includes validation.

Forked from [dillingham/nova-attach-many](https://github.com/dillingham/nova-attach-many).

![attach-many](https://user-images.githubusercontent.com/29180903/52160651-be7fd580-2687-11e9-9ece-27332b3ce6bf.png)

## Installation

```bash
composer require blendbyte/nova-attach-many
```

## Quick Start

```php
use NovaAttachMany\AttachMany;

public function fields(Request $request)
{
    return [
        AttachMany::make('Permissions'),
    ];
}
```

You can explicitly define the relationship & Nova resource:

```php
AttachMany::make('Field Name', 'relationshipName', RelatedResource::class);
```

## Pivot Values

You can pass additional parameters for any pivot value. See the Laravel docs on [syncing associations](https://laravel.com/docs/eloquent-relationships#syncing-associations) for details.

```php
AttachMany::make('Field Name', 'relationshipName', RelatedResource::class, ['pivot_name' => value]);
```

## Display on Detail

This package only provides the create/edit views that BelongsToMany does not. Use BelongsToMany for displaying the table on detail views:

```php
public function fields(Request $request)
{
    return [
        AttachMany::make('Permissions'),
        BelongsToMany::make('Permissions'),
    ];
}
```

## Validation

You can set min, max, size or custom rule objects:

```php
->rules('min:5', 'max:10', 'size:10', new CustomRule)
```

![validation example](https://user-images.githubusercontent.com/29180903/52160802-9ee9ac80-2689-11e9-9657-80e3c0d83b27.png)

## Options

| Method              | Description                        |
|---------------------|------------------------------------|
| `->showCounts()`    | Shows "selected / total"           |
| `->showPreview()`   | Shows only selected items          |
| `->hideToolbar()`   | Removes search & select all        |
| `->height('500px')` | Set custom height                  |
| `->fullWidth()`     | Set to full width                  |
| `->showRefresh()`   | Request the resources again        |
| `->showSubtitle()`  | Show the resource's subtitle       |
| `->help('<b>Tip:</b> help text')` | Set the help text |

![all options demo](https://user-images.githubusercontent.com/29180903/53781117-6978ee80-3ed5-11e9-8da4-d2f2408f1ffb.png)

## Relatable

The attachable resources will be filtered by `relatableQuery()`, so you can control which resources are available for attachment.

## Being Notified of Changes

Add a method to the resource to be notified of sync changes. The method must be a camel-cased version of the attribute name, followed by `Synced`:

```php
public function fields(Request $request)
{
    return [
        AttachMany::make('Permissions'),
    ];
}

public function permissionsSynced(array $changes)
{
    $changes['attached']; // IDs of attached models
    $changes['detached']; // IDs of detached models
    $changes['updated'];  // IDs of updated models
}
```

## Authorization

This field respects policies. For example, with a Role / Permission setup:

- `RolePolicy`: `attachAnyPermission($user, $role)`
- `RolePolicy`: `attachPermission($user, $role, $permission)`
- `PermissionPolicy`: `viewAny($user)`

---

## Maintained by Blendbyte

<a href="https://www.blendbyte.com">
  <img src="https://avatars.githubusercontent.com/u/69378377?s=200&v=4" alt="Blendbyte" width="80" align="left" style="margin-right: 16px;">
</a>

This project is maintained by **[Blendbyte](https://www.blendbyte.com)** — a team of engineers with 20+ years of experience building cloud infrastructure, web applications, and developer tools. We use these packages in production ourselves and actively contribute to the open source ecosystem we rely on every day. Issues and PRs are always welcome.

🌐 [blendbyte.com](https://www.blendbyte.com) · 📧 [hello@blendbyte.com](mailto:hello@blendbyte.com)

<br clear="left">
