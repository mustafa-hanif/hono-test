declare const metadata: {
    models: {
        competition: {
            name: string;
            fields: {
                active: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: boolean;
                        }[];
                    }[];
                };
                created: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                pause: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: boolean;
                        }[];
                    }[];
                };
                updated: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                ended: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: boolean;
                        }[];
                    }[];
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
            };
            attributes: {
                name: string;
                args: ({
                    value: string;
                } | {
                    value: boolean;
                })[];
            }[];
        };
        days: {
            name: string;
            fields: {
                created: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                description: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                name: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                updated: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                active: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: boolean;
                        }[];
                    }[];
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
            };
            attributes: {
                name: string;
                args: ({
                    value: string;
                } | {
                    value: boolean;
                })[];
            }[];
        };
        headings: {
            name: string;
            fields: {
                created: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                name: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                updated: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                day: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                active: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: boolean;
                        }[];
                    }[];
                };
                heading_number: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: number;
                        }[];
                    }[];
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
            };
            attributes: {
                name: string;
                args: ({
                    value: string;
                } | {
                    value: boolean;
                })[];
            }[];
        };
        stocks: {
            name: string;
            fields: {
                bank_name: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                created: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                updated: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
            };
            attributes: {
                name: string;
                args: ({
                    value: string;
                } | {
                    value: boolean;
                })[];
            }[];
        };
        stocks_headings: {
            name: string;
            fields: {
                created: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                headings: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                stocks: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                updated: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                previous_price: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: number;
                        }[];
                    }[];
                };
                current_price: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: number;
                        }[];
                    }[];
                };
                change_in_price: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: number;
                        }[];
                    }[];
                };
                percentage_change_in_price: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
            };
            attributes: {
                name: string;
                args: ({
                    value: string;
                } | {
                    value: boolean;
                })[];
            }[];
        };
        stocks_users: {
            name: string;
            fields: {
                created: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                stocks: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                updated: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                users: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                share_count: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                balance_when_shorting: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                short_share_count: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
            };
            attributes: {
                name: string;
                args: ({
                    value: string;
                } | {
                    value: boolean;
                })[];
            }[];
        };
        timer: {
            name: string;
            fields: {
                active: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: boolean;
                        }[];
                    }[];
                };
                competition_end: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                competition_start: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                created: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                updated: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                round_time: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: number;
                        }[];
                    }[];
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
            };
            attributes: {
                name: string;
                args: ({
                    value: string;
                } | {
                    value: boolean;
                })[];
            }[];
        };
        users: {
            name: string;
            fields: {
                avatar: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                created: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                email: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                emailVisibility: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: boolean;
                        }[];
                    }[];
                };
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                };
                name: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                password: {
                    name: string;
                    type: string;
                };
                tokenKey: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            name: string;
                            value: string;
                        }[];
                    }[];
                };
                updated: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                username: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            name: string;
                            value: string;
                        }[];
                    }[];
                };
                verified: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: boolean;
                        }[];
                    }[];
                };
                type: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                wallet: {
                    name: string;
                    type: string;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                session: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    isArray: boolean;
                    backLink: string;
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
                tokenKey: {
                    name: string;
                    fields: string[];
                };
                username: {
                    name: string;
                    fields: string[];
                };
            };
            attributes: {
                name: string;
                args: ({
                    value: string;
                } | {
                    value: boolean;
                })[];
            }[];
        };
        session: {
            name: string;
            fields: {
                id: {
                    name: string;
                    type: string;
                    isId: boolean;
                    attributes: {
                        name: string;
                        args: {
                            value: string;
                        }[];
                    }[];
                };
                userId: {
                    name: string;
                    type: string;
                    isForeignKey: boolean;
                    relationField: string;
                };
                expiresAt: {
                    name: string;
                    type: string;
                };
                user: {
                    name: string;
                    type: string;
                    isDataModel: boolean;
                    attributes: {
                        name: string;
                        args: never[];
                    }[];
                    backLink: string;
                    isRelationOwner: boolean;
                    foreignKeyMapping: {
                        id: string;
                    };
                };
            };
            uniqueConstraints: {
                id: {
                    name: string;
                    fields: string[];
                };
            };
            attributes: {
                name: string;
                args: ({
                    value: string;
                } | {
                    value: boolean;
                })[];
            }[];
        };
    };
    deleteCascade: {};
};
export default metadata;
