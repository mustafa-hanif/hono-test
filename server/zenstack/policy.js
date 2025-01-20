"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const policy = {
    policy: {
        competition: {
            modelLevel: {
                read: {
                    guard: competition_read,
                },
                create: {
                    guard: competition_create, inputChecker: competition_create_input,
                },
                update: {
                    guard: competition_update,
                },
                postUpdate: {
                    guard: competition_postUpdate,
                },
                delete: {
                    guard: competition_delete,
                }
            },
            fieldLevel: {
                read: {},
                update: {},
            },
        },
        days: {
            modelLevel: {
                read: {
                    guard: days_read,
                },
                create: {
                    guard: days_create, inputChecker: days_create_input,
                },
                update: {
                    guard: days_update,
                },
                postUpdate: {
                    guard: days_postUpdate,
                },
                delete: {
                    guard: days_delete,
                }
            },
            fieldLevel: {
                read: {},
                update: {},
            },
        },
        headings: {
            modelLevel: {
                read: {
                    guard: headings_read,
                },
                create: {
                    guard: headings_create, inputChecker: headings_create_input,
                },
                update: {
                    guard: headings_update,
                },
                postUpdate: {
                    guard: headings_postUpdate,
                },
                delete: {
                    guard: headings_delete,
                }
            },
            fieldLevel: {
                read: {},
                update: {},
            },
        },
        stocks: {
            modelLevel: {
                read: {
                    guard: stocks_read,
                },
                create: {
                    guard: stocks_create, inputChecker: stocks_create_input,
                },
                update: {
                    guard: stocks_update,
                },
                postUpdate: {
                    guard: stocks_postUpdate,
                },
                delete: {
                    guard: stocks_delete,
                }
            },
            fieldLevel: {
                read: {},
                update: {},
            },
        },
        stocks_headings: {
            modelLevel: {
                read: {
                    guard: stocks_headings_read,
                },
                create: {
                    guard: stocks_headings_create, inputChecker: stocks_headings_create_input,
                },
                update: {
                    guard: stocks_headings_update,
                },
                postUpdate: {
                    guard: stocks_headings_postUpdate,
                },
                delete: {
                    guard: stocks_headings_delete,
                }
            },
            fieldLevel: {
                read: {},
                update: {},
            },
        },
        stocks_users: {
            modelLevel: {
                read: {
                    guard: stocks_users_read,
                },
                create: {
                    guard: stocks_users_create, inputChecker: stocks_users_create_input,
                },
                update: {
                    guard: stocks_users_update,
                },
                postUpdate: {
                    guard: stocks_users_postUpdate,
                },
                delete: {
                    guard: stocks_users_delete,
                }
            },
            fieldLevel: {
                read: {},
                update: {},
            },
        },
        timer: {
            modelLevel: {
                read: {
                    guard: timer_read,
                },
                create: {
                    guard: timer_create, inputChecker: timer_create_input,
                },
                update: {
                    guard: timer_update,
                },
                postUpdate: {
                    guard: timer_postUpdate,
                },
                delete: {
                    guard: timer_delete,
                }
            },
            fieldLevel: {
                read: {},
                update: {},
            },
        },
        users: {
            modelLevel: {
                read: {
                    guard: users_read,
                },
                create: {
                    guard: users_create, inputChecker: users_create_input,
                },
                update: {
                    guard: users_update,
                },
                postUpdate: {
                    guard: users_postUpdate,
                },
                delete: {
                    guard: users_delete,
                }
            },
            fieldLevel: {
                read: {},
                update: {},
            },
        },
        session: {
            modelLevel: {
                read: {
                    guard: session_read,
                },
                create: {
                    guard: session_create, inputChecker: session_create_input,
                },
                update: {
                    guard: session_update,
                },
                postUpdate: {
                    guard: session_postUpdate,
                },
                delete: {
                    guard: session_delete,
                }
            },
            fieldLevel: {
                read: {},
                update: {},
            },
        },
    },
    validation: {
        competition: {
            hasValidation: false
        },
        days: {
            hasValidation: false
        },
        headings: {
            hasValidation: false
        },
        stocks: {
            hasValidation: false
        },
        stocks_headings: {
            hasValidation: false
        },
        stocks_users: {
            hasValidation: false
        },
        timer: {
            hasValidation: false
        },
        users: {
            hasValidation: false
        },
        session: {
            hasValidation: false
        },
    },
};
function competition_read(context, db) {
    return { AND: [] };
}
function $check_competition_read(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function competition_create(context, db) {
    return { AND: [] };
}
function $check_competition_create(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function competition_create_input(input, context) {
    return true;
}
function competition_update(context, db) {
    return { AND: [] };
}
function $check_competition_update(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function competition_postUpdate(context, db) {
    return { AND: [] };
}
function $check_competition_postUpdate(input, context) {
    return true;
}
function competition_delete(context, db) {
    return { AND: [] };
}
function $check_competition_delete(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function days_read(context, db) {
    return { AND: [] };
}
function $check_days_read(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function days_create(context, db) {
    return { AND: [] };
}
function $check_days_create(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function days_create_input(input, context) {
    return true;
}
function days_update(context, db) {
    return { AND: [] };
}
function $check_days_update(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function days_postUpdate(context, db) {
    return { AND: [] };
}
function $check_days_postUpdate(input, context) {
    return true;
}
function days_delete(context, db) {
    return { AND: [] };
}
function $check_days_delete(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function headings_read(context, db) {
    return { AND: [] };
}
function $check_headings_read(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function headings_create(context, db) {
    return { AND: [] };
}
function $check_headings_create(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function headings_create_input(input, context) {
    return true;
}
function headings_update(context, db) {
    return { AND: [] };
}
function $check_headings_update(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function headings_postUpdate(context, db) {
    return { AND: [] };
}
function $check_headings_postUpdate(input, context) {
    return true;
}
function headings_delete(context, db) {
    return { AND: [] };
}
function $check_headings_delete(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function stocks_read(context, db) {
    return { AND: [] };
}
function $check_stocks_read(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function stocks_create(context, db) {
    return { AND: [] };
}
function $check_stocks_create(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function stocks_create_input(input, context) {
    return true;
}
function stocks_update(context, db) {
    return { AND: [] };
}
function $check_stocks_update(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function stocks_postUpdate(context, db) {
    return { AND: [] };
}
function $check_stocks_postUpdate(input, context) {
    return true;
}
function stocks_delete(context, db) {
    return { AND: [] };
}
function $check_stocks_delete(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function stocks_headings_read(context, db) {
    return { AND: [] };
}
function $check_stocks_headings_read(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function stocks_headings_create(context, db) {
    return { AND: [] };
}
function $check_stocks_headings_create(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function stocks_headings_create_input(input, context) {
    return true;
}
function stocks_headings_update(context, db) {
    return { AND: [] };
}
function $check_stocks_headings_update(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function stocks_headings_postUpdate(context, db) {
    return { AND: [] };
}
function $check_stocks_headings_postUpdate(input, context) {
    return true;
}
function stocks_headings_delete(context, db) {
    return { AND: [] };
}
function $check_stocks_headings_delete(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function stocks_users_read(context, db) {
    return { AND: [] };
}
function $check_stocks_users_read(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function stocks_users_create(context, db) {
    return { AND: [] };
}
function $check_stocks_users_create(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function stocks_users_create_input(input, context) {
    return true;
}
function stocks_users_update(context, db) {
    return { AND: [] };
}
function $check_stocks_users_update(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function stocks_users_postUpdate(context, db) {
    return { AND: [] };
}
function $check_stocks_users_postUpdate(input, context) {
    return true;
}
function stocks_users_delete(context, db) {
    return { AND: [] };
}
function $check_stocks_users_delete(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function timer_read(context, db) {
    return { AND: [] };
}
function $check_timer_read(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function timer_create(context, db) {
    return { AND: [] };
}
function $check_timer_create(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function timer_create_input(input, context) {
    return true;
}
function timer_update(context, db) {
    return { AND: [] };
}
function $check_timer_update(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function timer_postUpdate(context, db) {
    return { AND: [] };
}
function $check_timer_postUpdate(input, context) {
    return true;
}
function timer_delete(context, db) {
    return { AND: [] };
}
function $check_timer_delete(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function users_read(context, db) {
    return { AND: [] };
}
function $check_users_read(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function users_create(context, db) {
    return { AND: [] };
}
function $check_users_create(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function users_create_input(input, context) {
    return true;
}
function users_update(context, db) {
    return { AND: [] };
}
function $check_users_update(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function users_postUpdate(context, db) {
    return { AND: [] };
}
function $check_users_postUpdate(input, context) {
    return true;
}
function users_delete(context, db) {
    return { AND: [] };
}
function $check_users_delete(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function session_read(context, db) {
    return { AND: [] };
}
function $check_session_read(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function session_create(context, db) {
    return { AND: [] };
}
function $check_session_create(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function session_create_input(input, context) {
    return true;
}
function session_update(context, db) {
    return { AND: [] };
}
function $check_session_update(input, context) {
    if (true) {
        return true;
    }
    return false;
}
function session_postUpdate(context, db) {
    return { AND: [] };
}
function $check_session_postUpdate(input, context) {
    return true;
}
function session_delete(context, db) {
    return { AND: [] };
}
function $check_session_delete(input, context) {
    if (true) {
        return true;
    }
    return false;
}
exports.default = policy;
