# coding: utf-8

"""
    An example of generating swagger via gRPC ecosystem.

    No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)  # noqa: E501

    The version of the OpenAPI document: 1.0
    Contact: none@example.com
    Generated by: https://openapi-generator.tech
"""


from __future__ import absolute_import

import unittest

import openapi_client
from openapi_client.api.health_check_service_api import HealthCheckServiceApi  # noqa: E501
from openapi_client.rest import ApiException


class TestHealthCheckServiceApi(unittest.TestCase):
    """HealthCheckServiceApi unit test stubs"""

    def setUp(self):
        self.api = openapi_client.api.health_check_service_api.HealthCheckServiceApi()  # noqa: E501

    def tearDown(self):
        pass

    def test_health_check(self):
        """Test case for health_check

        """
        pass


if __name__ == '__main__':
    unittest.main()