/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

/* eslint-disable max-len */

/**
 * @typedef {Object} OptionsConfig
 * @prop {string} [project] The name of the project used in the sharing link
 * @prop {string} [giturl] The url to the repository
 * @prop {string[]} [mountpoints] The content source URL
 * @prop {string} [previewHost] The host name of a custom preview CDN
 * @prop {string} [liveHost] The host name of a custom live CDN
 * @prop {string} [host] The production host name to publish content to
 * @prop {boolean} [devMode] Loads configuration and plugins from the development environment
 * @prop {string} [devOrigin] URL of the local development environment
 * @prop {string} [adminVersion] The specific version of admin service to use
 * @prop {boolean} [hlx5] Using helix 5?
 * @prop {boolean} [disabled] Is the project disabled?
 * @description Represents the sidekick configuration from the user via the options view
 */

/**
 * @private
 * @typedef {Object} OptionsDerivedConfig
 * @prop {string} [id] The project id
 * @prop {string} owner The GitHub owner or organization
 * @prop {string} repo The GitHub repo
 * @prop {string} ref The Git reference or branch
 * @prop {string} [authToken] The Git reference or branch
 * @description The derived sidekick configuration from options.
 */

/**
 * @typedef {OptionsConfig & OptionsDerivedConfig } SidekickOptionsConfig
 */

/**
 * @typedef {Object} RepositoryConfig
 * @prop {string} [project] The name of the project used in the sharing link (optional)
 * @prop {string} [host] The production host name to publish content to (optional)
 * @prop {Plugin[]} [plugins] An array of {@link Plugin|plugin configurations} (optional)
 * @prop {ViewConfig[]} [specialViews] An array of custom {@link ViewConfig|view configurations}
 * @description The configuration file from the respository `config.json`.
 */

/**
 * @private
 * @typedef {Object} SidekickDerivedConfig
 * @prop {string} [mountpoint] The content source URL
 * @prop {string} [innerHost] The host name of a custom preview CDN (optional)
 * @prop {string} [stdInnerHost] The host name of a custom live CDN (optional)
 * @prop {string} [outerHost] Loads configuration and plugins from the development environment
 * @prop {string} [stdOuterHost] URL of the local development environment
 * @prop {string} [scriptRoot] URL of the local development environment
 * @prop {string} [lang] URL of the local development environment
 * @prop {ViewConfig[]} [views] An array of custom {@link ViewConfig|view configurations}
 * @description The derived sidekick configuration after loadContext.
 */

/**
 * @typedef {SidekickOptionsConfig & SidekickDerivedConfig} SidekickConfig
 */

/**
 * @typedef {Object} Plugin
 * @prop {string} id The plugin ID (mandatory)
 * @prop {string} title The button text
 * @prop {Object} titleI18n A map of translated button texts (default: {})
 * @prop {string} url The URL to open when the button is clicked
 * @prop {boolean} passConfig Append additional sk info to the url as query parameters: ref, repo, owner, host, project
 * @prop {boolean} passReferrer Append the referrer URL as a query param on new URL button click. Note: Plugin events get a custom: prefix, e.g. "foo" becomes "custom:foo".
 * @prop {string} containerId The ID of a dropdown to add this plugin to (optional)
 * @prop {boolean} isContainer Determines whether to turn this plugin into a dropdown
 * @prop {boolean} isPalette Determines whether a URL is opened in a palette instead of a new tab
 * @prop {string} paletteRect The dimensions and position of a palette (optional)
 * @prop {string[]} environments Specifies when to show this plugin (admin, edit, dev, preview, live, prod)
 * @prop {string[]} excludePaths Exclude the plugin from these paths (glob patterns supported)
 * @prop {string[]} includePaths Include the plugin on these paths (glob patterns supported)
 * @description The plugin configuration.
 */

/**
 * @typedef {Object} ViewConfig
 * @prop {string} [id] The unique view ID
 * @prop {string} path The path or globbing pattern where to apply this view
 * @prop {string} viewer The URL to render this view
 * @prop {string | function} [title] The title of the view
 * @description A custom view configuration.
 */

export const Types = {};
