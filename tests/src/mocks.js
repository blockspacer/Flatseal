/* eslint class-methods-use-this: */

/* mocks.js
 *
 * Copyright 2020-2021 Martin Abente Lahaye
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

const {GObject} = imports.gi;

const {portals} = imports.models;


/* XXX Seriously, UGH.... */

class MockFlatpakPortalsModel {
    _init() {
        this.appId = '';
    }

    getPermissions() {
        return {
            background: {
                version: '0.4.0',
                description: _('Background'),
                value: this.constructor.getDefault(),
                example: _('Can run in the background'),
                table: 'background',
                id: 'background',
            },
            notification: {
                version: '0.4.0',
                description: _('Notification'),
                value: this.constructor.getDefault(),
                example: _('Can send notifications'),
                table: 'notifications',
                id: 'notification',
            },
            microphone: {
                version: '0.4.0',
                description: _('Microphone'),
                value: this.constructor.getDefault(),
                example: _('Can access your microphone'),
                table: 'devices',
                id: 'microphone',
            },
            speakers: {
                version: '0.4.0',
                description: _('Speakers'),
                value: this.constructor.getDefault(),
                example: _('Can access your speakers'),
                table: 'devices',
                id: 'speakers',
            },
            camera: {
                version: '0.4.0',
                description: _('Camera'),
                value: this.constructor.getDefault(),
                example: _('Can access your camera'),
                table: 'devices',
                id: 'camera',
            },
            location: {
                version: '0.4.0',
                description: _('Location'),
                value: this.constructor.getDefault(),
                example: _('Can access your location'),
                table: 'devices',
                id: 'location',
            },
        };
    }

    static getType() {
        return 'state';
    }

    static getDefault() {
        return false;
    }

    static getStyle() {
        return 'portals';
    }

    static getGroup() {
        return 'portals';
    }

    static getTitle() {
        return 'Portals';
    }

    static getDescription() {
        return _('Provide selective access to resources');
    }

    updateFromProxyProperty(property, value) {
    }

    updateProxyProperty(proxy) {
    }

    restore(toDefaults = false) {
    }

    backup(proxy) {
    }

    changed(proxy) {
        return false;
    }

    saveToKeyFile() {
    }

    reset() {
    }
}

function setupMocks() {
    portals.getDefault = () => { return new MockFlatpakPortalsModel() };
}
