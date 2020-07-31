/*
 * An example of generating swagger via gRPC ecosystem.
 *
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * API version: 1.0
 * Contact: none@example.com
 * Generated by: OpenAPI Generator (https://openapi-generator.tech)
 */

package openapi
// RuntimeError struct for RuntimeError
type RuntimeError struct {
	Error string `json:"error,omitempty"`
	Code int32 `json:"code,omitempty"`
	Message string `json:"message,omitempty"`
	Details []ProtobufAny `json:"details,omitempty"`
}