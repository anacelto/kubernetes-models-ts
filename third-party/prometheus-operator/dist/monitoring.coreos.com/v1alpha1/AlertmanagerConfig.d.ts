import { IObjectMeta } from "@kubernetes-models/apimachinery/apis/meta/v1/ObjectMeta";
import { Model, ModelData } from "@kubernetes-models/base";
export interface IAlertmanagerConfig {
    "apiVersion": "monitoring.coreos.com/v1alpha1";
    "kind": "AlertmanagerConfig";
    "metadata"?: IObjectMeta;
    "spec": {
        "inhibitRules"?: Array<{
            "equal"?: Array<string>;
            "sourceMatch"?: Array<{
                "matchType"?: "!=" | "=" | "=~" | "!~";
                "name": string;
                "regex"?: boolean;
                "value"?: string;
            }>;
            "targetMatch"?: Array<{
                "matchType"?: "!=" | "=" | "=~" | "!~";
                "name": string;
                "regex"?: boolean;
                "value"?: string;
            }>;
        }>;
        "muteTimeIntervals"?: Array<{
            "name"?: string;
            "timeIntervals"?: Array<{
                "daysOfMonth"?: Array<{
                    "end"?: number;
                    "start"?: number;
                }>;
                "months"?: Array<string>;
                "times"?: Array<{
                    "endTime"?: string;
                    "startTime"?: string;
                }>;
                "weekdays"?: Array<string>;
                "years"?: Array<string>;
            }>;
        }>;
        "receivers"?: Array<{
            "emailConfigs"?: Array<{
                "authIdentity"?: string;
                "authPassword"?: {
                    "key": string;
                    "name"?: string;
                    "optional"?: boolean;
                };
                "authSecret"?: {
                    "key": string;
                    "name"?: string;
                    "optional"?: boolean;
                };
                "authUsername"?: string;
                "from"?: string;
                "headers"?: Array<{
                    "key": string;
                    "value": string;
                }>;
                "hello"?: string;
                "html"?: string;
                "requireTLS"?: boolean;
                "sendResolved"?: boolean;
                "smarthost"?: string;
                "text"?: string;
                "tlsConfig"?: {
                    "ca"?: {
                        "configMap"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                        "secret"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                    };
                    "cert"?: {
                        "configMap"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                        "secret"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                    };
                    "insecureSkipVerify"?: boolean;
                    "keySecret"?: {
                        "key": string;
                        "name"?: string;
                        "optional"?: boolean;
                    };
                    "serverName"?: string;
                };
                "to"?: string;
            }>;
            "name": string;
            "opsgenieConfigs"?: Array<{
                "actions"?: string;
                "apiKey"?: {
                    "key": string;
                    "name"?: string;
                    "optional"?: boolean;
                };
                "apiURL"?: string;
                "details"?: Array<{
                    "key": string;
                    "value": string;
                }>;
                "entity"?: string;
                "httpConfig"?: {
                    "authorization"?: {
                        "credentials"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                        "type"?: string;
                    };
                    "basicAuth"?: {
                        "password"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                        "username"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                    };
                    "bearerTokenSecret"?: {
                        "key": string;
                        "name"?: string;
                        "optional"?: boolean;
                    };
                    "followRedirects"?: boolean;
                    "oauth2"?: {
                        "clientId": {
                            "configMap"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                            "secret"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                        };
                        "clientSecret": {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                        "endpointParams"?: {
                            [key: string]: string;
                        };
                        "scopes"?: Array<string>;
                        "tokenUrl": string;
                    };
                    "proxyURL"?: string;
                    "tlsConfig"?: {
                        "ca"?: {
                            "configMap"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                            "secret"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                        };
                        "cert"?: {
                            "configMap"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                            "secret"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                        };
                        "insecureSkipVerify"?: boolean;
                        "keySecret"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                        "serverName"?: string;
                    };
                };
                "message"?: string;
                "note"?: string;
                "priority"?: string;
                "responders"?: Array<{
                    "id"?: string;
                    "name"?: string;
                    "type": "team" | "teams" | "user" | "escalation" | "schedule";
                    "username"?: string;
                }>;
                "sendResolved"?: boolean;
                "source"?: string;
                "tags"?: string;
                "updateAlerts"?: boolean;
            }>;
            "pagerdutyConfigs"?: Array<{
                "class"?: string;
                "client"?: string;
                "clientURL"?: string;
                "component"?: string;
                "details"?: Array<{
                    "key": string;
                    "value": string;
                }>;
                "group"?: string;
                "httpConfig"?: {
                    "authorization"?: {
                        "credentials"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                        "type"?: string;
                    };
                    "basicAuth"?: {
                        "password"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                        "username"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                    };
                    "bearerTokenSecret"?: {
                        "key": string;
                        "name"?: string;
                        "optional"?: boolean;
                    };
                    "followRedirects"?: boolean;
                    "oauth2"?: {
                        "clientId": {
                            "configMap"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                            "secret"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                        };
                        "clientSecret": {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                        "endpointParams"?: {
                            [key: string]: string;
                        };
                        "scopes"?: Array<string>;
                        "tokenUrl": string;
                    };
                    "proxyURL"?: string;
                    "tlsConfig"?: {
                        "ca"?: {
                            "configMap"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                            "secret"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                        };
                        "cert"?: {
                            "configMap"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                            "secret"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                        };
                        "insecureSkipVerify"?: boolean;
                        "keySecret"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                        "serverName"?: string;
                    };
                };
                "pagerDutyImageConfigs"?: Array<{
                    "alt"?: string;
                    "href"?: string;
                    "src"?: string;
                }>;
                "pagerDutyLinkConfigs"?: Array<{
                    "alt"?: string;
                    "href"?: string;
                }>;
                "routingKey"?: {
                    "key": string;
                    "name"?: string;
                    "optional"?: boolean;
                };
                "sendResolved"?: boolean;
                "serviceKey"?: {
                    "key": string;
                    "name"?: string;
                    "optional"?: boolean;
                };
                "severity"?: string;
                "url"?: string;
            }>;
            "pushoverConfigs"?: Array<{
                "expire"?: string;
                "html"?: boolean;
                "httpConfig"?: {
                    "authorization"?: {
                        "credentials"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                        "type"?: string;
                    };
                    "basicAuth"?: {
                        "password"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                        "username"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                    };
                    "bearerTokenSecret"?: {
                        "key": string;
                        "name"?: string;
                        "optional"?: boolean;
                    };
                    "followRedirects"?: boolean;
                    "oauth2"?: {
                        "clientId": {
                            "configMap"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                            "secret"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                        };
                        "clientSecret": {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                        "endpointParams"?: {
                            [key: string]: string;
                        };
                        "scopes"?: Array<string>;
                        "tokenUrl": string;
                    };
                    "proxyURL"?: string;
                    "tlsConfig"?: {
                        "ca"?: {
                            "configMap"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                            "secret"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                        };
                        "cert"?: {
                            "configMap"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                            "secret"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                        };
                        "insecureSkipVerify"?: boolean;
                        "keySecret"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                        "serverName"?: string;
                    };
                };
                "message"?: string;
                "priority"?: string;
                "retry"?: string;
                "sendResolved"?: boolean;
                "sound"?: string;
                "title"?: string;
                "token"?: {
                    "key": string;
                    "name"?: string;
                    "optional"?: boolean;
                };
                "url"?: string;
                "urlTitle"?: string;
                "userKey"?: {
                    "key": string;
                    "name"?: string;
                    "optional"?: boolean;
                };
            }>;
            "slackConfigs"?: Array<{
                "actions"?: Array<{
                    "confirm"?: {
                        "dismissText"?: string;
                        "okText"?: string;
                        "text": string;
                        "title"?: string;
                    };
                    "name"?: string;
                    "style"?: string;
                    "text": string;
                    "type": string;
                    "url"?: string;
                    "value"?: string;
                }>;
                "apiURL"?: {
                    "key": string;
                    "name"?: string;
                    "optional"?: boolean;
                };
                "callbackId"?: string;
                "channel"?: string;
                "color"?: string;
                "fallback"?: string;
                "fields"?: Array<{
                    "short"?: boolean;
                    "title": string;
                    "value": string;
                }>;
                "footer"?: string;
                "httpConfig"?: {
                    "authorization"?: {
                        "credentials"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                        "type"?: string;
                    };
                    "basicAuth"?: {
                        "password"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                        "username"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                    };
                    "bearerTokenSecret"?: {
                        "key": string;
                        "name"?: string;
                        "optional"?: boolean;
                    };
                    "followRedirects"?: boolean;
                    "oauth2"?: {
                        "clientId": {
                            "configMap"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                            "secret"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                        };
                        "clientSecret": {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                        "endpointParams"?: {
                            [key: string]: string;
                        };
                        "scopes"?: Array<string>;
                        "tokenUrl": string;
                    };
                    "proxyURL"?: string;
                    "tlsConfig"?: {
                        "ca"?: {
                            "configMap"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                            "secret"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                        };
                        "cert"?: {
                            "configMap"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                            "secret"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                        };
                        "insecureSkipVerify"?: boolean;
                        "keySecret"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                        "serverName"?: string;
                    };
                };
                "iconEmoji"?: string;
                "iconURL"?: string;
                "imageURL"?: string;
                "linkNames"?: boolean;
                "mrkdwnIn"?: Array<string>;
                "pretext"?: string;
                "sendResolved"?: boolean;
                "shortFields"?: boolean;
                "text"?: string;
                "thumbURL"?: string;
                "title"?: string;
                "titleLink"?: string;
                "username"?: string;
            }>;
            "snsConfigs"?: Array<{
                "apiURL"?: string;
                "attributes"?: {
                    [key: string]: string;
                };
                "httpConfig"?: {
                    "authorization"?: {
                        "credentials"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                        "type"?: string;
                    };
                    "basicAuth"?: {
                        "password"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                        "username"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                    };
                    "bearerTokenSecret"?: {
                        "key": string;
                        "name"?: string;
                        "optional"?: boolean;
                    };
                    "followRedirects"?: boolean;
                    "oauth2"?: {
                        "clientId": {
                            "configMap"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                            "secret"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                        };
                        "clientSecret": {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                        "endpointParams"?: {
                            [key: string]: string;
                        };
                        "scopes"?: Array<string>;
                        "tokenUrl": string;
                    };
                    "proxyURL"?: string;
                    "tlsConfig"?: {
                        "ca"?: {
                            "configMap"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                            "secret"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                        };
                        "cert"?: {
                            "configMap"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                            "secret"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                        };
                        "insecureSkipVerify"?: boolean;
                        "keySecret"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                        "serverName"?: string;
                    };
                };
                "message"?: string;
                "phoneNumber"?: string;
                "sendResolved"?: boolean;
                "sigv4"?: {
                    "accessKey"?: {
                        "key": string;
                        "name"?: string;
                        "optional"?: boolean;
                    };
                    "profile"?: string;
                    "region"?: string;
                    "roleArn"?: string;
                    "secretKey"?: {
                        "key": string;
                        "name"?: string;
                        "optional"?: boolean;
                    };
                };
                "subject"?: string;
                "targetARN"?: string;
                "topicARN"?: string;
            }>;
            "telegramConfigs"?: Array<{
                "apiURL"?: string;
                "botToken"?: {
                    "key": string;
                    "name"?: string;
                    "optional"?: boolean;
                };
                "chatID"?: number;
                "disableNotifications"?: boolean;
                "httpConfig"?: {
                    "authorization"?: {
                        "credentials"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                        "type"?: string;
                    };
                    "basicAuth"?: {
                        "password"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                        "username"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                    };
                    "bearerTokenSecret"?: {
                        "key": string;
                        "name"?: string;
                        "optional"?: boolean;
                    };
                    "followRedirects"?: boolean;
                    "oauth2"?: {
                        "clientId": {
                            "configMap"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                            "secret"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                        };
                        "clientSecret": {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                        "endpointParams"?: {
                            [key: string]: string;
                        };
                        "scopes"?: Array<string>;
                        "tokenUrl": string;
                    };
                    "proxyURL"?: string;
                    "tlsConfig"?: {
                        "ca"?: {
                            "configMap"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                            "secret"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                        };
                        "cert"?: {
                            "configMap"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                            "secret"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                        };
                        "insecureSkipVerify"?: boolean;
                        "keySecret"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                        "serverName"?: string;
                    };
                };
                "message"?: string;
                "parseMode"?: "MarkdownV2" | "Markdown" | "HTML";
                "sendResolved"?: boolean;
            }>;
            "victoropsConfigs"?: Array<{
                "apiKey"?: {
                    "key": string;
                    "name"?: string;
                    "optional"?: boolean;
                };
                "apiUrl"?: string;
                "customFields"?: Array<{
                    "key": string;
                    "value": string;
                }>;
                "entityDisplayName"?: string;
                "httpConfig"?: {
                    "authorization"?: {
                        "credentials"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                        "type"?: string;
                    };
                    "basicAuth"?: {
                        "password"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                        "username"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                    };
                    "bearerTokenSecret"?: {
                        "key": string;
                        "name"?: string;
                        "optional"?: boolean;
                    };
                    "followRedirects"?: boolean;
                    "oauth2"?: {
                        "clientId": {
                            "configMap"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                            "secret"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                        };
                        "clientSecret": {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                        "endpointParams"?: {
                            [key: string]: string;
                        };
                        "scopes"?: Array<string>;
                        "tokenUrl": string;
                    };
                    "proxyURL"?: string;
                    "tlsConfig"?: {
                        "ca"?: {
                            "configMap"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                            "secret"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                        };
                        "cert"?: {
                            "configMap"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                            "secret"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                        };
                        "insecureSkipVerify"?: boolean;
                        "keySecret"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                        "serverName"?: string;
                    };
                };
                "messageType"?: string;
                "monitoringTool"?: string;
                "routingKey"?: string;
                "sendResolved"?: boolean;
                "stateMessage"?: string;
            }>;
            "webhookConfigs"?: Array<{
                "httpConfig"?: {
                    "authorization"?: {
                        "credentials"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                        "type"?: string;
                    };
                    "basicAuth"?: {
                        "password"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                        "username"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                    };
                    "bearerTokenSecret"?: {
                        "key": string;
                        "name"?: string;
                        "optional"?: boolean;
                    };
                    "followRedirects"?: boolean;
                    "oauth2"?: {
                        "clientId": {
                            "configMap"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                            "secret"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                        };
                        "clientSecret": {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                        "endpointParams"?: {
                            [key: string]: string;
                        };
                        "scopes"?: Array<string>;
                        "tokenUrl": string;
                    };
                    "proxyURL"?: string;
                    "tlsConfig"?: {
                        "ca"?: {
                            "configMap"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                            "secret"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                        };
                        "cert"?: {
                            "configMap"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                            "secret"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                        };
                        "insecureSkipVerify"?: boolean;
                        "keySecret"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                        "serverName"?: string;
                    };
                };
                "maxAlerts"?: number;
                "sendResolved"?: boolean;
                "url"?: string;
                "urlSecret"?: {
                    "key": string;
                    "name"?: string;
                    "optional"?: boolean;
                };
            }>;
            "wechatConfigs"?: Array<{
                "agentID"?: string;
                "apiSecret"?: {
                    "key": string;
                    "name"?: string;
                    "optional"?: boolean;
                };
                "apiURL"?: string;
                "corpID"?: string;
                "httpConfig"?: {
                    "authorization"?: {
                        "credentials"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                        "type"?: string;
                    };
                    "basicAuth"?: {
                        "password"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                        "username"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                    };
                    "bearerTokenSecret"?: {
                        "key": string;
                        "name"?: string;
                        "optional"?: boolean;
                    };
                    "followRedirects"?: boolean;
                    "oauth2"?: {
                        "clientId": {
                            "configMap"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                            "secret"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                        };
                        "clientSecret": {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                        "endpointParams"?: {
                            [key: string]: string;
                        };
                        "scopes"?: Array<string>;
                        "tokenUrl": string;
                    };
                    "proxyURL"?: string;
                    "tlsConfig"?: {
                        "ca"?: {
                            "configMap"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                            "secret"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                        };
                        "cert"?: {
                            "configMap"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                            "secret"?: {
                                "key": string;
                                "name"?: string;
                                "optional"?: boolean;
                            };
                        };
                        "insecureSkipVerify"?: boolean;
                        "keySecret"?: {
                            "key": string;
                            "name"?: string;
                            "optional"?: boolean;
                        };
                        "serverName"?: string;
                    };
                };
                "message"?: string;
                "messageType"?: string;
                "sendResolved"?: boolean;
                "toParty"?: string;
                "toTag"?: string;
                "toUser"?: string;
            }>;
        }>;
        "route"?: {
            "activeTimeIntervals"?: Array<string>;
            "continue"?: boolean;
            "groupBy"?: Array<string>;
            "groupInterval"?: string;
            "groupWait"?: string;
            "matchers"?: Array<{
                "matchType"?: "!=" | "=" | "=~" | "!~";
                "name": string;
                "regex"?: boolean;
                "value"?: string;
            }>;
            "muteTimeIntervals"?: Array<string>;
            "receiver"?: string;
            "repeatInterval"?: string;
            "routes"?: Array<any>;
        };
    };
}
export declare class AlertmanagerConfig extends Model<IAlertmanagerConfig> implements IAlertmanagerConfig {
    "apiVersion": IAlertmanagerConfig["apiVersion"];
    "kind": IAlertmanagerConfig["kind"];
    "metadata"?: IAlertmanagerConfig["metadata"];
    "spec": IAlertmanagerConfig["spec"];
    static apiVersion: IAlertmanagerConfig["apiVersion"];
    static kind: IAlertmanagerConfig["kind"];
    static is: import("@kubernetes-models/base").TypeMetaGuard<IAlertmanagerConfig>;
    constructor(data?: ModelData<IAlertmanagerConfig>);
}
