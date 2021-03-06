/* tslint:disable */
/* eslint-disable */
/**
 * An example of generating swagger via gRPC ecosystem.
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * Contact: none@example.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ProtobufAny,
    ProtobufAnyFromJSON,
    ProtobufAnyFromJSONTyped,
    ProtobufAnyToJSON,
} from './';

/**
 * 
 * @export
 * @interface RuntimeError
 */
export interface RuntimeError {
    /**
     * 
     * @type {string}
     * @memberof RuntimeError
     */
    error?: string;
    /**
     * 
     * @type {number}
     * @memberof RuntimeError
     */
    code?: number;
    /**
     * 
     * @type {string}
     * @memberof RuntimeError
     */
    message?: string;
    /**
     * 
     * @type {Array<ProtobufAny>}
     * @memberof RuntimeError
     */
    details?: Array<ProtobufAny>;
}

export function RuntimeErrorFromJSON(json: any): RuntimeError {
    return RuntimeErrorFromJSONTyped(json, false);
}

export function RuntimeErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): RuntimeError {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : json['error'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'message': !exists(json, 'message') ? undefined : json['message'],
        'details': !exists(json, 'details') ? undefined : ((json['details'] as Array<any>).map(ProtobufAnyFromJSON)),
    };
}

export function RuntimeErrorToJSON(value?: RuntimeError | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': value.error,
        'code': value.code,
        'message': value.message,
        'details': value.details === undefined ? undefined : ((value.details as Array<any>).map(ProtobufAnyToJSON)),
    };
}


