/* eslint-disable */
/* prettier-ignore */

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * It will automatically be used by `gql.tada` to infer the types of your GraphQL documents.
 * If you need to reuse this data or update your `scalars`, update `tadaOutputLocation` to
 * instead save to a .ts instead of a .d.ts file.
 */
export type introspection = {
  "__schema": {
    "queryType": {
      "name": "Query"
    },
    "mutationType": {
      "name": "Mutation"
    },
    "subscriptionType": null,
    "types": [
      {
        "kind": "OBJECT",
        "name": "Query",
        "fields": [
          {
            "name": "aggregatePost",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AggregatePost",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostWhereInput",
                  "ofType": null
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "PostOrderByWithRelationInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostWhereUniqueInput",
                  "ofType": null
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "findFirstPost",
            "type": {
              "kind": "OBJECT",
              "name": "Post",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostWhereInput",
                  "ofType": null
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "PostOrderByWithRelationInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostWhereUniqueInput",
                  "ofType": null
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "PostScalarFieldEnum",
                      "ofType": null
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "findFirstPostOrThrow",
            "type": {
              "kind": "OBJECT",
              "name": "Post",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostWhereInput",
                  "ofType": null
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "PostOrderByWithRelationInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostWhereUniqueInput",
                  "ofType": null
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "PostScalarFieldEnum",
                      "ofType": null
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "posts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Post",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostWhereInput",
                  "ofType": null
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "PostOrderByWithRelationInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostWhereUniqueInput",
                  "ofType": null
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "PostScalarFieldEnum",
                      "ofType": null
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "post",
            "type": {
              "kind": "OBJECT",
              "name": "Post",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "PostWhereUniqueInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "getPost",
            "type": {
              "kind": "OBJECT",
              "name": "Post",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "PostWhereUniqueInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "groupByPost",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "PostGroupBy",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostWhereInput",
                  "ofType": null
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "PostOrderByWithAggregationInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "by",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "PostScalarFieldEnum",
                        "ofType": null
                      }
                    }
                  }
                }
              },
              {
                "name": "having",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostScalarWhereWithAggregatesInput",
                  "ofType": null
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "aggregateUser",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AggregateUser",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereInput",
                  "ofType": null
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UserOrderByWithRelationInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereUniqueInput",
                  "ofType": null
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "findFirstUser",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereInput",
                  "ofType": null
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UserOrderByWithRelationInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereUniqueInput",
                  "ofType": null
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "UserScalarFieldEnum",
                      "ofType": null
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "findFirstUserOrThrow",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereInput",
                  "ofType": null
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UserOrderByWithRelationInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereUniqueInput",
                  "ofType": null
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "UserScalarFieldEnum",
                      "ofType": null
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "users",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "User",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereInput",
                  "ofType": null
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UserOrderByWithRelationInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereUniqueInput",
                  "ofType": null
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "UserScalarFieldEnum",
                      "ofType": null
                    }
                  }
                }
              }
            ]
          },
          {
            "name": "user",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UserWhereUniqueInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "getUser",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UserWhereUniqueInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "groupByUser",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "UserGroupBy",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereInput",
                  "ofType": null
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "UserOrderByWithAggregationInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "by",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "ENUM",
                        "name": "UserScalarFieldEnum",
                        "ofType": null
                      }
                    }
                  }
                }
              },
              {
                "name": "having",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserScalarWhereWithAggregatesInput",
                  "ofType": null
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "AggregatePost",
        "fields": [
          {
            "name": "_count",
            "type": {
              "kind": "OBJECT",
              "name": "PostCountAggregate",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "_min",
            "type": {
              "kind": "OBJECT",
              "name": "PostMinAggregate",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "_max",
            "type": {
              "kind": "OBJECT",
              "name": "PostMaxAggregate",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "PostCountAggregate",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "content",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "authorId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "_all",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "Int"
      },
      {
        "kind": "OBJECT",
        "name": "PostMinAggregate",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "content",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "authorId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "SCALAR",
        "name": "String"
      },
      {
        "kind": "SCALAR",
        "name": "DateTime"
      },
      {
        "kind": "OBJECT",
        "name": "PostMaxAggregate",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "content",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "authorId",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PostWhereInput",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "NOT",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          },
          {
            "name": "content",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "authorId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "author",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserRelationFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "StringFilter",
        "inputFields": [
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "startsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "endsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "mode",
            "type": {
              "kind": "ENUM",
              "name": "QueryMode",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedStringFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "QueryMode",
        "enumValues": [
          {
            "name": "default"
          },
          {
            "name": "insensitive"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "NestedStringFilter",
        "inputFields": [
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "startsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "endsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedStringFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DateTimeFilter",
        "inputFields": [
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedDateTimeFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "NestedDateTimeFilter",
        "inputFields": [
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedDateTimeFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "StringNullableFilter",
        "inputFields": [
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "startsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "endsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "mode",
            "type": {
              "kind": "ENUM",
              "name": "QueryMode",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedStringNullableFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "NestedStringNullableFilter",
        "inputFields": [
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "startsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "endsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedStringNullableFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserRelationFilter",
        "inputFields": [
          {
            "name": "is",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserWhereInput",
              "ofType": null
            }
          },
          {
            "name": "isNot",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserWhereInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserWhereInput",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "NOT",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "password",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "role",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "EnumRoleFilter",
              "ofType": null
            }
          },
          {
            "name": "Posts",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "PostListRelationFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "EnumRoleFilter",
        "inputFields": [
          {
            "name": "equals",
            "type": {
              "kind": "ENUM",
              "name": "Role",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "Role",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "Role",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedEnumRoleFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "Role",
        "enumValues": [
          {
            "name": "NORMAL"
          },
          {
            "name": "ADMIN"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "NestedEnumRoleFilter",
        "inputFields": [
          {
            "name": "equals",
            "type": {
              "kind": "ENUM",
              "name": "Role",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "Role",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "Role",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedEnumRoleFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PostListRelationFilter",
        "inputFields": [
          {
            "name": "every",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "PostWhereInput",
              "ofType": null
            }
          },
          {
            "name": "some",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "PostWhereInput",
              "ofType": null
            }
          },
          {
            "name": "none",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "PostWhereInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PostOrderByWithRelationInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "content",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SortOrderInput",
              "ofType": null
            }
          },
          {
            "name": "authorId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "author",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserOrderByWithRelationInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "SortOrder",
        "enumValues": [
          {
            "name": "asc"
          },
          {
            "name": "desc"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "SortOrderInput",
        "inputFields": [
          {
            "name": "sort",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "SortOrder",
                "ofType": null
              }
            }
          },
          {
            "name": "nulls",
            "type": {
              "kind": "ENUM",
              "name": "NullsOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "NullsOrder",
        "enumValues": [
          {
            "name": "first"
          },
          {
            "name": "last"
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserOrderByWithRelationInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "password",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "role",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "Posts",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "PostOrderByRelationAggregateInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PostOrderByRelationAggregateInput",
        "inputFields": [
          {
            "name": "_count",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PostWhereUniqueInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "NOT",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          },
          {
            "name": "content",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "authorId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "author",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserRelationFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Post",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "content",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "authorId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "author",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "User",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "password",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "role",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "Role",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "_count",
            "type": {
              "kind": "OBJECT",
              "name": "UserCount",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "Posts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "Post",
                    "ofType": null
                  }
                }
              }
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostWhereInput",
                  "ofType": null
                }
              },
              {
                "name": "orderBy",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "PostOrderByWithRelationInput",
                      "ofType": null
                    }
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostWhereUniqueInput",
                  "ofType": null
                }
              },
              {
                "name": "take",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "skip",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "PostScalarFieldEnum",
                      "ofType": null
                    }
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UserCount",
        "fields": [
          {
            "name": "Posts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostWhereInput",
                  "ofType": null
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "PostScalarFieldEnum",
        "enumValues": [
          {
            "name": "id"
          },
          {
            "name": "title"
          },
          {
            "name": "createdAt"
          },
          {
            "name": "updatedAt"
          },
          {
            "name": "content"
          },
          {
            "name": "authorId"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "PostGroupBy",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "DateTime",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "content",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "authorId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "_count",
            "type": {
              "kind": "OBJECT",
              "name": "PostCountAggregate",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "_min",
            "type": {
              "kind": "OBJECT",
              "name": "PostMinAggregate",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "_max",
            "type": {
              "kind": "OBJECT",
              "name": "PostMaxAggregate",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PostOrderByWithAggregationInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "content",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "SortOrderInput",
              "ofType": null
            }
          },
          {
            "name": "authorId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "_count",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "PostCountOrderByAggregateInput",
              "ofType": null
            }
          },
          {
            "name": "_max",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "PostMaxOrderByAggregateInput",
              "ofType": null
            }
          },
          {
            "name": "_min",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "PostMinOrderByAggregateInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PostCountOrderByAggregateInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "content",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "authorId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PostMaxOrderByAggregateInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "content",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "authorId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PostMinOrderByAggregateInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "content",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "authorId",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PostScalarWhereWithAggregatesInput",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostScalarWhereWithAggregatesInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostScalarWhereWithAggregatesInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "NOT",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostScalarWhereWithAggregatesInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "content",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringNullableWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "authorId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringWithAggregatesFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "StringWithAggregatesFilter",
        "inputFields": [
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "startsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "endsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "mode",
            "type": {
              "kind": "ENUM",
              "name": "QueryMode",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedStringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "_count",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedIntFilter",
              "ofType": null
            }
          },
          {
            "name": "_min",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedStringFilter",
              "ofType": null
            }
          },
          {
            "name": "_max",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedStringFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "NestedStringWithAggregatesFilter",
        "inputFields": [
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "startsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "endsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedStringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "_count",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedIntFilter",
              "ofType": null
            }
          },
          {
            "name": "_min",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedStringFilter",
              "ofType": null
            }
          },
          {
            "name": "_max",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedStringFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "NestedIntFilter",
        "inputFields": [
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedIntFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DateTimeWithAggregatesFilter",
        "inputFields": [
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedDateTimeWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "_count",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedIntFilter",
              "ofType": null
            }
          },
          {
            "name": "_min",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedDateTimeFilter",
              "ofType": null
            }
          },
          {
            "name": "_max",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedDateTimeFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "NestedDateTimeWithAggregatesFilter",
        "inputFields": [
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "DateTime",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedDateTimeWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "_count",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedIntFilter",
              "ofType": null
            }
          },
          {
            "name": "_min",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedDateTimeFilter",
              "ofType": null
            }
          },
          {
            "name": "_max",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedDateTimeFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "StringNullableWithAggregatesFilter",
        "inputFields": [
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "startsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "endsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "mode",
            "type": {
              "kind": "ENUM",
              "name": "QueryMode",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedStringNullableWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "_count",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedIntNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "_min",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedStringNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "_max",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedStringNullableFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "NestedStringNullableWithAggregatesFilter",
        "inputFields": [
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "contains",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "startsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "endsWith",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedStringNullableWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "_count",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedIntNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "_min",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedStringNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "_max",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedStringNullableFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "NestedIntNullableFilter",
        "inputFields": [
          {
            "name": "equals",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "lt",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "lte",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "gt",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "gte",
            "type": {
              "kind": "SCALAR",
              "name": "Int",
              "ofType": null
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedIntNullableFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "AggregateUser",
        "fields": [
          {
            "name": "_count",
            "type": {
              "kind": "OBJECT",
              "name": "UserCountAggregate",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "_min",
            "type": {
              "kind": "OBJECT",
              "name": "UserMinAggregate",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "_max",
            "type": {
              "kind": "OBJECT",
              "name": "UserMaxAggregate",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UserCountAggregate",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "password",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "role",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "_all",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UserMinAggregate",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "password",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "role",
            "type": {
              "kind": "ENUM",
              "name": "Role",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "UserMaxAggregate",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "password",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "role",
            "type": {
              "kind": "ENUM",
              "name": "Role",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserWhereUniqueInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "NOT",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "password",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "role",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "EnumRoleFilter",
              "ofType": null
            }
          },
          {
            "name": "Posts",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "PostListRelationFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "ENUM",
        "name": "UserScalarFieldEnum",
        "enumValues": [
          {
            "name": "id"
          },
          {
            "name": "email"
          },
          {
            "name": "password"
          },
          {
            "name": "role"
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "UserGroupBy",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "email",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "password",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "role",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "Role",
                "ofType": null
              }
            },
            "args": []
          },
          {
            "name": "_count",
            "type": {
              "kind": "OBJECT",
              "name": "UserCountAggregate",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "_min",
            "type": {
              "kind": "OBJECT",
              "name": "UserMinAggregate",
              "ofType": null
            },
            "args": []
          },
          {
            "name": "_max",
            "type": {
              "kind": "OBJECT",
              "name": "UserMaxAggregate",
              "ofType": null
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserOrderByWithAggregationInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "password",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "role",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "_count",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserCountOrderByAggregateInput",
              "ofType": null
            }
          },
          {
            "name": "_max",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserMaxOrderByAggregateInput",
              "ofType": null
            }
          },
          {
            "name": "_min",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserMinOrderByAggregateInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserCountOrderByAggregateInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "password",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "role",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserMaxOrderByAggregateInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "password",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "role",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserMinOrderByAggregateInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "password",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          },
          {
            "name": "role",
            "type": {
              "kind": "ENUM",
              "name": "SortOrder",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserScalarWhereWithAggregatesInput",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserScalarWhereWithAggregatesInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserScalarWhereWithAggregatesInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "NOT",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserScalarWhereWithAggregatesInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "password",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "role",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "EnumRoleWithAggregatesFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "EnumRoleWithAggregatesFilter",
        "inputFields": [
          {
            "name": "equals",
            "type": {
              "kind": "ENUM",
              "name": "Role",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "Role",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "Role",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedEnumRoleWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "_count",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedIntFilter",
              "ofType": null
            }
          },
          {
            "name": "_min",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedEnumRoleFilter",
              "ofType": null
            }
          },
          {
            "name": "_max",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedEnumRoleFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "NestedEnumRoleWithAggregatesFilter",
        "inputFields": [
          {
            "name": "equals",
            "type": {
              "kind": "ENUM",
              "name": "Role",
              "ofType": null
            }
          },
          {
            "name": "in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "Role",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "notIn",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "Role",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedEnumRoleWithAggregatesFilter",
              "ofType": null
            }
          },
          {
            "name": "_count",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedIntFilter",
              "ofType": null
            }
          },
          {
            "name": "_min",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedEnumRoleFilter",
              "ofType": null
            }
          },
          {
            "name": "_max",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NestedEnumRoleFilter",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "Mutation",
        "fields": [
          {
            "name": "createManyPost",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AffectedRowsOutput",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "PostCreateManyInput",
                        "ofType": null
                      }
                    }
                  }
                }
              },
              {
                "name": "skipDuplicates",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "createOnePost",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Post",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "PostCreateInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "deleteManyPost",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AffectedRowsOutput",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostWhereInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "deleteOnePost",
            "type": {
              "kind": "OBJECT",
              "name": "Post",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "PostWhereUniqueInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "updateManyPost",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AffectedRowsOutput",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "PostUpdateManyMutationInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostWhereInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "updateOnePost",
            "type": {
              "kind": "OBJECT",
              "name": "Post",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "PostUpdateInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "PostWhereUniqueInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "upsertOnePost",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "Post",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "PostWhereUniqueInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "create",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "PostCreateInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "update",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "PostUpdateInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "createManyUser",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AffectedRowsOutput",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "UserCreateManyInput",
                        "ofType": null
                      }
                    }
                  }
                }
              },
              {
                "name": "skipDuplicates",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "createOneUser",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UserCreateInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "deleteManyUser",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AffectedRowsOutput",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "deleteOneUser",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UserWhereUniqueInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "updateManyUser",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "AffectedRowsOutput",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UserUpdateManyMutationInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "UserWhereInput",
                  "ofType": null
                }
              }
            ]
          },
          {
            "name": "updateOneUser",
            "type": {
              "kind": "OBJECT",
              "name": "User",
              "ofType": null
            },
            "args": [
              {
                "name": "data",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UserUpdateInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UserWhereUniqueInput",
                    "ofType": null
                  }
                }
              }
            ]
          },
          {
            "name": "upsertOneUser",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "User",
                "ofType": null
              }
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UserWhereUniqueInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "create",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UserCreateInput",
                    "ofType": null
                  }
                }
              },
              {
                "name": "update",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "UserUpdateInput",
                    "ofType": null
                  }
                }
              }
            ]
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "AffectedRowsOutput",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int",
                "ofType": null
              }
            },
            "args": []
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PostCreateManyInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "content",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "authorId",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "Boolean"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PostCreateInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "content",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "author",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UserCreateNestedOneWithoutPostsInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserCreateNestedOneWithoutPostsInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserCreateWithoutPostsInput",
              "ofType": null
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserCreateOrConnectWithoutPostsInput",
              "ofType": null
            }
          },
          {
            "name": "connect",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserWhereUniqueInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserCreateWithoutPostsInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "password",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "role",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "Role",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserCreateOrConnectWithoutPostsInput",
        "inputFields": [
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UserWhereUniqueInput",
                "ofType": null
              }
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UserCreateWithoutPostsInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PostUpdateManyMutationInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "content",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NullableStringFieldUpdateOperationsInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "StringFieldUpdateOperationsInput",
        "inputFields": [
          {
            "name": "set",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "DateTimeFieldUpdateOperationsInput",
        "inputFields": [
          {
            "name": "set",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "NullableStringFieldUpdateOperationsInput",
        "inputFields": [
          {
            "name": "set",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PostUpdateInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "content",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NullableStringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "author",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserUpdateOneRequiredWithoutPostsNestedInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserUpdateOneRequiredWithoutPostsNestedInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserCreateWithoutPostsInput",
              "ofType": null
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserCreateOrConnectWithoutPostsInput",
              "ofType": null
            }
          },
          {
            "name": "upsert",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserUpsertWithoutPostsInput",
              "ofType": null
            }
          },
          {
            "name": "connect",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserWhereUniqueInput",
              "ofType": null
            }
          },
          {
            "name": "update",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserUpdateToOneWithWhereWithoutPostsInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserUpsertWithoutPostsInput",
        "inputFields": [
          {
            "name": "update",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UserUpdateWithoutPostsInput",
                "ofType": null
              }
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UserCreateWithoutPostsInput",
                "ofType": null
              }
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserWhereInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserUpdateWithoutPostsInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "password",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "role",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "EnumRoleFieldUpdateOperationsInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "EnumRoleFieldUpdateOperationsInput",
        "inputFields": [
          {
            "name": "set",
            "type": {
              "kind": "ENUM",
              "name": "Role",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserUpdateToOneWithWhereWithoutPostsInput",
        "inputFields": [
          {
            "name": "where",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "UserWhereInput",
              "ofType": null
            }
          },
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "UserUpdateWithoutPostsInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserCreateManyInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "password",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "role",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "Role",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserCreateInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "password",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "role",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "Role",
                "ofType": null
              }
            }
          },
          {
            "name": "Posts",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "PostCreateNestedManyWithoutAuthorInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PostCreateNestedManyWithoutAuthorInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostCreateWithoutAuthorInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostCreateOrConnectWithoutAuthorInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "createMany",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "PostCreateManyAuthorInputEnvelope",
              "ofType": null
            }
          },
          {
            "name": "connect",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PostCreateWithoutAuthorInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "content",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PostCreateOrConnectWithoutAuthorInput",
        "inputFields": [
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "PostWhereUniqueInput",
                "ofType": null
              }
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "PostCreateWithoutAuthorInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PostCreateManyAuthorInputEnvelope",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "PostCreateManyAuthorInput",
                    "ofType": null
                  }
                }
              }
            }
          },
          {
            "name": "skipDuplicates",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PostCreateManyAuthorInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String",
                "ofType": null
              }
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "SCALAR",
              "name": "DateTime",
              "ofType": null
            }
          },
          {
            "name": "content",
            "type": {
              "kind": "SCALAR",
              "name": "String",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserUpdateManyMutationInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "password",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "role",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "EnumRoleFieldUpdateOperationsInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "UserUpdateInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "password",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "role",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "EnumRoleFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "Posts",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "PostUpdateManyWithoutAuthorNestedInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PostUpdateManyWithoutAuthorNestedInput",
        "inputFields": [
          {
            "name": "create",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostCreateWithoutAuthorInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "connectOrCreate",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostCreateOrConnectWithoutAuthorInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "upsert",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostUpsertWithWhereUniqueWithoutAuthorInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "createMany",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "PostCreateManyAuthorInputEnvelope",
              "ofType": null
            }
          },
          {
            "name": "set",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "disconnect",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "delete",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "connect",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostWhereUniqueInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "update",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostUpdateWithWhereUniqueWithoutAuthorInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "updateMany",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostUpdateManyWithWhereWithoutAuthorInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "deleteMany",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostScalarWhereInput",
                  "ofType": null
                }
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PostUpsertWithWhereUniqueWithoutAuthorInput",
        "inputFields": [
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "PostWhereUniqueInput",
                "ofType": null
              }
            }
          },
          {
            "name": "update",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "PostUpdateWithoutAuthorInput",
                "ofType": null
              }
            }
          },
          {
            "name": "create",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "PostCreateWithoutAuthorInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PostUpdateWithoutAuthorInput",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFieldUpdateOperationsInput",
              "ofType": null
            }
          },
          {
            "name": "content",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "NullableStringFieldUpdateOperationsInput",
              "ofType": null
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PostUpdateWithWhereUniqueWithoutAuthorInput",
        "inputFields": [
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "PostWhereUniqueInput",
                "ofType": null
              }
            }
          },
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "PostUpdateWithoutAuthorInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PostUpdateManyWithWhereWithoutAuthorInput",
        "inputFields": [
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "PostScalarWhereInput",
                "ofType": null
              }
            }
          },
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "PostUpdateManyMutationInput",
                "ofType": null
              }
            }
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "PostScalarWhereInput",
        "inputFields": [
          {
            "name": "AND",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostScalarWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "OR",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostScalarWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "NOT",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "PostScalarWhereInput",
                  "ofType": null
                }
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          },
          {
            "name": "createdAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          },
          {
            "name": "updatedAt",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "DateTimeFilter",
              "ofType": null
            }
          },
          {
            "name": "content",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringNullableFilter",
              "ofType": null
            }
          },
          {
            "name": "authorId",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "StringFilter",
              "ofType": null
            }
          }
        ]
      }
    ],
    "directives": []
  }
};

import * as gqlTada from 'gql.tada';

declare module 'gql.tada' {
  interface setupSchema {
    introspection: introspection
  }
}