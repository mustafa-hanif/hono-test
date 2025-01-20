"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const metadata = {
    models: {
        competition: {
            name: 'competition', fields: {
                active: {
                    name: "active",
                    type: "Boolean",
                    attributes: [{ "name": "@default", "args": [{ "value": false }] }],
                }, created: {
                    name: "created",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [{ "value": "strftime('%Y-%m-%d %H:%M:%fZ')" }] }],
                }, id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [{ "value": "'r'||lower(hex(randomblob(7)))" }] }],
                }, pause: {
                    name: "pause",
                    type: "Boolean",
                    attributes: [{ "name": "@default", "args": [{ "value": false }] }],
                }, updated: {
                    name: "updated",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [{ "value": "strftime('%Y-%m-%d %H:%M:%fZ')" }] }],
                }, ended: {
                    name: "ended",
                    type: "Boolean",
                    attributes: [{ "name": "@default", "args": [{ "value": false }] }],
                },
            },
            uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            },
            attributes: [{ "name": "@@allow", "args": [{ "value": "all" }, { "value": true }] }],
        },
        days: {
            name: 'days', fields: {
                created: {
                    name: "created",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [{ "value": "strftime('%Y-%m-%d %H:%M:%fZ')" }] }],
                }, description: {
                    name: "description",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [{ "value": "" }] }],
                }, id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [{ "value": "'r'||lower(hex(randomblob(7)))" }] }],
                }, name: {
                    name: "name",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [{ "value": "" }] }],
                }, updated: {
                    name: "updated",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [{ "value": "strftime('%Y-%m-%d %H:%M:%fZ')" }] }],
                }, active: {
                    name: "active",
                    type: "Boolean",
                    attributes: [{ "name": "@default", "args": [{ "value": false }] }],
                },
            },
            uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            },
            attributes: [{ "name": "@@allow", "args": [{ "value": "all" }, { "value": true }] }],
        },
        headings: {
            name: 'headings', fields: {
                created: {
                    name: "created",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [{ "value": "strftime('%Y-%m-%d %H:%M:%fZ')" }] }],
                }, id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [] }],
                }, name: {
                    name: "name",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [{ "value": "" }] }],
                }, updated: {
                    name: "updated",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [{ "value": "strftime('%Y-%m-%d %H:%M:%fZ')" }] }],
                }, day: {
                    name: "day",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [{ "value": "" }] }],
                }, active: {
                    name: "active",
                    type: "Boolean",
                    attributes: [{ "name": "@default", "args": [{ "value": false }] }],
                }, heading_number: {
                    name: "heading_number",
                    type: "Decimal",
                    attributes: [{ "name": "@default", "args": [{ "value": 0 }] }],
                },
            },
            uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            },
            attributes: [{ "name": "@@allow", "args": [{ "value": "all" }, { "value": true }] }],
        },
        stocks: {
            name: 'stocks', fields: {
                bank_name: {
                    name: "bank_name",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [{ "value": "" }] }],
                }, created: {
                    name: "created",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [{ "value": "strftime('%Y-%m-%d %H:%M:%fZ')" }] }],
                }, id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [{ "value": "'r'||lower(hex(randomblob(7)))" }] }],
                }, updated: {
                    name: "updated",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [{ "value": "strftime('%Y-%m-%d %H:%M:%fZ')" }] }],
                },
            },
            uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            },
            attributes: [{ "name": "@@allow", "args": [{ "value": "all" }, { "value": true }] }],
        },
        stocks_headings: {
            name: 'stocks_headings', fields: {
                created: {
                    name: "created",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [{ "value": "strftime('%Y-%m-%d %H:%M:%fZ')" }] }],
                }, headings: {
                    name: "headings",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [{ "value": "" }] }],
                }, id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [{ "value": "'r'||lower(hex(randomblob(7)))" }] }],
                }, stocks: {
                    name: "stocks",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [{ "value": "" }] }],
                }, updated: {
                    name: "updated",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [{ "value": "strftime('%Y-%m-%d %H:%M:%fZ')" }] }],
                }, previous_price: {
                    name: "previous_price",
                    type: "Decimal",
                    attributes: [{ "name": "@default", "args": [{ "value": 0 }] }],
                }, current_price: {
                    name: "current_price",
                    type: "Decimal",
                    attributes: [{ "name": "@default", "args": [{ "value": 0 }] }],
                }, change_in_price: {
                    name: "change_in_price",
                    type: "Decimal",
                    attributes: [{ "name": "@default", "args": [{ "value": 0 }] }],
                }, percentage_change_in_price: {
                    name: "percentage_change_in_price",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [{ "value": "" }] }],
                },
            },
            uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            },
            attributes: [{ "name": "@@allow", "args": [{ "value": "all" }, { "value": true }] }],
        },
        stocks_users: {
            name: 'stocks_users', fields: {
                created: {
                    name: "created",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [{ "value": "strftime('%Y-%m-%d %H:%M:%fZ')" }] }],
                }, id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [{ "value": "'r'||lower(hex(randomblob(7)))" }] }],
                }, stocks: {
                    name: "stocks",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [{ "value": "" }] }],
                }, updated: {
                    name: "updated",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [{ "value": "strftime('%Y-%m-%d %H:%M:%fZ')" }] }],
                }, users: {
                    name: "users",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [{ "value": "" }] }],
                }, share_count: {
                    name: "share_count",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [{ "value": "" }] }],
                }, balance_when_shorting: {
                    name: "balance_when_shorting",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [{ "value": "" }] }],
                }, short_share_count: {
                    name: "short_share_count",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [{ "value": "" }] }],
                },
            },
            uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            },
            attributes: [{ "name": "@@allow", "args": [{ "value": "all" }, { "value": true }] }],
        },
        timer: {
            name: 'timer', fields: {
                active: {
                    name: "active",
                    type: "Boolean",
                    attributes: [{ "name": "@default", "args": [{ "value": false }] }],
                }, competition_end: {
                    name: "competition_end",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [{ "value": "" }] }],
                }, competition_start: {
                    name: "competition_start",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [{ "value": "" }] }],
                }, created: {
                    name: "created",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [{ "value": "strftime('%Y-%m-%d %H:%M:%fZ')" }] }],
                }, id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [{ "value": "'r'||lower(hex(randomblob(7)))" }] }],
                }, updated: {
                    name: "updated",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [{ "value": "strftime('%Y-%m-%d %H:%M:%fZ')" }] }],
                }, round_time: {
                    name: "round_time",
                    type: "Decimal",
                    attributes: [{ "name": "@default", "args": [{ "value": 0 }] }],
                },
            },
            uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            },
            attributes: [{ "name": "@@allow", "args": [{ "value": "all" }, { "value": true }] }],
        },
        users: {
            name: 'users', fields: {
                avatar: {
                    name: "avatar",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [{ "value": "" }] }],
                }, created: {
                    name: "created",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [{ "value": "strftime('%Y-%m-%d %H:%M:%fZ')" }] }],
                }, email: {
                    name: "email",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [{ "value": "" }] }],
                }, emailVisibility: {
                    name: "emailVisibility",
                    type: "Boolean",
                    attributes: [{ "name": "@default", "args": [{ "value": false }] }],
                }, id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [] }],
                }, name: {
                    name: "name",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [{ "value": "" }] }],
                }, password: {
                    name: "password",
                    type: "String",
                }, tokenKey: {
                    name: "tokenKey",
                    type: "String",
                    attributes: [{ "name": "@unique", "args": [{ "name": "map", "value": "__pb_users_auth__tokenKey_idx" }] }],
                }, updated: {
                    name: "updated",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [{ "value": "strftime('%Y-%m-%d %H:%M:%fZ')" }] }],
                }, username: {
                    name: "username",
                    type: "String",
                    attributes: [{ "name": "@unique", "args": [{ "name": "map", "value": "__pb_users_auth__username_idx" }] }],
                }, verified: {
                    name: "verified",
                    type: "Boolean",
                    attributes: [{ "name": "@default", "args": [{ "value": false }] }],
                }, type: {
                    name: "type",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [{ "value": "" }] }],
                }, wallet: {
                    name: "wallet",
                    type: "String",
                    attributes: [{ "name": "@default", "args": [{ "value": "" }] }],
                }, session: {
                    name: "session",
                    type: "session",
                    isDataModel: true,
                    isArray: true,
                    backLink: 'user',
                },
            },
            uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                }, tokenKey: {
                    name: "tokenKey",
                    fields: ["tokenKey"]
                }, username: {
                    name: "username",
                    fields: ["username"]
                },
            },
            attributes: [{ "name": "@@allow", "args": [{ "value": "all" }, { "value": true }] }],
        },
        session: {
            name: 'session', fields: {
                id: {
                    name: "id",
                    type: "String",
                    isId: true,
                    attributes: [{ "name": "@id", "args": [] }, { "name": "@default", "args": [{ "value": "" }] }],
                }, userId: {
                    name: "userId",
                    type: "String",
                    isForeignKey: true,
                    relationField: 'user',
                }, expiresAt: {
                    name: "expiresAt",
                    type: "String",
                }, user: {
                    name: "user",
                    type: "users",
                    isDataModel: true,
                    attributes: [{ "name": "@relation", "args": [] }],
                    backLink: 'session',
                    isRelationOwner: true,
                    foreignKeyMapping: { "id": "userId" },
                },
            },
            uniqueConstraints: {
                id: {
                    name: "id",
                    fields: ["id"]
                },
            },
            attributes: [{ "name": "@@allow", "args": [{ "value": "all" }, { "value": true }] }],
        },
    },
    deleteCascade: {},
};
exports.default = metadata;
